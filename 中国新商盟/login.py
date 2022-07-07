#@Author: Amu
#@Contact: 1061649523@qq.com
#@Url: https://login.xinshangmeng.com

import requests
from bs4 import BeautifulSoup

url = 'https://login.xinshangmeng.com/login/users/dologin/dfaup?jsonp=jQuery99904144296352435193_1654434771889&protocol=https:&loginIndex=https://www.xinshangmeng.com/xsm2/?Version=2022052100&j_mmrm=15222222222&j_mcmm=e77445d340e81ab6c8c4f3328970a181&j_valcode=6661&_=1654434798773'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36'
}



res = requests.get(url,headers=headers)
print(res.text)
# bs = BeautifulSoup(res.text, 'html.parser')