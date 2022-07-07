from Crypto.Cipher import AES
import hashlib
import base64
 
#计算sha
def get_sha256(text):
    return hashlib.sha256(text.encode('utf-8'))
 
def aes256_cbc_encrypt(text, key, iv):
    ##CBC补齐16倍数，NoPadding方式
    padding = lambda s: s + (16 - len(s) % 16) * '\0'
    text    = padding(text)
 
    #key和iv都要是bytes类型数据
    cryptos  = AES.new(key, AES.MODE_CBC, iv)
    #加密接口参数是bytes类型的数据
    enc_text = cryptos.encrypt(text.encode('utf8'))
 
    print(base64.b64encode(enc_text).decode('utf8'))
 
    #enc_text是bytes类型的数据，可根据实际需要base64等操作
    return enc_text
 
def aes256_cbc_decrypt(text, key, iv):
    #参数都是bytes类型的数据
    cryptos  = AES.new(key, AES.MODE_CBC, iv)
    #text如果不是bytes，需要转换
    dec_text = cryptos.decrypt(text)
 
    #dec_text是bytes类型的数据，可根据实际需要base64等操作，这里是转str
    return dec_text.decode('utf8')
 
#使用sha256的值，作为AES256 CBC加密的key，补位按全0
if __name__ == '__main__':
 
    key = get_sha256("202103181810").digest()
    iv  = "0000000000000000".encode('utf8')
 
    #sha256结果是hash值，通过hexdigest()或digest()转为需要的
    print(get_sha256("202103181810").hexdigest())
 
    enc_text = aes256_cbc_encrypt("i'am plaintext!!!", key, iv)
 
    #print(aes256_cbc_decrypt(enc_text, key, iv))
    bese64_str = base64.b64encode(enc_text).decode('utf8')
    print("self base64(" + bese64_str + "):\n" + aes256_cbc_decrypt(enc_text, key, iv))
 
    bese64_str = "GKq7t49GcNvnru1D+o++O6M6EF9Ti0dxCWLwKSPoVr4="
    print("use  base64(" + bese64_str + "):\n" + aes256_cbc_decrypt(base64.decodebytes(bese64_str.encode('utf8')), key, iv))