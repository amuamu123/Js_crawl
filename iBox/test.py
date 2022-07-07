import execjs
#@Author: Amu
#@Contact: 1061649523@qq.com
import requests
import json
import binascii


url = 'https://web-001.cloud.servicewechat.com/wxa-qbase/jsoperatewxdata'
data ={
    "appid": "wxe77e91c2fdb64e85",
    "data": {
        "qbase_api_name": "tcbapi_get_service_info",
        "qbase_req": "{\"client_random\":\"0.6814672240045321_1656062582752\",\"system\":\"\"}",
        "qbase_options": {
            "identityless": True,
            "resourceAppid": "wxe77e91c2fdb64e85",
            "resourceEnv": "ibox-3gldlr1u1a8322d4",
            "config": {
                "database": {
                    "realtime": {
                        "maxReconnect": 5,
                        "reconnectInterval": 5000,
                        "totalConnectionTimeout": None
                    }
                }
            },
            "appid": "wxe77e91c2fdb64e85",
            "env": "ibox-3gldlr1u1a8322d4"
        },
        "qbase_meta": {
            "session_id": "1656062582757",
            "sdk_version": "wx-web-sdk/WEBDOMAIN_1.0.0 (1655460325000)",
            "filter_user_info": False
        },
        "cli_req_id": "1656062583681_0.22223032407693055"
    }
}
headers = {
    'Connection': 'keep-alive',
    'Host': 'web-001.cloud.servicewechat.com',
    'Origin': 'https://www.ibox.art',
    'Content-Type': 'application/json',
    'Referer': 'https://www.ibox.art/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36'
}

res = requests.post(url,headers=headers,data=json.dumps(data))
res = res.json()
dict_data = json.loads(res['data'])

s_url = dict_data['service_url']
timestamp = dict_data['timestamp']
key = dict_data['key']

print(s_url)
print(key)
print(timestamp)

with open('test.js','r',encoding='utf-8') as f:
    ctx = execjs.compile(f.read())
    data = ctx.call('crawl_data',key)

list1 = []
for i in data:
    if data[i]<16:
        list1.append('0'+hex(data[i])[2:])
    else:
        list1.append(hex(data[i])[2:])

con = ''.join(list1)
data = binascii.a2b_hex(con.encode())
headers2 = {
    'Connection': 'keep-alive',
    'Content-Length': str(len(data)),
    'Content-Type': 'application/octet-stream',
    'Host': 'web-001.cloud.servicewechat.com',
    'Origin': 'https://www.ibox.art',
    'Referer': 'https://www.ibox.art/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
    'X-WX-COMPRESSION': 'snappy',
    'X-WX-ENCRYPTION-TIMESTAMP': str(timestamp),
    'X-WX-ENCRYPTION-VERSION': '2',
    'X-WX-LIB-BUILD-TS': '1655460325335',
    'X-WX-REQUEST-CONTENT-ENCODING': 'JSON',
    'X-WX-RESPONSE-CONTENT-ACCEPT-ENCODING': 'PB, JSON',
    'X-WX-USER-TIMEOUT': '30000',
}

res = requests.post(s_url,headers=headers2,data=data)
# print(res.status_code)
res_data = binascii.b2a_hex(res.text.encode())
print(res_data)
