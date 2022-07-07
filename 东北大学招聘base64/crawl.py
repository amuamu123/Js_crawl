# 网站：http://job.neu.edu.cn/campus/index?domain=jobneu&city=&page=3
'''
    反爬技巧：index中通过js调用base函数对编码数据进行解密
    # 知识点1：unzip是一个自定义解压函数，内置pako模块为解压模块
    # 知识点2：通过js Base64编码加密
'''

import requests,re
import execjs
import base64
from bs4 import BeautifulSoup

url = "http://job.neu.edu.cn/campus/index?domain=jobneu&city=&page=3"
res = requests.get(url)
# 匹配js中加载函数（链接末尾）
result = re.search(r'Base64.decode[(]unzip[(]"(.*)"[)].substr[(](.*)[)][)].substr[(](.*)[)][)]',res.text)
with open('base64.min.js','r') as f:
    set_base=execjs.compile(f.read())
    base_res = set_base.call("unzip",result.group(1))
    html = base64.b64decode(base_res[int(result.group(2)):])[int(result.group(3)):].decode("utf-8")

bs = BeautifulSoup(html,"html.parser")
for info_list in bs.find_all('ul',class_='infoList'):
    li = info_list.find_all('li')
    print(li[0].text, li[1].text)
