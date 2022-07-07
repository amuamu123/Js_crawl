from email import header
import execjs
#@Author: Amu
#@Contact: 1061649523@qq.com
import requests
import json


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
print(res.text)
res = res.json()
dict_data = json.loads(res['data'])
s_url = dict_data['service_url']
timestamp = dict_data['timestamp']
print(s_url)
key = dict_data['key']
print(key)
print(timestamp)
with open('test.js','r',encoding='utf-8') as f:
    ctx = execjs.compile(f.read())
    data = ctx.call('request_post',s_url,key,timestamp)
print(data)
