import requests
import re
import random
from Crypto.Cipher import AES
import binascii

headers_gra = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
}

# 获取请求参数
def get_params():
    url = 'https://www.vultop.com/course/103/task/4695/activity_show?blank=1'
    headers = {
        'Cookie': 'online-uuid=AD7D6CD1-7BD0-F9BE-1C08-63BDF7F785A4; PHPSESSID=etu69r6ol8flqf8n8tustqda3t; REMEMBERME=Qml6XFVzZXJcQ3VycmVudFVzZXI6ZFhObGNsODFjWHAyYVRaNWJYbEFaV1IxYzI5b2J5NXVaWFE9OjE2ODY4MTgwODU6Mzg0ZDg4MDk1ODQxNTU3ZGVkN2FiYzM3ZDQ3YzMwZTM2Zjc4ZDI1YjBlMGE0N2VjN2VmZmFjYWUwZjYxZGE1ZA%3D%3D',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
    }
    res = requests.get(url,headers=headers)
    # print(res.text)
    resNo = re.findall('data-file-global-id="(.*)"',res.text)[0]
    token = re.findall('data-token="(.*)"',res.text)[0]
    return resNo,token

# 获取播放源参数
def play():
    url = 'https://play.qiqiuyun.net/sdk_api/play'
    resNo,token = get_params()
    params = {
        'resNo': resNo,
        'token': token,
        'lang': 'zh-CN',
        'ssl': '1',
        'sdkType': 'js',
        'callback': 'jsonp_' + ''.join([str(random.randint(0,9)) for i in range(10)])# 随机生成数拼接
    }
    res = requests.get(url, params=params)
    play_url = re.findall('"playlist":"(.*?)"',res.text)[0]
    return play_url

# 获取播放源列表
def hls_play():
    url = play()
    res = requests.get(url)
    print(res.text)
    # 获取清晰度选项
    definition = re.findall('NAME=(.*)', res.text)
    # 获取清晰度链接
    hls_urls = re.findall('https:.*', res.text)
    return definition,hls_urls

def choice_play():
    definition,hls_urls = hls_play()
    for i in range(len(definition)):
        print('{}: {}'.format(i, definition[i]))
    choice = int(input("\n请选择清晰度："))
    choice_url = hls_urls[choice]

    res =  requests.get(choice_url)

    with open('1.m3u8', 'wb') as f:
        f.write(res.content)
    key_IVs = re.findall('#EXT-X-KEY:METHOD=AES-128,URI="(https://.*)",IV=(.*)',res.text)
    vedio_urls = re.findall('#EXTINF:.*,\n(https://.*)',res.text)

    with open('vedio.ts', 'wb') as f:
        key = requests.get(key_IVs[0][0], headers=headers_gra).text
        print(key)
        key = vesion3(key)
        for key_IV, vedio_url in zip(key_IVs, vedio_urls):
            IV = key_IV[1]
            print(key,IV)
            res = requests.get(vedio_url, headers=headers_gra).content
            while len(res)%16 !=0:
                res += b"0"
            sprytor = AES.new(key.encode(), AES.MODE_CBC, IV=binascii.a2b_hex(IV[2:]))
            f.write(sprytor.decrypt(res))
            print("正在写入中...")

# 版本3解密
def vesion3(key):
    e = [ord(i) for i in key]
    t = e
    r = t[0]
    i = chr(r)
    #进制转换
    convertString = "0123456789abcdefghijklmnopqrstuvwxyz"
    a = convertString.index(i)%2
    n = t[a]
    s = chr(n) # a
    o = t[a+1]
    l = chr(o) # 6
    u = (convertString.index(s)*36*1 + convertString.index(l))%3
    if u==2:
        d = t[5]
        c = t[6]
        h = t[9]
        f = t[10]
        g = t[13]
        p = t[14]
        v = t[17]
        m = t[18]
        y = d - 97 + 26 * (int(chr(c)) + 1) - 97
        b = h - 97 + 26 * (int(chr(f)) + 1) - 97
        T = g - 97 + 26 * (int(chr(p)) + 1) - 97
        E = v - 97 + 26 * (int(chr(m)) + 2) - 97
        t =[t[0], t[1], t[2], t[3], t[4], y, t[7], t[8], b, t[11], t[12], T, t[15], t[16], E, t[19]]
    elif u==1:
        S = "0-1-2-8-9-10-11-12-18-17-16-15-14-4-5-6".split('-')
        t = [t[int(i)] for i in S]
    else:
        if u!=0:
            return None
        else:
            S =  "0-1-2-3-4-15-16-17-18-10-11-12-13-6-7-8".split('-')
            t = [t[int(i)] for i in S]

    return ''.join([chr(int(i)) for i in t])

if __name__ == '__main__':
    choice_play()
    