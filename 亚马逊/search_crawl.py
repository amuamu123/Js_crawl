#@Author: Amu
#@Contact: 1061649523@qq.com

import requests
from bs4 import BeautifulSoup

url = 'https://www.amazon.cn/s?__mk_zh_CN=亚马逊网站&i=aps&k=手机&ref=nb_sb_noss&url=search-alias=aps'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36'
}

res = requests.get(url,headers=headers)
bs = BeautifulSoup(res.text, 'html.parser')
shop_msg_list = bs.find_all('div', class_='a-section a-spacing-base')

for shop_msg in shop_msg_list:
    
