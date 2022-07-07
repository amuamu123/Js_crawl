//@Url:https://oces.open.com.cn/login

const {JSDOM} = require('jsdom')
const jsdom = new JSDOM('<!doctype html><html><body></body>/html>')
const { window } = jsdom
global.navigator={ userAgent: 'node.js', };
global.window = window;
global.document = window.document;

JSEncrypt = require("jsencrypt")

function trimStr(str){
    return str.replace(/(^\s*)|(\s*$)/g,"");
}

function skipOperation(){
    //公钥
    var PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDljpjHevP01NkjitdXKZNshuEinEMk7StuDfTx3FQGo0ByNPfJZsnGRDkMptNdezd2PfwyQ1eC80evRKnSA4yclqgbC4Jpb4+gudgUIEazAQ2hGwDedNv0cru1pS/4Q2aaW+bsqzLBuwgf33DTEAhwqCEYhwm+ccnIu9QxbKwaCQIDAQAB';
    //使用公钥加密
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
    var username = '15222222222'
    var password = '123456';
    username = trimStr(username);
    // kWOQAQjuTqOs2L5gdaIb1u88Jka4u0fcuRZogPEU1+GsLwu+wvpQ5szqaV+BXUJqcQe+B2S+7kEKWH36EMR/6LRUJCpZVP9yMRtxZvmjkC7IMEUbuLlh+e6x1bLpnfGmECi3tScfFwOeD7cwmaim9dBcThc/m0gyntV0S6bbmXE=
    var encrypted = encrypt.encrypt(password);
    return encrypt
}



console.log(skipOperation())