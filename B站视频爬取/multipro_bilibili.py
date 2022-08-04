import requests
from multiprocessing import Pool
import os
import re
import random
import time

user_agent = [
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1",
    "Mozilla/5.0 (X11; CrOS i686 2268.111.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6",
    "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/19.77.34.5 Safari/537.1",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.9 Safari/536.5",
    "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.36 Safari/536.5",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
    "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1062.0 Safari/536.3",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1062.0 Safari/536.3",
    "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3",
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3",
    "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.0 Safari/536.3",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24",
]

headers={
    'User-Agent':random.choice(user_agent),
    'referer': 'https://www.bilibili.com/'
}

# 获取视频合集信息
def get_index_url(url):
    bvid = re.findall('/video/(.*)\?',url)
    if bvid:
        real_url = 'https://api.bilibili.com/x/player/pagelist?bvid={}&jsonp=jsonp'.format(bvid[0].replace('/',''))
        res_json = requests.get(real_url, headers=headers).json()
        data_list = res_json['data']
        for data in data_list:
            video_tid = data['cid']
            video_title = data['part'].replace(' ','')
            video_time = data['duration']
            yield (video_tid,bvid[0].replace('/',''),video_title)
    else:
        print("[error]: 链接有误，请重新检查")

# 下载视频、音频
def BiliBiliDownload(url, name, session):
    # 每次下载1M的数据
    begin = 0
    end = 1024*512-1
    flag = 0
    D_headers={
        'User-Agent':random.choice(user_agent),
        'referer': 'https://www.bilibili.com/video/BV1sV411s7qy?p=7&spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=c592d47dcee48b43a28c85c2aba22e9c'
    }
    session.options(url=url, headers=D_headers,verify=False)
    while True:
        D_headers.update({'Range': 'bytes='+str(begin) + '-' + str(end)})
        res = session.get(url=url, headers=D_headers, verify=False)
        vedio_end = int(res.headers['Content-Range'].split('/')[-1])
        if res.status_code != 416:
            begin = end + 1
            end = end + 1024*512
            if end >=vedio_end:
                end = vedio_end
                flag = 1
        else:
            D_headers.update({'Range': str(end + 1) + '-' + str(vedio_end)})
            res = session.get(url=url, headers=D_headers, verify=False)
            flag = 1
        with open(name, 'ab') as fp:
            fp.write(res.content)

        if flag==1:
            break

# 获取视频播放源信息并下载
def get_video_url(cid, bvid, dirname, sessionid):
    url = 'https://api.bilibili.com/x/player/playurl'
    params = {
        'cid': cid,
        'bvid': bvid,
        'qn': '0',
        'type': '',
        'otype': 'json',
        'fourk': '1',
        'voice_balance': '1',
        'fnver': '0',
        'fnval': '4048',
        'session': sessionid,
    }
    res_json = requests.get(url, params=params, headers=headers).json()
    VideoURL = res_json['data']['dash']['video'][0]['baseUrl']
    AudioURl = res_json['data']['dash']['audio'][0]['baseUrl']

    # 获取文件夹的名称
    if not os.path.exists('./Bilibili/' + dirname):
        os.makedirs('./Bilibili/' + dirname)
        print('目录文件创建成功!')
    
    # 下载视频和音频
    session=requests.session()
    if not os.path.exists('./Bilibili' + '/' + dirname + '/' + dirname + '_Video_.mp4'):
        print('[Download]: "' + dirname + '"  视频正在下载····')
        BiliBiliDownload(url=VideoURL,
                            name='./Bilibili' + '/' + dirname + '/' + dirname + '_Video_.mp4', session=session)
        print('[Success]: "' + dirname + '"  视频完成下载····')
    else:
        print('[Warning]: "' + dirname + '"  视频已下载')

    if not os.path.exists('./Bilibili' + '/' + dirname + '/' + dirname + '_Audio_.mp3'):
        print('[Download]: "' + dirname + '" 音频正在下载····')
        BiliBiliDownload(url=AudioURl,
                            name='./Bilibili' + '/' + dirname + '/' + dirname + '_Audio_.mp3',
                            session=session)
        print('[Success]: "' + dirname + '"  音频完成下载····')
    else:
        print(dirname + '"  音频已下载')

if __name__=='__main__':
    url = input("请输入完整视频链接：")
    print(time.localtime())
    res = requests.get(url, headers=headers)
    sessionid = re.findall('"session":"(.*?)"', res.text)[0]
    pool=Pool(8)
    for params in get_index_url(url):
        cid,bvid,video_title = params[0], params[1], params[2]
        pool.apply_async(get_video_url,(cid, bvid, video_title, sessionid))
    pool.close()
    pool.join()
    print(time.localtime())