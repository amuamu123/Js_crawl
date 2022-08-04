var CryptoJS = require('crypto-js');
_0xf727df = {
    'Ulsft': function(_0xfb3bcd, _0x39c7cb) {
        return _0xfb3bcd < _0x39c7cb;
    },
    'PznXJ': function(_0x1b4399, _0x59e982) {
        return _0x1b4399 + _0x59e982;
    },
    'AOoFO':  function(_0x14f0de, _0x3a3973) {
        return _0x14f0de + _0x3a3973;
    },

}

function hash(type, value){
    if(type == 'md5'){
        return CryptoJS.MD5(value).toString();
    }
    if(type == 'sha1'){
        return CryptoJS.SHA1(value).toString();
    }
    if(type == 'sha256'){
        return CryptoJS.SHA256(value).toString();
    }
}

function cookie(params){
    var _0x359638 = new Date();
    function _0x3873d7(_0x3862a7, _0x421119) {
        var _0x79310c = params['chars']['length'];
        for (var _0x10c71a = 0x0; _0x10c71a < _0x79310c; _0x10c71a++) {
            for (var _0xd4a63 = 0x0; _0xf727df['Ulsft'](_0xd4a63, _0x79310c); _0xd4a63++) {
                var _0xfc77bc = _0xf727df['PznXJ'](_0xf727df['AOoFO'](_0x421119[0x0], params['chars']['substr'](_0x10c71a, 0x1)), params['chars']['substr'](_0xd4a63, 0x1)) + _0x421119[0x1];
                
                if (hash(params['ha'], _0xfc77bc) == _0x3862a7) {
                    return [_0xfc77bc, new Date() - _0x359638];
                }
            }
        }
    };
    var _0x259345 = _0x3873d7(params['ct'], params['bts']);
    return {'__jsl_clearance_s' :_0x259345[0]};
}

// params = {
//     "bts": ["1659580607.701|0|yM4", "8MrXyFurDG0oky1ZKMWqD0%3D"],
//     "chars": "nxWkXvDyIPKSLJUlKCVglM",
//     "ct": "a54e8b510ecb389d1054b0cdcc8d5c57",
//     "ha": "md5",
//     "tn": "__jsl_clearance_s",
//     "vt": "3600",
//     "wt": "1500"
// }

// console.log(cookie(params))