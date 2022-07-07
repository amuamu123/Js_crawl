import requests
from bs4 import BeautifulSoup
from db_connect import Mysql_db
import time
import random

class Weibo:
    # 初始化
    def __init__(self) -> None:
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
        self.sub = ''
        self.subp = ''
        self.mysql_db = Mysql_db()
        self.error_count = 15
    # 获取tid
    def get_tid(self):
        self.session = requests.Session()
        tid_url = "https://passport.weibo.com/visitor/genvisitor"
        data = {
            "cb": "gen_callback",
            "fp": {"os": "3","browser": "Chrome102,0,0,0",
                "fonts": "undefined",
                "screenInfo": "1920*1080*24",
                "plugins": "Portable Document Format::internal-pdf-viewer::Chrome PDF Plugin|::mhjfbmdgcfjbbpaeojofohoefgiehjai::Chrome PDF Viewer|::internal-nacl-plugin::Native Client"
            }
        }
        req = self.session.post(url=tid_url, data=data, headers=self.headers)

        if req.status_code == 200:
            ret = eval(req.text.replace("window.gen_callback && gen_callback(", "").replace(");", "").replace("true", "1"))
            tid = ret.get('data').get('tid')
            if '\\' in tid or '+' in tid or '-' in tid or '/' in tid:
                print('tid异常：',tid)
                time.sleep(random.randint(1,3))
                self.get_tid()
            elif tid is None:
                print('tid为空：',tid)
                time.sleep(random.randint(1,3))
                self.get_tid()
            else:
                print('tid正常：',tid)
                return tid
        else:
            time.sleep(random.randint(1,3))
            self.get_tid()

    # 获取cookie中参数
    def get_sub_subp(self):
        tid = self.get_tid()
        cookie_url = 'https://passport.weibo.com/visitor/visitor?a=incarnate&t={}&w=3&c=100&cb=cross_domain&from=weibo&_rand={}'.format(tid,random.random())
        req = self.session.get(cookie_url, headers=self.headers)
        self.sub = req.cookies.get_dict().get('SUB')
        self.subp = req.cookies.get_dict().get('SUBP')
        
        if self.sub is None or self.subp is None:
            print('sub: {} ------  subp:{}'.format(self.sub, self.subp))
            print('req -------- html')
            print(req.text)
            time.sleep(random.randint(1,10))
            self.get_sub_subp()
        else:
            params = {
                'a': 'crossdomain',
                'cb': 'return_back',
                's': self.sub,
                'sp': self.subp,
                'from': 'weibo',
                '_rand': random.random(),
                'entry': '',
            }

            headers_login = {
                'Host': 'login.sina.com.cn',
                'Referer': 'http://passport.weibo.com/'
            }
            with open('cookies.txt', 'w') as f:
                f.write('SUB='+self.sub+'; SUBP='+self.subp)
            self.headers['cookie'] = 'SUB='+self.sub+'; SUBP='+self.subp
            # 检验cookie
            self.session.get('http://login.sina.com.cn/visitor/visitor', params=params, headers=headers_login)


    # 获取数据
    def get_html(self):
        with open('cookies.txt', 'r') as f:
            f.seek(0,0) # 光标重置
            cookie = f.read()
            if cookie == '':
                self.get_sub_subp()
            else:
                print(cookie)
                self.headers['cookie'] =cookie
        print(self.headers)
        html_url='https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr='
        time.sleep(1)

        res = requests.get(html_url,headers=self.headers)
        soup = BeautifulSoup(res.text, 'html.parser')
        title_list = soup.find_all('td', class_='td-02')
        if title_list == []:
            time.sleep(random(1,10))
            if self.error_count <=0:
                return False
            self.error_count -=1
            self.get_html()
            
        else:
            for i in title_list: 
                try:
                    crawl_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
                    title = i.find('a').text
                    hot = i.find('span').text.split(' ')[-1]
                    yield [crawl_time, title, hot]
                    self.mysql_db.insert(crawl_time, title, hot)
                    
                except AttributeError:
                    pass