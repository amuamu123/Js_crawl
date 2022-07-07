/* 
    加密参数D.AES_CBC.encrypt(N, x, void 0, x);
    其中 N = R.compress(b)
             b = 一个新的Uint8Array
             compress为替换方法
    x = key解析为16位数组
*/
const https = require('https');
const fs = require('fs');

function transid(){
    const t = []
              , e = "0123456789abcdef";
            for (let n = 0; n < 36; n++)
                t[n] = e.substr(Math.floor(16 * Math.random()), 1);
            return t[14] = "4",
            t[19] = e.substr(3 & t[19] | 8, 1),
            t[8] = t[13] = t[18] = t[23] = "",
            t.join("")
}

ibtransid = transid()

console.log(ibtransid)
var g_call_id = Math.random() + "_" + Date.now()
console.log(g_call_id)
var O = [
    {
        "key": "x-wx-exclude-credentials",
        "value": "unionid, cloudbase-access-token, openid"
    },
    {
        "key": "x-wx-region",
        "value": "ap-beijing"
    },
    {
        "key": "x-wx-gateway-id",
        "value": "gw-1-1g2n1gd143d56b56"
    },
    {
        "key": "host",
        "value": "api-h5-tgw.ibox.art"
    },
    {
        "key": "accept-language",
        "value": "zh-CN"
    },
    {
        "key": "ib-device-id",
        "value": "390b607c63a641438e3bc0a288b3a5a6"
    },
    {
        "key": "ib-trans-id",
        "value": ibtransid
        //"de5a8496aa774bd98b64851d9e4e23b9"
    },
    {
        "key": "ib-platform-type",
        "value": "web"
    },
    {
        "key": "content-type",
        "value": "application/json"
    },
    {
        "key": "user-agent",
        "value": ""
    },
    {
        "key": "x-wx-env",
        "value": "ibox-3gldlr1u1a8322d4"
    },
    {
        "key": "x-wx-call-id",
        "value": g_call_id //"0.8318901041569333_1656063427711"
    },
    {
        "key": "x-wx-resource-appid",
        "value": "wxe77e91c2fdb64e85"
    },
    {
        "key": "x-wx-container-path",
        "value": "/nft-mall-web/v1.2/nft/product/getResellList?type=0&origin=0&sort=0&page=1&pageSize=50"
    }
]

v = "undefined"


function stringToArrayBuffer(e) {
    return m(e).buffer
}
function m(e) {
    for (var t = [], r = 0; r < e.length; r++) {
        var n = e.charCodeAt(r);
        n < 128 ? t.push(n) : n < 2048 ? t.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (r++,
        n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(r)),
        t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
    }
    return new Uint8Array(t)
}
b = new Uint8Array(stringToArrayBuffer(JSON.stringify({
    method: "GET",
    header: O,
    body: v,
    call_id: g_call_id
})))
console.log('bbbbbb')
console.log(stringToArrayBuffer(JSON.stringify({
    method: "GET",
    header: O,
    body: v,
    call_id: g_call_id
})))
console.log(b)


function o_test() {
    return "object" == typeof t && "object" == typeof t.versions && void 0 !== t.versions.node
}
function a_test(e) {
    return e instanceof Uint8Array && (!o_test() || !r.isBuffer(e))
}
function s_test(e) {
    return e instanceof ArrayBuffer
}

function isBuffer(e) {
    return !(null == e || !e._isBuffer)
}

function u_test(e) {
    return !!o_test() && isBuffer(e)
}
// function e(e) {
//     var r = t[s][1][e];
//     return o(r || e)
// }
// var f = e("./snappy_decompressor").SnappyDecompressor
// , c = e("./snappy_compressor").SnappyCompressor
// , l = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";

// 真正的代码
function n(e, t) {
    return 506832829 * e >>> t
}
function i(e, t) {
    return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24)
}
function o(e, t, r) {
    return e[t] === e[r] && e[t + 1] === e[r + 1] && e[t + 2] === e[r + 2] && e[t + 3] === e[r + 3]
}
function a(e, t, r, n, i) {
    return r <= 60 ? (n[i] = r - 1 << 2,
    i += 1) : r < 256 ? (n[i] = 240,
    n[i + 1] = r - 1,
    i += 2) : (n[i] = 244,
    n[i + 1] = r - 1 & 255,
    n[i + 2] = r - 1 >>> 8,
    i += 3),
    function(e, t, r, n, i) {
        var o;
        for (o = 0; o < i; o++)
            r[n + o] = e[t + o]
    }(e, t, n, i, r),
    i + r
}
function s(e, t, r, n) {
    return n < 12 && r < 2048 ? (e[t] = 1 + (n - 4 << 2) + (r >>> 8 << 5),
    e[t + 1] = 255 & r,
    t + 2) : (e[t] = 2 + (n - 1 << 2),
    e[t + 1] = 255 & r,
    e[t + 2] = r >>> 8,
    t + 3)
}
function u(e, t, r, n) {
    for (; n >= 68; )
        t = s(e, t, r, 64),
        n -= 64;
    return n > 64 && (t = s(e, t, r, 60),
    n -= 60),
    s(e, t, r, n)
}

function f(e, t, r, s, f) {
    for (var c = 1; 1 << c <= r && c <= l; )
        c += 1;
    var h = 32 - (c -= 1);
    void 0 === d[c] && (d[c] = new Uint16Array(1 << c));
    var _, p = d[c];
    for (_ = 0; _ < p.length; _++)
        p[_] = 0;
    var E, g, y, m, v, S, A, T, C, w, b = t + r, O = t, I = t, R = !0;
    if (r >= 15)
        for (E = b - 15,
        y = n(i(e, t += 1), h); R; ) {
            S = 32,
            m = t;
            do {
                if (g = y,
                A = S >>> 5,
                S += 1,
                m = (t = m) + A,
                t > E) {
                    R = !1;
                    break
                }
                y = n(i(e, m), h),
                v = O + p[g],
                p[g] = t - O
            } while (!o(e, t, v));
            if (!R)
                break;
            f = a(e, I, t - I, s, f);
            do {
                for (T = t,
                C = 4; t + C < b && e[t + C] === e[v + C]; )
                    C += 1;
                if (t += C,
                f = u(s, f, T - v, C),
                I = t,
                t >= E) {
                    R = !1;
                    break
                }
                p[n(i(e, t - 1), h)] = t - 1 - O,
                v = O + p[w = n(i(e, t), h)],
                p[w] = t - O
            } while (o(e, t, v));
            if (!R)
                break;
            y = n(i(e, t += 1), h)
        }
    return I < b && (f = a(e, I, b - I, s, f)),
    f
}

function c(e) {
    this.array = e
}
var l = 14, d = new Array(l + 1);

c.prototype.maxCompressedLength = function() {
    var e = this.array.length;
    return 32 + e + Math.floor(e / 6)
}

c.prototype.compressToBuffer = function(e) {
    var t, r = this.array, n = r.length, i = 0, o = 0;
    for (o = function(e, t, r) {
        do {
            t[r] = 127 & e,
            (e >>>= 7) > 0 && (t[r] += 128),
            r += 1
        } while (e > 0);
        return r
    }(n, e, o); i < n; )
        
        o = f(r, i, t = Math.min(n - i, 65536), e, o),
        i += t;
    return o
}



function n(e, t) {
    return 506832829 * e >>> t
}
function i(e, t) {
    return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24)
}

function compress(e) {
    if (!a_test(e) && !s_test(e) && !u_test(e))
        throw new TypeError(l);
    var t = !1
      , n = !1;
      a_test(e) ? t = !0 : s_test(e) && (n = !0,
    e = new Uint8Array(e));
    var i, o, f, d = new c(e), h = d.maxCompressedLength();
    return t ? (i = new Uint8Array(h),
    f = d.compressToBuffer(i)) : n ? (i = new ArrayBuffer(h),
    o = new Uint8Array(i),
    f = d.compressToBuffer(o)
    ) : (i = c(h),
    f = compressToBuffer(d,i)),
    i.slice(0, f)

}
N = compress(b);
console.log("NNNNNNNN")
console.log(N)
// KEY的解析方法
var y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function base64ToArrayBuffer(e) {
    for (var t = function(e) {
        var t = String(e).replace(/=+$/, "")
          , r = "";
        if (t.length % 4 == 1)
            throw new Error('"atob" failed');
        for (var n = 0, i = void 0, o = void 0, a = 0; o = t.charAt(a++); ~o && (i = n % 4 ? 64 * i + o : o,
        n++ % 4) ? r += String.fromCharCode(255 & i >> (-2 * n & 6)) : 0)
            o = y.indexOf(o);
        return r
    }(e), r = t.length, n = new Uint8Array(r), i = 0; i < r; i++)
        n[i] = t.charCodeAt(i);
        console.log(t)
    // return n.buffer
    return  new Buffer.from(n.buffer)
}
// console.log(base64ToArrayBuffer('jNN7wCko7pYnmobZU/6ITg=='))
// key = 'jNN7wCko7pYnmobZU/6ITg=='
// x = new Uint8Array(base64ToArrayBuffer(key))


// 加密算法

function _(e) {
    return e instanceof Uint8Array
};

function E(e, t, r) {
    var n = t ? t.byteLength : r || 65536;
    if (4095 & n || n <= 0)
        throw new Error("heap size must be a positive integer and a multiple of 4096");
    return t = t || new e(new ArrayBuffer(n))
};


function g(e, t, r, n, i) {
    var o = e.length - t
      , a = o < i ? o : i;
    return e.set(r.subarray(n, n + a), t),
    a
};

S = (()=>{
    var e, t, r = !1;
    function n(r, n) {
        var i = e[(t[r] + t[n]) % 255];
        return 0 !== r && 0 !== n || (i = 0),
        i
    }
    var i, o, a, s;
    function u() {
        function u(r) {
            var n, i, o;
            for (i = o = function(r) {
                var n = e[255 - t[r]];
                return 0 === r && (n = 0),
                n
            }(r),
            n = 0; n < 4; n++)
                o ^= i = 255 & (i << 1 | i >>> 7);
            return o ^= 99
        }
        r || function() {
            e = [],
            t = [];
            var n, i, o = 1;
            for (n = 0; n < 255; n++)
                e[n] = o,
                i = 128 & o,
                o <<= 1,
                o &= 255,
                128 === i && (o ^= 27),
                o ^= e[n],
                t[e[n]] = n;
            e[255] = e[0],
            t[0] = 0,
            r = !0
        }(),
        i = [],
        o = [],
        a = [[], [], [], []],
        s = [[], [], [], []];
        for (var f = 0; f < 256; f++) {
            var c = u(f);
            i[f] = c,
            o[c] = f,
            a[0][f] = n(2, c) << 24 | c << 16 | c << 8 | n(3, c),
            s[0][c] = n(14, f) << 24 | n(9, f) << 16 | n(13, f) << 8 | n(11, f);
            for (var l = 1; l < 4; l++)
                a[l][f] = a[l - 1][f] >>> 8 | a[l - 1][f] << 24,
                s[l][c] = s[l - 1][c] >>> 8 | s[l - 1][c] << 24
        }
    }
    var f = function(e, t) {
        u();
        var r = new Uint32Array(t);
        r.set(i, 512),
        r.set(o, 768);
        for (var n = 0; n < 4; n++)
            r.set(a[n], 4096 + 1024 * n >> 2),
            r.set(s[n], 8192 + 1024 * n >> 2);
        var f = function(e, t, r) {
            "use asm";
            var n = 0
              , i = 0
              , o = 0
              , a = 0
              , s = 0
              , u = 0
              , f = 0
              , c = 0
              , l = 0
              , d = 0
              , h = 0
              , _ = 0
              , p = 0
              , E = 0
              , g = 0
              , y = 0
              , m = 0
              , v = 0
              , S = 0
              , A = 0
              , T = 0;
            var C = new e.Uint32Array(r)
              , w = new e.Uint8Array(r);
            function b(e, t, r, s, u, f, c, l) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                s = s | 0;
                u = u | 0;
                f = f | 0;
                c = c | 0;
                l = l | 0;
                var d = 0
                  , h = 0
                  , _ = 0
                  , p = 0
                  , E = 0
                  , g = 0
                  , y = 0
                  , m = 0;
                d = r | 0x400,
                h = r | 0x800,
                _ = r | 0xc00;
                u = u ^ C[(e | 0) >> 2],
                f = f ^ C[(e | 4) >> 2],
                c = c ^ C[(e | 8) >> 2],
                l = l ^ C[(e | 12) >> 2];
                for (m = 16; (m | 0) <= s << 4; m = m + 16 | 0) {
                    p = C[(r | u >> 22 & 1020) >> 2] ^ C[(d | f >> 14 & 1020) >> 2] ^ C[(h | c >> 6 & 1020) >> 2] ^ C[(_ | l << 2 & 1020) >> 2] ^ C[(e | m | 0) >> 2],
                    E = C[(r | f >> 22 & 1020) >> 2] ^ C[(d | c >> 14 & 1020) >> 2] ^ C[(h | l >> 6 & 1020) >> 2] ^ C[(_ | u << 2 & 1020) >> 2] ^ C[(e | m | 4) >> 2],
                    g = C[(r | c >> 22 & 1020) >> 2] ^ C[(d | l >> 14 & 1020) >> 2] ^ C[(h | u >> 6 & 1020) >> 2] ^ C[(_ | f << 2 & 1020) >> 2] ^ C[(e | m | 8) >> 2],
                    y = C[(r | l >> 22 & 1020) >> 2] ^ C[(d | u >> 14 & 1020) >> 2] ^ C[(h | f >> 6 & 1020) >> 2] ^ C[(_ | c << 2 & 1020) >> 2] ^ C[(e | m | 12) >> 2];
                    u = p,
                    f = E,
                    c = g,
                    l = y
                }
                n = C[(t | u >> 22 & 1020) >> 2] << 24 ^ C[(t | f >> 14 & 1020) >> 2] << 16 ^ C[(t | c >> 6 & 1020) >> 2] << 8 ^ C[(t | l << 2 & 1020) >> 2] ^ C[(e | m | 0) >> 2],
                i = C[(t | f >> 22 & 1020) >> 2] << 24 ^ C[(t | c >> 14 & 1020) >> 2] << 16 ^ C[(t | l >> 6 & 1020) >> 2] << 8 ^ C[(t | u << 2 & 1020) >> 2] ^ C[(e | m | 4) >> 2],
                o = C[(t | c >> 22 & 1020) >> 2] << 24 ^ C[(t | l >> 14 & 1020) >> 2] << 16 ^ C[(t | u >> 6 & 1020) >> 2] << 8 ^ C[(t | f << 2 & 1020) >> 2] ^ C[(e | m | 8) >> 2],
                a = C[(t | l >> 22 & 1020) >> 2] << 24 ^ C[(t | u >> 14 & 1020) >> 2] << 16 ^ C[(t | f >> 6 & 1020) >> 2] << 8 ^ C[(t | c << 2 & 1020) >> 2] ^ C[(e | m | 12) >> 2]
            }
            function O(e, t, r, n) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                n = n | 0;
                b(0x0000, 0x0800, 0x1000, T, e, t, r, n)
            }
            function I(e, t, r, n) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                n = n | 0;
                var o = 0;
                b(0x0400, 0x0c00, 0x2000, T, e, n, r, t);
                o = i,
                i = a,
                a = o
            }
            function R(e, t, r, l) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                l = l | 0;
                b(0x0000, 0x0800, 0x1000, T, s ^ e, u ^ t, f ^ r, c ^ l);
                s = n,
                u = i,
                f = o,
                c = a
            }
            function N(e, t, r, l) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                l = l | 0;
                var d = 0;
                b(0x0400, 0x0c00, 0x2000, T, e, l, r, t);
                d = i,
                i = a,
                a = d;
                n = n ^ s,
                i = i ^ u,
                o = o ^ f,
                a = a ^ c;
                s = e,
                u = t,
                f = r,
                c = l
            }
            function D(e, t, r, l) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                l = l | 0;
                b(0x0000, 0x0800, 0x1000, T, s, u, f, c);
                s = n = n ^ e,
                u = i = i ^ t,
                f = o = o ^ r,
                c = a = a ^ l
            }
            function x(e, t, r, l) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                l = l | 0;
                b(0x0000, 0x0800, 0x1000, T, s, u, f, c);
                n = n ^ e,
                i = i ^ t,
                o = o ^ r,
                a = a ^ l;
                s = e,
                u = t,
                f = r,
                c = l
            }
            function L(e, t, r, l) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                l = l | 0;
                b(0x0000, 0x0800, 0x1000, T, s, u, f, c);
                s = n,
                u = i,
                f = o,
                c = a;
                n = n ^ e,
                i = i ^ t,
                o = o ^ r,
                a = a ^ l
            }
            function M(e, t, r, s) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                s = s | 0;
                b(0x0000, 0x0800, 0x1000, T, l, d, h, _);
                _ = ~y & _ | y & _ + 1;
                h = ~g & h | g & h + ((_ | 0) == 0);
                d = ~E & d | E & d + ((h | 0) == 0);
                l = ~p & l | p & l + ((d | 0) == 0);
                n = n ^ e;
                i = i ^ t;
                o = o ^ r;
                a = a ^ s
            }
            function P(e, t, r, n) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                n = n | 0;
                var i = 0
                  , o = 0
                  , a = 0
                  , l = 0
                  , d = 0
                  , h = 0
                  , _ = 0
                  , p = 0
                  , E = 0
                  , g = 0;
                e = e ^ s,
                t = t ^ u,
                r = r ^ f,
                n = n ^ c;
                i = m | 0,
                o = v | 0,
                a = S | 0,
                l = A | 0;
                for (; (E | 0) < 128; E = E + 1 | 0) {
                    if (i >>> 31) {
                        d = d ^ e,
                        h = h ^ t,
                        _ = _ ^ r,
                        p = p ^ n
                    }
                    i = i << 1 | o >>> 31,
                    o = o << 1 | a >>> 31,
                    a = a << 1 | l >>> 31,
                    l = l << 1;
                    g = n & 1;
                    n = n >>> 1 | r << 31,
                    r = r >>> 1 | t << 31,
                    t = t >>> 1 | e << 31,
                    e = e >>> 1;
                    if (g)
                        e = e ^ 0xe1000000
                }
                s = d,
                u = h,
                f = _,
                c = p
            }
            function U(e) {
                e = e | 0;
                T = e
            }
            function B(e, t, r, s) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                s = s | 0;
                n = e,
                i = t,
                o = r,
                a = s
            }
            function k(e, t, r, n) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                n = n | 0;
                s = e,
                u = t,
                f = r,
                c = n
            }
            function G(e, t, r, n) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                n = n | 0;
                l = e,
                d = t,
                h = r,
                _ = n
            }
            function q(e, t, r, n) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                n = n | 0;
                p = e,
                E = t,
                g = r,
                y = n
            }
            function F(e, t, r, n) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                n = n | 0;
                _ = ~y & _ | y & n,
                h = ~g & h | g & r,
                d = ~E & d | E & t,
                l = ~p & l | p & e
            }
            function W(e) {
                e = e | 0;
                if (e & 15)
                    return -1;
                w[e | 0] = n >>> 24,
                w[e | 1] = n >>> 16 & 255,
                w[e | 2] = n >>> 8 & 255,
                w[e | 3] = n & 255,
                w[e | 4] = i >>> 24,
                w[e | 5] = i >>> 16 & 255,
                w[e | 6] = i >>> 8 & 255,
                w[e | 7] = i & 255,
                w[e | 8] = o >>> 24,
                w[e | 9] = o >>> 16 & 255,
                w[e | 10] = o >>> 8 & 255,
                w[e | 11] = o & 255,
                w[e | 12] = a >>> 24,
                w[e | 13] = a >>> 16 & 255,
                w[e | 14] = a >>> 8 & 255,
                w[e | 15] = a & 255;
                return 16
            }
            function j(e) {
                e = e | 0;
                if (e & 15)
                    return -1;
                w[e | 0] = s >>> 24,
                w[e | 1] = s >>> 16 & 255,
                w[e | 2] = s >>> 8 & 255,
                w[e | 3] = s & 255,
                w[e | 4] = u >>> 24,
                w[e | 5] = u >>> 16 & 255,
                w[e | 6] = u >>> 8 & 255,
                w[e | 7] = u & 255,
                w[e | 8] = f >>> 24,
                w[e | 9] = f >>> 16 & 255,
                w[e | 10] = f >>> 8 & 255,
                w[e | 11] = f & 255,
                w[e | 12] = c >>> 24,
                w[e | 13] = c >>> 16 & 255,
                w[e | 14] = c >>> 8 & 255,
                w[e | 15] = c & 255;
                return 16
            }
            function K() {
                O(0, 0, 0, 0);
                m = n,
                v = i,
                S = o,
                A = a
            }
            function H(e, t, r) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                var s = 0;
                if (t & 15)
                    return -1;
                while ((r | 0) >= 16) {
                    V[e & 7](w[t | 0] << 24 | w[t | 1] << 16 | w[t | 2] << 8 | w[t | 3], w[t | 4] << 24 | w[t | 5] << 16 | w[t | 6] << 8 | w[t | 7], w[t | 8] << 24 | w[t | 9] << 16 | w[t | 10] << 8 | w[t | 11], w[t | 12] << 24 | w[t | 13] << 16 | w[t | 14] << 8 | w[t | 15]);
                    w[t | 0] = n >>> 24,
                    w[t | 1] = n >>> 16 & 255,
                    w[t | 2] = n >>> 8 & 255,
                    w[t | 3] = n & 255,
                    w[t | 4] = i >>> 24,
                    w[t | 5] = i >>> 16 & 255,
                    w[t | 6] = i >>> 8 & 255,
                    w[t | 7] = i & 255,
                    w[t | 8] = o >>> 24,
                    w[t | 9] = o >>> 16 & 255,
                    w[t | 10] = o >>> 8 & 255,
                    w[t | 11] = o & 255,
                    w[t | 12] = a >>> 24,
                    w[t | 13] = a >>> 16 & 255,
                    w[t | 14] = a >>> 8 & 255,
                    w[t | 15] = a & 255;
                    s = s + 16 | 0,
                    t = t + 16 | 0,
                    r = r - 16 | 0
                }
                return s | 0
            }
            function Y(e, t, r) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                var n = 0;
                if (t & 15)
                    return -1;
                while ((r | 0) >= 16) {
                    J[e & 1](w[t | 0] << 24 | w[t | 1] << 16 | w[t | 2] << 8 | w[t | 3], w[t | 4] << 24 | w[t | 5] << 16 | w[t | 6] << 8 | w[t | 7], w[t | 8] << 24 | w[t | 9] << 16 | w[t | 10] << 8 | w[t | 11], w[t | 12] << 24 | w[t | 13] << 16 | w[t | 14] << 8 | w[t | 15]);
                    n = n + 16 | 0,
                    t = t + 16 | 0,
                    r = r - 16 | 0
                }
                return n | 0
            }
            var V = [O, I, R, N, D, x, L, M];
            var J = [R, P];
            return {
                set_rounds: U,
                set_state: B,
                set_iv: k,
                set_nonce: G,
                set_mask: q,
                set_counter: F,
                get_state: W,
                get_iv: j,
                gcm_init: K,
                cipher: H,
                mac: Y
            }
        }({
            Uint8Array: Uint8Array,
            Uint32Array: Uint32Array
        }, e, t);
        return f.set_key = function(e, t, n, o, a, u, c, l, d) {
            var h = r.subarray(0, 60)
              , _ = r.subarray(256, 316);
            h.set([t, n, o, a, u, c, l, d]);
            for (var p = e, E = 1; p < 4 * e + 28; p++) {
                var g = h[p - 1];
                (p % e == 0 || 8 === e && p % e == 4) && (g = i[g >>> 24] << 24 ^ i[g >>> 16 & 255] << 16 ^ i[g >>> 8 & 255] << 8 ^ i[255 & g]),
                p % e == 0 && (g = g << 8 ^ g >>> 24 ^ E << 24,
                E = E << 1 ^ (128 & E ? 27 : 0)),
                h[p] = h[p - e] ^ g
            }
            for (var y = 0; y < p; y += 4)
                for (var m = 0; m < 4; m++)
                    g = h[p - (4 + y) + (4 - m) % 4],
                    _[y + m] = y < 4 || y >= p - 4 ? g : s[0][i[g >>> 24]] ^ s[1][i[g >>> 16 & 255]] ^ s[2][i[g >>> 8 & 255]] ^ s[3][i[255 & g]];
            f.set_rounds(e + 5)
        }
        ,
        f
    };
    return f.ENC = {
        ECB: 0,
        CBC: 2,
        CFB: 4,
        OFB: 6,
        CTR: 7
    },
    f.DEC = {
        ECB: 1,
        CBC: 3,
        CFB: 5,
        OFB: 6,
        CTR: 7
    },
    f.MAC = {
        CBC: 0,
        GCM: 1
    },
    f.HEAP_DATA = 16384,
    f
}
)()
  , A = new Uint8Array(1048576)
  , T = (()=>S(null, A.buffer))();

class C {
    constructor(e, t, r, n, i) {
        this.nonce = null,
        this.counter = 0,
        this.counterSize = 0,
        this.heap = E(Uint8Array, n).subarray(S.HEAP_DATA),
        this.asm = i || S(null, this.heap.buffer),
        this.mode = null,
        this.key = null,
        this.AES_reset(e, t, r)
    }
    AES_set_key(e) {
        if (void 0 !== e) {
            if (!_(e))
                throw new TypeError("unexpected key type");
            var t = e.length;
            if (16 !== t && 24 !== t && 32 !== t)
                throw new m("illegal key size");
            var r = new DataView(e.buffer,e.byteOffset,e.byteLength);
            this.asm.set_key(t >> 2, r.getUint32(0), r.getUint32(4), r.getUint32(8), r.getUint32(12), t > 16 ? r.getUint32(16) : 0, t > 16 ? r.getUint32(20) : 0, t > 24 ? r.getUint32(24) : 0, t > 24 ? r.getUint32(28) : 0),
            this.key = e
        } else if (!this.key)
            throw new Error("key is required")
    }
    AES_CTR_set_options(e, t, r) {
        if (void 0 !== r) {
            if (r < 8 || r > 48)
                throw new m("illegal counter size");
            this.counterSize = r;
            var n = Math.pow(2, r) - 1;
            this.asm.set_mask(0, 0, n / 4294967296 | 0, 0 | n)
        } else
            this.counterSize = r = 48,
            this.asm.set_mask(0, 0, 65535, 4294967295);
        if (void 0 === e)
            throw new Error("nonce is required");
        if (!_(e))
            throw new TypeError("unexpected nonce type");
        var i = e.length;
        if (!i || i > 16)
            throw new m("illegal nonce size");
        this.nonce = e;
        var o = new DataView(new ArrayBuffer(16));
        if (new Uint8Array(o.buffer).set(e),
        this.asm.set_nonce(o.getUint32(0), o.getUint32(4), o.getUint32(8), o.getUint32(12)),
        void 0 !== t) {
            if (!l(t))
                throw new TypeError("unexpected counter type");
            if (t < 0 || t >= Math.pow(2, r))
                throw new m("illegal counter value");
            this.counter = t,
            this.asm.set_counter(0, 0, t / 4294967296 | 0, 0 | t)
        } else
            this.counter = 0
    }
    AES_set_iv(e) {
        if (void 0 !== e) {
            if (!_(e))
                throw new TypeError("unexpected iv type");
            if (16 !== e.length)
                throw new m("illegal iv size");
            var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
            this.iv = e,
            this.asm.set_iv(t.getUint32(0), t.getUint32(4), t.getUint32(8), t.getUint32(12))
        } else
            this.iv = null,
            this.asm.set_iv(0, 0, 0, 0)
    }
    AES_set_padding(e) {
        this.padding = void 0 === e || !!e
    }
    AES_reset(e, t, r) {
        return this.result = null,
        this.pos = 0,
        this.len = 0,
        this.AES_set_key(e),
        this.AES_set_iv(t),
        this.AES_set_padding(r),
        this
    }
    AES_Encrypt_process(e) {
        if (!_(e))
            throw new TypeError("data isn't of expected type");

        function g(e, t, r, n, i) {
                var o = e.length - t
                  , a = o < i ? o : i;
                return e.set(r.subarray(n, n + a), t),
                a
            };
        for (var t = this.asm, r = this.heap, n = S.ENC[this.mode], i = S.HEAP_DATA, o = this.pos, a = this.len, s = 0, u = e.length || 0, f = 0, c = 0, l = new Uint8Array(a + u & -16); u > 0; )
            a += c = g(r, o + a, e, s, u),
            s += c,
            u -= c,
            (c = t.cipher(n, i + o, a)) && l.set(r.subarray(o, o + c), f),
            f += c,
            c < a ? (o += c,
            a -= c) : (o = 0,
            a = 0);
        return this.result = l,
        this.pos = o,
        this.len = a,
        this
    }
    AES_Encrypt_finish(e) {
        var t = null
          , r = 0;
        void 0 !== e && (r = (t = this.AES_Encrypt_process(e).result).length);
        var n = this.asm
          , i = this.heap
          , o = S.ENC[this.mode]
          , a = S.HEAP_DATA
          , s = this.pos
          , u = this.len
          , f = 16 - u % 16
          , c = u;
        if (this.hasOwnProperty("padding")) {
            if (this.padding) {
                for (var l = 0; l < f; ++l)
                    i[s + u + l] = f;
                c = u += f
            } else if (u % 16)
                throw new m("data length must be a multiple of the block size")
        } else
            u += f;
        var d = new Uint8Array(r + c);
        return r && d.set(t),
        u && n.cipher(o, a + s, u),
        c && d.set(i.subarray(s, s + c), r),
        this.result = d,
        this.pos = 0,
        this.len = 0,
        this
    }
    AES_Decrypt_process(e) {
        if (!_(e))
            throw new TypeError("data isn't of expected type");
        var t = this.asm
          , r = this.heap
          , n = S.DEC[this.mode]
          , i = S.HEAP_DATA
          , o = this.pos
          , a = this.len
          , s = 0
          , u = e.length || 0
          , f = 0
          , c = a + u & -16
          , l = 0
          , d = 0;
        this.padding && (c -= l = a + u - c || 16);
        for (var h = new Uint8Array(c); u > 0; )
            a += d = g(r, o + a, e, s, u),
            s += d,
            u -= d,
            (d = t.cipher(n, i + o, a - (u ? 0 : l))) && h.set(r.subarray(o, o + d), f),
            f += d,
            d < a ? (o += d,
            a -= d) : (o = 0,
            a = 0);
        return this.result = h,
        this.pos = o,
        this.len = a,
        this
    }
    AES_Decrypt_finish(e) {
        var t = null
          , r = 0;
        void 0 !== e && (r = (t = this.AES_Decrypt_process(e).result).length);
        var n = this.asm
          , i = this.heap
          , o = S.DEC[this.mode]
          , a = S.HEAP_DATA
          , s = this.pos
          , u = this.len
          , f = u;
        if (u > 0) {
            if (u % 16) {
                if (this.hasOwnProperty("padding"))
                    throw new m("data length must be a multiple of the block size");
                u += 16 - u % 16
            }
            if (n.cipher(o, a + s, u),
            this.hasOwnProperty("padding") && this.padding) {
                var c = i[s + f - 1];
                if (c < 1 || c > 16 || c > f)
                    throw new v("bad padding");
                for (var l = 0, d = c; d > 1; d--)
                    l |= c ^ i[s + f - d];
                if (l)
                    throw new v("bad padding");
                f -= c
            }
        }
        var h = new Uint8Array(r + f);
        return r > 0 && h.set(t),
        f > 0 && h.set(i.subarray(s, s + f), r),
        this.result = h,
        this.pos = 0,
        this.len = 0,
        this
    }
}

var w = (()=>{
    class e extends C {
        constructor(e) {
            super(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], arguments.length > 3 ? arguments[3] : void 0, arguments.length > 4 ? arguments[4] : void 0),
            this.mode = "CBC",
            this.BLOCK_SIZE = 16
        }
        encrypt(e) {
            return this.AES_Encrypt_finish(e)
        }
        decrypt(e) {
            return this.AES_Decrypt_finish(e)
        }
    }
    return e.encrypt = I,
    e.decrypt = R,
    e
}


)()

function I(e, t, r, n) {
    if (void 0 === e)
        throw new SyntaxError("data required");
    if (void 0 === t)
        throw new SyntaxError("key required");
    return new w(t,n,r,A,T).encrypt(e).result
}

function R(e, t, r, n) {
    if (void 0 === e)
        throw new SyntaxError("data required");
    if (void 0 === t)
        throw new SyntaxError("key required");
    return new w(t,n,r,A,T).decrypt(e).result
}

function crawl_data(key){
    // key = 'IcUrF6yQJLBzfQrS0oPsjA=='
    x = new Uint8Array(base64ToArrayBuffer(key))

    return I(N,x,void 0,x)
}

function de_crawl_data(s,key){
    // key = 'IcUrF6yQJLBzfQrS0oPsjA=='
    array = s.split(',')
    a =  Uint8Array.from(array)
    console.log(a)
    x = new Uint8Array(base64ToArrayBuffer(key))
    new_array_int8 = R(a,x,void 0,x)
    new_buffer = new Buffer.from(new_array_int8.buffer)
    return new_buffer
}
linsongx1 = '61,145,51,185,1,220,73,254,253,168,73,151,112,156,195,165,209,139,247,251,151,2,152,118,69,170,253,15,126,238,40,146,79,62,169,133,135,2,32,218,44,118,255,6,199,115,91,251,251,98,58,8,134,227,225,175,119,88,187,58,219,196,7,190,109,52,7,196,45,45,162,47,255,150,188,22,92,103,115,15,43,160,233,246,255,28,187,123,20,227,255,141,117,182,57,144,33,59,60,138,139,208,158,28,108,213,120,43,231,149,72,134,42,104,209,214,77,60,64,173,216,212,15,8,109,13,66,33,244,42,91,213,80,214,129,209,13,30,60,19,23,2,173,77,179,36,120,132,242,168,46,64,202,166,86,237,121,102,147,58,55,167,25,122,152,124,26,87,192,54,35,191,140,47,55,194,217,228,15,156,215,44,230,148,176,196,162,1,177,53,95,145,26,127,30,196,165,141,222,161,147,84,142,35,232,19,69,7,18,27,175,106,248,153,205,98,71,80,113,169,77,75,196,63,254,136,253,15,138,61,155,232,98,59,13,67,134,207,210,33,97,153,156,98,240,71,205,8,32,88,81,160,80,207,157,38,146,95,217,151,69,206,63,159,49,79,142,191,204,151,214,42,216,66,166,201,180,128,244,228,64,42,227,244,176,252,138,55,181,31,32,31,10,255,229,110,100,238,31,38,251,247,104,173,130,229,4,116,65,236,199,87,6,96,192,227,101,158,92,171,37,239,49,137,222,172,19,218,240,219,172,242,117,95,90,135,143,67,181,68,195,243,201,95,165,131,127,219,110,221,244,204,10,126,31,167,106,92,61,200,212,113,144,208,73,118,224,109,77,229,128,179,255,142,64,243,29,60,153,79,194,153,121,57,110,124,130,190,47,95,0,41,252,32,123,111,99,65,16,188,126,62,28,93,235,88,101,167,118,121,66,137,228,140,111,220,23,74,253,101,54,76,58,221,234,65,11,136,47,75,204,157,90,19,185,23,45,15,32,83,232,129,207,141,240,44,122,36,44,80,75,154,46,241,101,138,152,5,16,70,203,154,17,59,24,63,237,123,236,7,228,160,233,162,32,128,32,208,196,139,45,19,213,136,207,146,54,132,195,16,220,71,1,205,83,172,168,239,98,87,22,125,105,167,63,75,45,47,205,175,234,87,164,255,163,135,193,143,218,255,149,93,166,24,197,82,216,80,129,93,99,17,155,112,142,205,213,140,241,186,106,34,21,33,156,158,46,140,199,225,193,36,4,16,51,77,87,169,219,171,74,189,194,139,72,139,155,139,78,94,43,231,122,160,98,215,72,106,140,151,93,20,93,207,154,127,81,245,78,47,125,226,38,36,52,177,155,64,92,89,197,77,85,32,19,154,119,225,97,95,238,8,101,64,59,226,5,167,11,16,28,173,174,40,217,222,207,74,200,43,232,244,152,133,75,235,53,109,53,16,18,59,97,85,134,133,200,231,239,101,223,25,177,67,137,101,91,122,21,110,123,242,97,195,228,59,83,18,52,119,75,145,82,134,135,88,218,33,216,91,197,109,235,34,60,246,80,69,79,179,107,121,6,117,195,51,154,63,88,211,7,141,107,137,167,164,158,122,231,200,193,213,143,18,131,250,108,37,81,57,181,30,141,109,163,216,24,164,147,171,68,16,14,146,100,75,116,202,107,225,167,174,147,237,20,236,236,166,96,209,237,46,25,222,132,147,184,102,253,98,162,113,139,81,85,194,59,200,12,207,133,211,24,136,224,239,19,190,153,133,192,39,148,19,254,240,165,213,9,57,81,97,156,233,98,138,80,236,39,13,51,94,144,216,164,104,2,86,39,153,88,88,65,33,221,218,139,51,226,98,180,195,120,36,11,150,135,200,151,16,44,108,69,207,236,55,74,253,36,35,61,245,32,141,209,212,150,200,141,81,168,213,127,241,131,196,205,99,107,79,60,165,148,146,243,193,240,190,238,165,183,88,93,18,202,26,39,192,236,0,143,220,217,132,141,105,55,118,109,227,206,224,207,168,237,37,194,236,240,99,36,225,98,57,214,9,167,98,11,52,89,218,198,253,87,58,6,212,162,114,203,171,216,180,87,93,24,110,163,4,171,139,180,19,133,221,43,198,62,238,5,113,19,1,248,133,209,209,217,189,107,194,148,16,200,61,86,211,204,2,178,246,182,216,246,53,21,142,255,121,225,85,47,157,28,58,202,51,89,97,150,110,132,159,39,118,72,52,177,83,162,24,206,34,96,160,191,80,32,122,132,136,59,97,157,95,46,173,43,62,181,255,4,53,99,172,186,225,249,201,241,16,54,215,234,196,136,123,128,40,4,111,138,154,78,75,52,13,34,105,108,187,94,119,159,190,255,21,106,152,28,38,167,113,202,185,97,2,180,225,223,19,214,55,178,182,5,5,59,252,123,123,73,158,234,242,92,90,224,12,49,117,119,11,31,232,184,156,184,135,112,240,152,114,100,172,253,98,255,94,95,0,81,89,122,197,251,139,223,227,173,168,78,218,237,178,208,9,129,241,55,54,99,12,79,156,196,119,198,115,79,114,234,236,78,155,233,61,21,211,228,88,152,253,27,108,155,213,29,10,146,176,110,205,215,4,112,221,29,224,20,199,70,166,134,50,42,41,14,159,124,63,224,246,94,56,74,228,44,153,84,146,186,246,97,167,226,104,236,252,141,175,97,108,10,189,23,146,122,228,69,46,206,136,185,172,114,87,44,58,1,114,55,28,108,190,251,212,175,79,171,142,86,8,220,106,197,20,33,111,163,44,52,122,151,203,20,228,248,20,27,15,162,65,111,84,120,56,26,2,101,50,177,200,45,216,164,143,211,72,29,88,223,2,127,93,76,206,60,237,4,235,150,106,82,137,223,237,32,73,115,159,103,143,136,230,160,44,225,129,173,136,139,215,87,92,13,215,1,83,134,147,13,29,237,117,246,237,55,135,243,22,45,183,123,91,247,40,234,227,84,101,35,190,140,183,240,163,128,172,45,216,148,134,104,111,235,224,66,215,212,178,216,133,183,213,100,198,76,83,138,140,240,156,168,137,131,11,43,170,197,39,126,32,4,6,236,85,161,241,50,230,54,170,10,144,102,230,209,159,187,161,152,30,126,231,184,67,101,64,200,216,68,161,94,214,182,0,28,229,52,140,248,67,36,211,62,82,154,137,129,136,151,247,5,204,124,236,152,170,190,115,54,193,3,4,185,223,244,203,95,136,110,114,194,197,153,93,99,199,91,214,16,44,88,40,15,243,168,86,180,180,30,199,242,24,152,160,126,106,22,35,188,81,68,36,28,75,61,247,40,247,225,219,105,113,46,71,69,152,182,165,174,230,229,111,225,147,18,250,191,105,56,161,81,139,29,2,102,118,93,214,196,87,68,166,213,173,193,98,95,15,10,38,225,98,8,249,68,93,212,80,68,173,28,117,53,69,131,22,222,35,226,108,73,187,39,198,134,209,12,157,244,111,190,88,88,12,224,189,26,183,102,185,42,167,101,141,231,193,53,184,126,198,155,192,222,136,33,223,114,130,99,62,121,223,213,162,161,237,57,148,142,224,65,183,158,254,183,15,6,150,193,10,106,244,195,45,146,175,139,117,197,58,84,249,14,7,152,251,165,21,238,137,181,94,103,124,216,117,205,232,8,187,177,139,84,156,73,147,165,65,21,207,201,87,131,160,243,225,63,26,218,15,67,208,168,230,88,197,188,139,176,176,94,222,255,137,248,181,75,236,71,16,148,175,66,65,184,104,29,216,69,119,13,199,29,237,79,0,37,162,94,115,113,67,59,60,107,17,106,84,112,96,156,208,254,4,237,31,116,170,143,150,213,122,210,166,147,5,217,116,66,124,128,27,233,183,24,165,10,175,226,65,245,49,195,61,202,108,2,3,0,75,121,71,98,169,85,202,211,22,141,172,128,172,171,202,90,236,210,159,240,6,81,157,66,185,110,148,102,224,176,154,103,11,105,84,198,46,1,172,184,204,188,103,36,33,12,33,94,130,129,95,114,22,103,131,7,29,113,71,207,18,248,182,141,229,219,76,170,38,163,92,22,89,150,39,22,128,197,59,239,49,168,157,224,218,120,34,66,104,173,225,22,121,10,44,52,178,201,206,133,118,28,95,188,174,178,107,84,48,225,107,175,140,2,240,192,83,36,149,31,189,201,230,72,248,41,115,27,112,60,237,75,208,140,245,188,194,178,174,199,112,6,109,36,215,107,61,58,134,88,197,10,9,215,252,89,133,172,135,88,222,54,183,33,213,100,77,136,53,231,213,126,28,116,59,96,52,99,117,248,172,21,26,35,168,4,150,86,142,59,38,249,43,91,123,74,242,51,129,10,202,223,79,57,57,75,45,113,134,61,24,214,160,2,97,175,227,90,41,177,182,208,156,129,89,147,153,36,87,222,220,107,109,18,198,18,65,142,91,146,247,123,74,113,67,243,183,86,168,5,2,204,203,183,248,211,112,233,91,96,142,117,226,148,98,103,197,33,125,9,61,177,201,51,176,222,143,8,13,122,36,56,64,210,198,125,6,14,246,83,91,105,162,60,33,137,26,213,242,8,126,236,213,122,61,214,137,41,10,133,132,137,149,224,11,238,99,4,126,247,106,223,217,19,64,216,98,44,138,212,100,105,32,245,32,186,77,139,74,13,35,85,197,244,209,168,155,178,16,64,192,213,132,166,181,10,115,197,233,66,209,42,37,109,15,114,14,178,55,240,153,101,70,220,69,154,241,105,164,216,243,236,163,228,98,42,244,236,13,197,26,181,112,184,128,121,179,116,252,200,101,61,249,237,191,144,107,50,255,41,81,81,255,113,75,225,188,182,195,120,125,4,167,169,219,32,212,193,163,195,191,50,53,101,49,86,186,235,88,128,228,242,4,185,54,220,214,144,39,162,24,215,217,86,188,199,234,33,246,135,220,117,179,159,185,196,23,11,15,25,59,203,191,233,157,158,196,4,174,201,232,0,81,181,32,108,161,86,137,140,85,182,11,232,164,190,32,65,189,81,147,132,130,48,194,26,224,121,202,121,74,37,229,237,88,108,188,139,4,226,180,255,185,26,129,213,4,116,159,1,27,56,105,122,46,144,138,221,213,172,174,226,7,88,190,253,1,232,59,153,147,185,252,255,118,250,19,136,37,197,185,190,172,40,78,8,136,195,171,161,58,33,161,156,255,74,98,165,31,163,147,216,226,79,154,61,233,110,125,123,109,78,228,231,125,163,205,75,84,191,171,32,125,62,246,137,79,25,58,80,231,173,34,7,58,118,179,88,177,182,249,46,251,114,25,95,66,160,131,206,147,221,146,18,145,171,174,190,224,31,161,28,202,65,9,159,255,179,122,53,3,176,55,0,181,192,84,235,52,211,201,75,98,16,61,21,94,247,91,4,138,245,65,94,212,32,255,255,119,236,110,112,148,81,28,74,67,154,191,39,213,255,162,158,13,247,100,142,53,242,120,157,59,1,8,180,57,206,212,7,229,137,215,91,253,234,57,142,230,141,179,199,53,40,250,213,198,19,109,83,232,50,183,33,89,160,242,17,105,162,219,92,107,21,13,74,162,24,135,80,15,30,54,123,175,41,66,99,184,209,165,3,241,214,211,27,88,47,19,185,143,117,50,215,10,47,115,22,127,150,70,213,214,42,205,47,200,11,249,95,213,149,187,111,210,174,201,37,148,182,194,17,124,4,93,26,83,196,235,229,170,39,89,23,120,8,116,65,1,150,102,68,200,241,144,107,27,131,68,242,68,138,38,118,227,72,155,179,129,243,224,213,249,91,98,53,50,216,108,5,155,163,234,236,210,184,124,129,226,112,233,12,15,91,215,102,245,34,118,225,112,65,188,213,129,255,2,251,0,36,152,103,75,225,78,71,185,32,63,192,72,177,45,21,234,242,164,219,29,127,201,233,172,47,198,13,152,47,196,172,125,23,197,185,213,7,102,175,43,145,204,62,248,61,104,249,40,172,234,216,251,131,7,254,62,70,18,12,234,33,151,80,160,8,2,11,193,84,81,66,99,190,158,103,229,14,153,121,238,5,9,216,185,54,65,231,143,218,115,77,7,128,63,11,221,93,4,130,9,220,228,234,193,78,33,179,228,107,63,147,95,252,9,33,17,164,113,213,155,112,211,17,39,241,104,191,211,46,90,61,87,169,142,93,108,52,51,157,245,249,64,127,47,29,180,158,77,139,76,174,153,150,135,15,190,71,133,29,149,198,132,181,56,218,225,53,175,23,126,202,103,45,117,171,183,151,92,145,242,57,129,210,132,102,118,206,218,64,154,162,10,116,139,239,201,50,161,213,238,168,133,32,203,18,78,13,94,135,120,49,94,205,66,99,115,235,250,91,142,206,235,103,81,239,251,1,38,94,153,237,245,252,94,217,166,230,103,161,88,209,155,250,246,226,197,142,150,175,96,152,189,15,45,64,13,202,101,70,146,181,133,196,67,173,207,65,255,200,108,34,149,213,69,202,180,149,181,30,130,97,123,179,48,6,152,163,147,103,58,129,133,8,37,157,166,234,108,88,161,33,90,97,251,52,66,110,100,154,150,240,167,224,177,101,212,6,186,253,153,185,79,199,67,111,164,66,180,118,244,165,136,19,2,4,161,236,150,139,4,223,242,113,173,222,28,114,240,53,194,230,9,134,101,117,157,59,249,230,127,42,234,159,96,51,131,209,151,7,15,186,120,20,4,165,63,192,94,205,74,151,85,150,50,207,27,52,104,158,157,214,61,107,128,169,11,63,59,209,76,109,150,197,99,203,71,181,44,187,184,91,4,31,92,152,178,42,74,96,236,76,133,80,87,43,100,81,46,236,30,59,128,252,206,83,225,223,67,233,10,43,227,71,4,107,36,16,99,52,0,104,44,224,142,244,220,159,187,140,15,250,68,60,140,62,7,100,61,221,49,67,85,255,220,196,192,33,168,141,224,203,26,254,248,33,210,128,201,34,94,199,179,2,99,243,141,240,87,55,85,43,71,29,226,38,184,114,190,40,140,251,209,128,188,251,92,249,34,169,0,206,248,1,157,33,169,171,212,79,12,75,36,8,80,217,142,71,14,101,188,143,244,86,71,110,134,156,98,255,23,32,56,233,70,95,135,216,215,179,244,201,188,172,159,145,146,99,235,134,200,120,179,88,184,134,101,7,145,181,96,253,76,141,25,146,245,21,25,230,229,16,53,92,100,201,18,134,78,204,25,62,133,178,95,34,240,37,218,110,24,94,89,154,132,74,201,14,189,218,83,186,180,89,110,143,170,28,84,15,197,68,153,141,120,217,104,196,196,120,100,30,196,251,92,162,196,42,233,146,229,5,109,98,192,184,83,104,211,133,37,62,198,169,174,76,170,94,15,82,99,24,33,108,117,47,0,106,85,202,142,80,48,36,243,197,58,123,237,248,35,132,228,70,229,174,57,243,26,238,167,231,147,55,229,35,214,125,36,128,42,255,75,128,252,101,153,116,240,114,130,86,44,151,8,194,120,230,22,149,87,255,248,251,227,56,102,190,155,239,129,156,104,25,167,197,67,124,64,145,96,157,43,162,192,198,124,65,214,63,84,105,179,46,179,43,87,8,131,2,75,207,177,89,37,106,243,176,160,64,8,239,179,166,141,181,167,183,226,115,187,94,42,85,116,150,55,114,210,96,88,113,3,74,73,255,203,103,81,247,81,131,120,99,26,15,27,231,223,101,86,161,143,23,89,46,8,137,120,125,84,128,73,64,2,125,255,89,196,22,37,149,139,199,176,194,51,102,24,68,121,9,220,118,117,73,39,71,109,198,173,107,183,27,55,26,91,237,236,182,228,69,175,224,1,78,87,49,204,75,89,67,8,62,148,243,244,219,107,148,190,54,236,54,133,51,214,149,233,81,183,27,32,203,99,250,99,141,4,197,47,115,156,192,212,1,7,61,249,128,106,40,178,239,36,238,176,185,236,135,190,163,236,221,142,8,244,229,63,190,204,11,169,232,31,238,69,146,209,195,129,232,130,67,212,115,70,51,134,102,248,50,238,196,119,237,79,66,11,53,124,89,123,143,22,59,160,219,84,160,48,231,64,126,23,66,232,29,200,177,32,217,66,65,247,45,254,98,210,115,120,135,186,63,158,213,108,65,166,10,126,34,214,130,74,30,37,166,33,8,77,86,145,254,172,118,159,142,13,68,196,251,163,51,197,147,177,150,249,152,126,15,84,4,105,156,157,161,131,168,105,26,118,187,227,164,68,178,2,14,201,108,250,114,14,119,97,230,148,255,138,71,228,114,40,114,95,44,251,247,148,182,211,60,85,13,210,212,145,7,192,9,66,127,93,0,42,194,174,67,204,166,88,34,230,227,93,172,93,108,118,24,5,8,143,94,55,19,95,2,20,10,2,97,200,113,93,147,52,70,179,165,38,22,32,69,242,84,25,155,35,123,121,18,105,234,190,240,33,13,31,239,107,76,64,143,173,242,217,75,157,84,222,63,135,1,16,55,60,154,22,205,175,249,158,98,88,175,171,211,244,105,19,62,92,98,167,246,32,11,144,218,48,10,242,85,96,147,83,137,113,114,196,19,185,135,227,119,237,97,71,141,174,168,54,74,192,56,1,116,103,64,60,89,231,108,71,204,151,224,112,26,162,183,6,14,125,196,237,1,145,106,160,91,189,235,221,47,169,24,227,63,254,128,219,73,157,144,127,161,224,187,157,127,113,252,210,15,187,123,153,234,164,2,54,51,66,146,173,127,85,20,143,67,216,162,238,36,142,106,91,135,171,105,9,209,253,168,138,130,22,215,217,250,216,9,49,117,58,7,26,102,77,169,116,42,32,114,87,216,35,214,242,55,185,20,19,24,0,118,204,51,42,182,117,136,100,7,98,230,36,249,2,28,64,200,166,2,70,170,74,241,147,142,44,200,65,144,184,126,103,19,21,126,38,113,192,168,215,104,127,57,185,232,82,227,133,195,29,16,75,59,126,234,38,124,98,150,182,146,82,20,225,73,182,44,44,234,212,104,209,33,64,19,44,243,78,8,114,72,5,204,150,68,122,149,74,5,251,24,66,119,188,214,103,100,119,134,132,123,76,66,79,104,21,55,97,206,46,220,254,105,202,90,121,224,25,37,172,60,15,156,28,21,122,56,139,115,167,110,120,243,186,108,28,69,194,147,23,2,192,191,120,87,212,109,24,83,121,178,94,61,82,76,166,134,235,211,70,22,252,252,140,112,60,74,72,51,133,104,100,98,234,162,133,196,121,1,81,8,101,221,245,92,181,143,59,196,180,20,253,39,35,89,116,131,52,187,241,88,52,225,151,39,181,243,67,123,179,211,95,215,228,75,236,139,138,82,108,192,83,118,238,208,231,232,87,215,20,198,102,136,195,82,189,77,34,177,184,16,210,36,4,101,223,5,177,156,38,101,153,158,214,130,227,56,60,171,12,190,213,46,125,108,78,248,218,12,248,20,234,24,69,32,83,69,16,236,180,72,144,172,243,78,196,202,103,216,178,21,167,127,35,221,49,194,101,100,223,222,248,240,163,14,81,150,212,59,248,206,112,212,210,13,210,154,8,86,11,127,43,129,183,57,242,167,121,28,13,206,223,152,117,167,238,28,80,185,126,87,12,32,135,6,126,210,104,245,65,221,88,68,153,193,177,250,175,245,21,56,253,96,193,122,213,143,233,226,145,103,119,124,244,125,78,143,241,195,154,223,151,79,168,115,156,243,147,68,8,28,53,188,175,210,161,58,34,253,32,200,140,172,149,146,122,45,252,253,217,251,238,207,50,115,198,15,238,171,44,207,208,189,205,134,252,44,251,196,89,190,27,205,169,172,180,43,241,176,108,184,88,11,115,226,185,130,65,178,206,172,173,28,65,35,99,76,231,245,40,214,254,197,72,79,119,83,135,101,185,160,168,66,18,43,234,54,229,12,71,107,46,235,145,214,242,45,151,225,160,236,130,106,210,160,71,26,255,28,28,75,166,83,213,11,161,206,42,111,44,224,171,100,145,149,34,42,254,48,15,212,80,136,84,39,30,251,219,72,81,113,231,149,93,18,220,122,105,28,21,175,254,54,69,120,51,65,189,99,146,110,165,223,181,99,47,250,193,143,103,165,112,253,25,169,14,23,170,226,163,36,198,206,125,5,50,3,196,107,76,179,69,150,65,49,141,35,160,139,9,193,232,68,45,44,255,20,215,176,83,182,122,125,246,124,183,189,70,8,236,198,232,246,179,208,23,89,70,235,130,141,57,74,254,168,237,113,84,118,191,202,10,106,5,206,121,247,180,10,4,245,60,164,103,141,72,102,95,239,120,237,184,85,35,19,196,180,141,122,213,51,17,165,249,17,97,203,70,29,37,63,161,188,121,80,202,236,13,242,72,88,156,246,233,85,41,76,190,25,200,199,119,203,141,178,216,194,143,108,11,204,226,46,71,77,78,146,176,84,54,139,136,61,171,100,57,30,5,43,152,64,43,29,200,220,49,116,172,180,24,221,252,108,93,195,27,45,145,90,249,92,67,116,126,233,60,192,162,197,116,236,210,22,199,159,174,252,79,180,107,164,18,156,104,246,169,198,57,5,76,240,231,138,215,139,120,46,67,138,178,194,128,241,82,253,108,182,170,154,12,212,198,170,114,147,46,173,80,124,197,205,211,10,26,142,185,16,61,79,250,75,23,208,232,74,206,174,111,228,241,5,81,35,184,139,158,97,223,105,176,15,91,205,204,20,157,45,4,49,163,240,196,109,195,171,230,179,23,139,106,42,75,42,227,118,33,52,163,253,214,183,88,65,69,38,95,106,144,146,148,145,120,110,133,143,132,93,85,119,34,201,184,1,29,219,17,70,82,211,228,99,173,160,17,192,211,130,189,105,157,36,11,109,164,169,65,7,194,61,83,249,54,171,240,116,111,52,52,155,65,66,130,248,149,159,137,253,40,154,230,21,128,165,138,17,181,72,160,134,122,50,209,157,145,241,224,42,51,41,193,76,199,36,112,62,196,152,78,113,118,108,25,96,15,36,1,104,149,194,72,33,205,236,173,140,228,41,70,189,13,38,57,106,255,66,101,128,45,186,233,154,41,244,36,251,114,31,37,54,21,133,201,120,207,60,96,96,184,40,121,15,112,12,240,252,147,113,249,219,183,180,11,145,50,20,106,89,59,17,91,6,192,182,85,208,129,30,237,160,55,31,68,16,107,204,162,236,155,139,220,118,102,158,32,189,106,203,248,68,60,150,27,114,206,204,94,222,3,95,133,231,150,138,164,37,78,174,235,129,102,124,66,3,79,56,122,105,178,161,183,165,68,3,77,251,185,97,252,231,253,120,103,63,54,231,225,54,185,81,83,190,57,128,182,59,202,144,121,97,214,171,107,195,85,126,52,203,17,169,154,46,142,173,88,236,154,180,146,240,45,129,17,112,255,213,182,13,87,239,169,192,24,128,60,69,31,33,183,62,148,255,143,85,30,200,213,35,195,22,182,41,95,184,6,72,118,251,137,63,148,81,20,233,172,24,203,134,248,27,117,98,210,248,93,206,98,216,147,51,115,124,227,71,178,240,250,124,130,187,119,249,160,250,123,126,95,207,131,220,241,122,122,207,220,17,2,234,221,37,211,156,9,102,110,52,38,170,4,241,126,198,47,216,187,111,193,85,100,126,41,12,61,110,135,114,248,64,129,97,234,142,205,89,216,58,62,179,233,143,27,209,110,155,253,94,19,71,11,120,177,165,43,47,76,58,221,218,76,62,70,48,205,234,155,252,93,113,3,35,230,119,200,81,150,59,46,179,171,229,122,48,39,86,229,165,96,69,91,4,238,229,8,146,89,253,5,244,188,250,214,138,179,44,104,57,159,247,113,168,176,228,188,241,211,237,28,117,15,203,57,24,43,226,208,202,126,164,226,232,54,123,173,13,67,181,177,165,174,59,230,177,189,208,192,16,190,70,236,35,244,100,80,213,31,12,120,98,92,156,87,47,42,107,21,61,159,236,200,77,56,17,227,81,76,187,48,8,107,22,167,225,217,159,87,137,58,101,56,178,157,124,54,79,198,91,0,178,19,188,225,137,99,191,101,159,251,113,5,146,164,134,45,124,84,17,218,229,147,39,35,34,159,240,163,174,105,66,122,250,135,142,234,154,52,245,74,33,26,154,162,195,159,49,18,171,142,191,80,60,213,220,45,123,12,74,210,92,21,245,209,164,67,158,138,111,229,251,11,131,36,45,31,71,109,55,24,29,132,215,22,163,177,238,42,179,251,82,188,50,253,128,72,106,201,44,2,209,88,36,247,11,100,229,198,57,128,89,108,214,138,180,160,179,44,118,146,232,246,59,144,116,29,32,245,164,6,143,99,250,177,140,174,188,175,160,200,233,73,109,27,199,132,130,51,3,109,4,9,37,233,0,111,42,59,160,45,38,9,55,136,188,221,61,193,49,32,160,149,249,90,237,191,136,144,243,195,252,226,143,117,98,52,86,173,146,79,64,18,138,188,47,218,205,174,137,77,168,210,117,48,187,151,182,1,244,173,71,119,171,226,73,62,138,130,154,113,119,235,250,51,108,142,122,150,20,136,242,146,131,26,247,140,47,52,112,129,177,77,182,65,20,69,173,12,64,59,250,63,81,170,68,49,183,247,8,86,140,196,69,119,247,141,209,250,165,147,145,93,43,126,154,14,249,239,153,191,180,187,240,159,179,222,75,123,69,5,115,174,91,139,67,99,108,212,21,41,40,88,22,43,206,200,144,99,104,3,158,228,98,172,62,141,145,14,217,163,3,167,236,2,81,200,73,60,142,126,28,226,88,2,58,213,28,20,19,85,33,120,189,50,193,181,200,3,164,115,175,184,104,162,125,237,233,118,142,221,125,30,236,178,180,63,132,13,114,223,220,125,57,248,201,83,193,242,190,149,83,149,240,229,159,140,2,74,128,166,109,64,38,161,121,237,68,154,202,39,50,37,149,91,91,212,225,37,250,80,228,235,3,187,229,108,53,60,72,42,74,31,71,113,64,193,12,232,131,151,109,77,45,66,40,182,126,72,208,27,87,214,216,197,110,61,184,141,252,116,226,100,185,139,128,251,196,6,7,247,32,185,242,57,2,111,143,15,187,189,61,19,191,146,19,223,79,250,204,244,8,117,27,43,190,93,136,152,22,138,84,246,5,228,186,9,176,84,76,192,112,120,161,191,91,11,66,183,135,37,108,89,53,146,239,99,48,109,136,96,254,119,83,4,124,133,120,244,133,2,102,87,243,82,248,72,75,233,89,251,232,94,156,247,198,210,235,249,54,44,22,72,248,152,146,198,225,62,88,171,79,217,29,178,33,2,21,166,17,227,195,10,100,190,210,172,90,154,182,178,15,193,147,120,100,201,121,62,224,82,189,163,216,195,13,39,19,21,47,181,241,99,232,217,249,69,84,122,162,92,231,241,105,82,225,116,120,23,84,31,220,143,40,139,67,69,41,97,89,216,18,57,66,194,73,62,177,246,84,90,119,92,229,67,238,238,72,94,175,44,153,174,109,160,240,216,233,222,198,245,178,58,179,153,129,20,29,43,190,224,113,46,212,73,10,180,114,171,23,219,37,133,168,102,45,170,193,211,99,135,163,246,188,225,158,3,139,0,161,232,46,65,181,159,147,148,252,35,144,74,205,231,201,10,251,222,242,30,123,214,152,213,40,19,33,119,92,148,28,179,24,205,37,6,242,10,34,153,215,209,44,51,167,139,241,147,188,98,4,69,102,47,200,199,125,35,11,134,67,23,240,121,185,232,62,199,183,160,75,127,164,221,126,193,236,140,45,111,131,216,50,205,219,182,102,62,241,31,205,49,130,131,122,69,130,8,46,3,22,71,163,114,235,13,6,79,124,175,194,233,175,54,158,95,132,127,78,42,104,166,129,123,137,42,60,118,113,185,22,238,151,245,158,47,30,251,175,60,93,58,238,190,120,128,35,116,152,158,172,63,48,225,223,98,167,198,210,51,165,168,98,132,46,149,66,82,209,143,244,91,219,107,21,214,226,146,204,146,80,164,45,240,214,77,173,111,213,111,155,37,26,31,84,233,145,47,159,184,197,75,174,59,162,161,119,172,63,33,190,96,146,203,216,11,49,154,219,37,73,248,16,61,165,54,111,153,238,149,180,220,214,228,64,243,249,94,216,60,181,33,8,87,64,133,144,202,20,167,240,229,133,146,53,164,26,28,165,147,243,204,2,50,0,235,105,180,176,151,66,255,165,230,120,138,222,100,235,157,93,202,50,106,52,155,199,244,158,75,69,117,235,117,146,222,11,229,232,187,38,9,57,232,182,207,132,131,233,163,130,106,191,214,70,252,61,177,117,5,168,166,30,155,63,23,139,31,220,116,164,182,77,244,125,94,251,176,237,157,243,226,74,112,124,2,64,0,218,17,27,146,150,232,141,15,106,154,157,63,151,58,177,129,40,114,79,34,36,2,54,128,23,192,179,27,102,181,238,117,128,54,186,236,222,137,178,72,222,219,167,234,137,98,178,201,247,228,126,207,84,166,112,109,60,203,83,34,146,55,106,53,12,14,34,0,178,24,124,228,7,94,61,148,168,139,148,128,241,52,141,99,49,99,158,53,230,160,99,45,32,67,230,110,159,249,147,234,132,145,133,104,214,23,57,144,168,79,85,214,95,25,172,214,87,136,231,6,144,208,246,4,120,185,120,154,245,171,65,12,175,89,207,212,47,89,36,193,13,122,131,23,53,178,163,6,28,67,152,58,234,153,119,224,6,38,70,147,194,174,202,241,147,66,83,126,104,254,191,196,251,151,105,14,62,2,102,57,150,142,17,208,62,231,183,134,206,124,136,254,141,133,119,204,52,151,111,250,30,185,194,119,224,97,198,68,88,69,93,0,119,167,86,27,51,244,29,214,78,179,221,243,163,180,141,160,155,175,55,66,56,139,28,238,183,52,22,192,199,72,175,220,50,8,164,96,98,109,241,17,187,141,50,17,242,56,222,55,201,164,47,81,89,224,186,138,23,237,230,30,98,104,216,14,193,34,105,132,39,67,20,148,210,98,141,113,98,123,245,85,65,147,165,223,210,122,92,118,162,146,67,35,148,225,243,172,205,141,247,136,31,0,22,233,254,172,219,127,220,191,5,128,254,193,34,153,203,213,182,213,67,205,122,35,37,213,166,129,235,194,176,115,207,253,249,174,135,240,227,242,71,105,148,213,101,247,200,14,6,114,74,207,231,152,166,33,181,140,101,237,119,34,35,145,146,248,127,231,113,39,102,233,61,66,80,39,131,240,39,63,111,25,235,107,154,251,183,132,51,204,37,161,151,213,223,37,209,149,252,56,121,207,206,51,203,106,218,20,195,82,65,151,162,114,222,129,191,189,42,101,251,201,178,236,248,6,244,61,93,214,93,8,161,186,158,20,13,5,84,149,198,178,201,19,183,4,213,69,27,222,93,153,7,252,250,45,207,96,22,88,92,62,150,59,10,62,151,202,89,105,81,35,243,5,113,210,135,211,140,220,1,54,210,37,242,169,57,44,249,82,93,239,219,153,29,112,3,243,109,20,101,64,221,155,154,219,41,2,0,83,50,88,186,40,198,93,173,45,189,139,144,19,13,41,121,210,155,177,169,149,142,53,215,63,179,99,248,149,175,42,206,118,103,172,17,118,108,156,70,157,93,178,241,199,109,106,25,193,65,242,81,88,176,67,36,58,93,207,100,148,87,191,8,173,78,111,13,109,236,249,94,30,166,155,63,65,175,172,111,2,58,234,164,45,76,235,131,57,157,108,214,243,97,189,228,206,154,147,27,162,65,84,69,71,33,182,58,214,124,206,166,127,0,27,199,38,13,17,175,146,203,61,57,221,41,116,0,65,203,238,217,135,65,33,159,54,139,144,139,140,147,213,69,69,229,177,125,250,94,48,121,82,136,224,152,254,197,48,133,40,227,208,45,26,184,42,175,157,242,33,156,29,0,90,21,251,43,144,98,245,46,164,180,215,51,202,172,217,159,124,234,189,212,60,41,198,98,117,60,224,158,205,1,151,246,66,234,155,138,236,157,249,42,9,22,230,90,100,41,18,173,86,63,62,193,235,111,202,49,235,145,81,222,48,179,46,158,27,147,124,244,220,107,226,6,38,99,183,171,68,100,146,94,170,102,34,184,86,44,31,211,141,114,172,189,2,194,221,235,7,47,241,41,206,218,242,30,101,145,131,103,174,245,195,162,233,143,208,176,57,114,180,216,228,234,158,235,51,14,218,47,141,75,65,126,234,125,86,50,123,121,148,57,59,186,69,105,25,60,47,70,181,153,162,12,249,82,242,159,150,89,107,140,44,155,210,104,212,38,88,217,70,33,37,120,42,155,120,65,2,12,68,17,5,137,54,82,129,70,229,57,126,207,151,88,117,240,40,129,19,77,68,63,42,230,150,2,43,72,226,171,249,229,104,93,233,27,174,223,85,5,59,117,70,12,114,6,171,220,79,160,48,85,208,202,141,238,226,189,176,228,167,67,25,73,67,182,13,95,175,178,177,181,100,77,157,62,102,130,178,158,212,159,120,26,102,20,108,52,87,148,52,133,161,245,183,230,67,10,16,7,239,55,149,61,129,35,50,195,106,104,106,85,201,218,119,100,139,40,53,175,7,214,52,232,29,220,11,204,182,118,84,122,213,40,24,156,209,94,135,196,48,76,4,9,253,50,152,238,9,187,251,176,103,60,233,90,26,166,132,71,181,35,113,186,237,197,12,199,86,122,167,234,127,230,61,228,130,63,193,142,95,10,248,107,8,150,231,224,46,124,181,226,235,68,27,115,32,85,1,116,58,140,139,47,120,45,43,184,137,246,9,28,48,201,251,96,106,127,71,62,170,229,149,252,233,5,227,122,131,149,229,91,74,1,101,55,158,17,185,249,253,235,202,35,246,209,215,237,116,88,141,249,231,179,55,74,236,73,4,180,213,211,149,38,99,24,185,220,43,115,72,159,206,130,25,91,252,119,5,30,211,162,10,27,36,206,214,171,89,31,193,252,245,133,137,123,45,56,206,122,206,186,255,97,68,212,254,228,188,140,123,110,243,22,156,151,202,131,244,118,96,214,27,113,186,62,141,143,3,123,167,61,64,107,242,103,105,188,129,245,120,241,183,80,98,118,102,2,85,230,157,193,253,206,96,139,172,202,174,205,136,251,117,135,52,255,67,193,115,45,133,249,53,226,247,12,101,212,1,89,217,98,206,61,206,122,237,12,141,59,62,155,135,141,198,244,110,87,172,196,18,8,123,72,99,143,144,174,131,184,243,109,104,215,177,9,213,42,158,105,35,239,213,13,107,160,173,67,208,128,218,16,48,161,18,74,191,233,3,21,83,73,247,144,108,233,29,159,110,8,118,86,240,174,239,236,156,150,198,82,239,150,46,167,22,219,21,186,56,58,71,191,94,52,110,219,92,174,160,177,180,188,205,103,235,115,38,212,246,16,151,206,164,251,168,150,133,205,181,54,166,60,141,118,254,230,5,75,56,80,209,211,52,217,140,18,10,208,202,58,205,110,242,17,225,153,139,199,111,114,159,71,49,166,173,104,180,163,66,142,218,159,142,183,34,86,124,234,110,153,223,212,246,151,59,130,142,188,253,36,121,178,97,12,34,144,247,252,79,211,254,205,11,152,217,56,52,31,116,115,229,55,57,82,230,149,75,9,23,149,149,125,236,196,238,68,73,122,13,178,88,40,31,75,169,205,108,166,229,10,16,77,139,150,69,216,172,153,43,94,189,18,16,239,54,255,209,248,86,50,99,7,85,200,118,116,7,86,178,202,99,187,71,92,185,9,43,90,213,32,209,218,100,89,105,192,254,93,247,179,81,212,253,25,61,252,111,116,21,50,76,255,81,157,178,32,123,93,26,84,165,42,29,21,96,167,67,231,185,96,86,67,70,230,49,217,245,209,185,152,26,228,152,117,240,26,29,29,57,167,14,245,251,154,84,92,206,107,168,163,197,188,75,203,7,51,114,166,129,232,120,223,10,59,85,253,150,231,144,253,79,189,142,169,58,155,248,95,50,75,8,73,222,216,136,50,251,241,9,19,116,247,55,2,227,151,69,27,132,60,32,5,186,239,254,16,6,199,5,16,141,156,252,14,22,2,169,97,196,65,73,4,179,247,23,162,141,111,85,222,227,156,130,254,21,57,50,80,102,82,185,203,75,212,187,149,37,212,42,112,6,38,74,164,140,42,136,225,152,165,150,227,246,50,178,119,127,169,156,134,223,197,130,154,186,146,97,173,170,98,25,87,28,55,140,24,109,189,87,62,159,209,200,96,153,76,254,249,202,69,150,191,60,97,237,70,106,145,78,95,251,243,105,204,63,246,196,112,135,138,195,221,197,101,120,181,4,7,162,192,11,93,215,15,253,150,206,60,188,76,162,137,97,24,205,211,128,234,201,25,59,213,105,172,129,82,122,246,216,197,107,143,67,143,50,98,241,92,106,81,253,159,1,33,11,108,31,183,103,6,238,206,92,234,170,84,52,174,226,113,224,37,157,1,91,246,173,140,237,39,151,131,19,35,155,163,178,88,208,7,56,238,255,156,6,163,255,162,134,187,179,131,38,185,98,243,133,63,108,135,255,183,110,68,250,103,109,225,20,130,180,169,240,148,215,185,44,202,12,123,138,128,29,33,163,240,192,73,141,249,224,207,106,246,77,13,31,190,208,233,21,189,104,50,24,70,219,72,78,194,76,218,172,168,72,217,101,173,180,218,73,37,216,66,157,137,177,253,196,195,2,75,233,204,96,143,65,104,133,53,167,179,127,180,158,197,13,138,23,219,96,28,238,249,193,143,10,245,124,196,126,100,225,240,162,118,235,245,110,110,250,146,179,146,224,115,136,115,160,246,73,20,12,218,141,211,54,6,7,121,241,196,85,91,203,55,27,115,88,96,102,197,248,89,229,68,52,93,170,233,122,60,99,1,241,254,188,43,249,98,231,207,33,67,243,175,177,6,68,188,18,120,0,138,122,127,147,218,193,14,95,55,69,172,119,20,171,87,20,244,174,204,180,53,103,112,218,227,186,244,220,22,84,79,140,166,211,212,32,200,129,181,192,199,46,226,201,102,19,154,250,214,203,95,24,1,245,225,85,86,21,4,190,112,5,109,182,219,35,252,98,11,249,225,190,63,127,239,53,210,117,206,56,115,41,216,147,22,193,7,8,15,79,43,118,162,175,195,216,242,60,14,155,26,178,20,172,56,158,189,60,152,205,42,0,49,111,161,93,47,112,241,171,210,199,106,126,96,250,197,183,92,170,156,106,45,186,144,121,232,116,98,136,52,91,50,62,244,77,66,42,104,151,201,205,20,231,0,193,8,36,94,110,32,225,49,185,18,181,112,216,99,90,0,78,10,168,170,79,190,33,164,188,241,163,233,167,165,154,29,240,201,247,116,79,52,208,199,234,110,189,21,235,168,60,59,40,78,6,13,199,173,171,57,213,160,119,83,251,48,122,49,209,138,3,234,37,83,155,105,226,95,253,153,15,139,156,152,80,96,39,136,166,81,241,112,153,65,182,171,137,26,219,157,114,52,118,156,202,124,231,58,66,113,59,193,180,105,9,23,85,186,153,140,195,101,221,37,169,0,167,13,218,220,119,53,175,187,49,5,97,238,104,14,160,173,62,233,81,235,170,111,52,182,142,73,119,187,88,16,187,20,137,37,1,60,154,76,84,2,113,124,233,31,227,188,138,163,69,231,163,8,21,236,236,37,157,155,221,250,47,162,207,21,56,71,238,85,148,253,113,84,170,197,160,253,66,34,73,9,156,255,248,22,239,128,199,199,166,16,138,149,92,184,134,125,248,165,251,169,107,113,66,44,99,126,121,19,174,254,237,107,55,149,158,34,18,233,93,220,176,92,39,16,45,29,16,135,27,6,49,146,21,70,154,96,213,222,165,237,30,161,109,131,73,150,71,105,70,27,124,59,165,11,34,43,243,234,90,224,150,115,237,137,12,174,93,1,180,139,203,123,41,135,23,159,156,106,70,48,0,11,20,128,219,34,112,109,32,12,153,28,77,45,72,232,189,107,46,98,253,233,133,140,225,156,128,242,106,211,114,20,103,130,39,127,34,129,178,4,219,51,34,200,3,198,49,108,134,225,91,240,199,242,61,246,169,140,89,10,183,166,162,54,237,113,237,8,79,119,133,212,96,96,13,240,226,97,91,89,229,97,231,102,59,254,130,135,238,146,240,181,159,79,91,11,138,17,245,40,203,45,7,196,3,209,87,74,10,32,19,98,129,29,7,127,185,248,22,115,63,173,199,177,174,66,162,5,48,113,247,46,152,145,104,97,21,203,167,89,109,102,175,27,37,102,7,89,189,157,241,214,32,169,245,243,78,75,243,216,1,40,85,44,23,2,186,165,51,128,77,6,116,233,177,91,17,113,240,102,24,8,7,85,217,16,242,69,195,193,234,23,189,216,62,202,164,37,168,179,17,56,223,152,144,186,111,229,93,97,36,95,210,216,213,76,173,30,59,152,242,199,237,93,180,104,22,223,197,125,2,23,48,220,118,164,184,1,73,37,84,238,16,16,90,133,126,13,76,22,194,172,105,236,82,157,224,26,31,53,243,148,231,105,158,36,240,120,52,132,85,148,85,122,254,90,212,36,87,61,5,80,196,243,14,127,73,43,62,143,191,105,212,203,119,22,153,38,21,23,218,233,88,118,29,36,77,255,3,158,171,166,215,48,37,29,37,115,83,76,147,213,83,82,21,97,33,188,147,78,191,134,169,76,166,178,246,129,80,44,140,141,194,65,216,189,89,105,6,39,67,122,82,219,149,137,137,152,152,121,90,169,35,69,171,69,236,195,25,71,20,194,247,16,8,157,57,142,82,197,28,34,86,16,236,208,184,169,180,44,213,122,185,249,83,30,49,126,126,7,68,7,22,27,86,52,212,131,237,254,49,98,156,1,141,132,91,175,101,211,46,250,135,172,119,95,227,200,180,168,60,253,137,62,246,245,80,31,131,118,219,36,42,184,255,139,233,244,253,164,196,20,16,12,124,37,133,164,255,181,196,231,233,2,171,140,94,160,1,243,195,26,87,14,69,100,44,119,32,10,240,233,170,255,109,128,54,141,214,157,35,168,132,95,190,31,54,237,54,174,90,220,163,18,235,250,55,249,89,131,18,241,95,251,241,13,197,109,176,136,129,88,185,185,242,153,215,227,240,126,169,242,150,39,254,228,238,228,159,120,229,128,97,0,0,102,68,140,79,87,128,242,171,132,35,240,164,83,186,137,46,110,212,59,92,12,115,233,45,60,141,203,213,247,237,142,208,197,87,115,185,14,223,52,125,54,114,225,104,126,68,143,52,216,134,218,114,209,71,139,90,149,157,209,131,69,18,84,232,195,88,255,150,0,50,156,63,241,135,54,224,20,153,2,232,95,26,212,187,165,188,213,145,110,36,192,15,147,62,126,21,42,158,36,247,168,242,10,103,185,109,99,244,223,16,60,193,141,121,110,218,103,151,74,221,236,208,88,95,57,152,255,238,22,9,61,243,138,101,184,240,160,136,234,214,173,133,162,37,184,87,19,75,164,104,199,8,90,110,207,2,115,204,41,151,153,246,191,123,176,62,243,255,131,187,103,254,87,30,136,145,21,56,53,191,151,90,90,221,196,58,170,173,220,47,195,13,25,168,138,127,117,71,33,134,84,83,102,52,189,53,71,212,41,45,2,189,43,12,161,12,171,4,62,199,22,85,94,183,217,252,28,242,123,173,238,183,161,50,158,231,13,206,121,248,64,207,171,254,174,29,201,204,85,131,86,128,18,127,50,145,94,72,0,106,234,226,234,154,202,118,106,234,225,17,33,185,40,60,223,4,146,149,142,130,176,76,175,27,18,64,198,26,44,51,96,156,201,253,17,204,3,182,107,3,149,126,250,140,17,129,221,87,187,64,112,213,199,216,14,67,34,1,236,95,7,38,140,231,105,245,5,168,187,25,109,106,48,158,37,74,24,53,73,28,120,139,51,31,247,177,89,168,166,42,141,105,204,173,22,2,218,6,13,75,144,46,115,92,113,72,53,238,31,130,228,39,65,89,221,129,163,229,101,221,223,146,184,174,61,255,52,252,203,17,126,24,119,210,47,30,46,72,59,222,65,57,79,94,245,150,48,188,219,170,163,227,79,155,135,93,100,131,245,62,42,74,11,156,109,215,163,116,139,75,44,116,240,49,238,138,219,32,161,196,147,19,125,220,166,25,87,88,139,132,162,96,49,190,25,17,0,42,195,113,162,51,212,3,86,64,28,252,23,27,36,109,15,48,90,175,255,62,59,120,111,249,145,238,179,8,119,143,222,180,35,254,189,125,120,143,138,38,22,70,167,59,72,28,239,93,73,120,31,134,248,69,56,91,31,48,224,55,8,13,33,188,223,163,137,226,196,160,172,244,175,247,16,202,201,66,35,184,144,247,45,162,202,88,188,250,166,233,214,217,96,65,156,186,204,128,82,26,9,224,42,80,159,179,203,80,89,246,122,34,125,47,137,161,138,147,213,99,140,251,207,154,208,116,36,162,40,94,173,5,38,197,68,7,218,3,156,77,71,179,15,228,216,42,233,36,103,200,89,230,180,0,209,124,82,111,102,101,94,134,224,25,201,115,249,184,31,136,226,41,171,103,26,91,14,99,231,134,101,197,79,59,67,25,81,226,255,179,45,134,59,198,126,106,79,171,188,224,142,213,149,112,227,166,214,70,114,246,146,254,223,0,255,121,115,172,88,18,179,219,67,184,200,188,251,162,236,62,185,176,248,83,166,68,247,88,66,16,139,253,202,124,209,214,95,26,150,171,201,45,202,118,132,108,218,204,181,24,252,41,62,146,58,137,166,43,51,253,223,212,102,129,239,219,223,30,206,113,122,104,44,124,13,234,56,174,120,64,13,4,153,187,145,231,94,60,133,153,30,198,109,218,215,7,165,25,91,226,233,84,160,131,153,145,96,89,82,211,220,215,37,61,86,193,242,169,251,228,16,93,88,185,159,248,2,112,228,165,138,239,83,135,246,14,154,39,4,247,32,104,161,32,52,182,39,87,117,63,118,215,229,214,170,224,81,49,184,130,183,66,52,77,27,200,224,105,243,98,36,231,228,242,240,109,142,249,124,55,17,165,200,212,173,132,150,172,216,94,216,15,13,234,58,154,49,160,204,72,198,59,106,107,240,166,91,27,217,148,225,91,140,92,47,118,229,60,223,252,65,51,86,233,90,50,10,56,114,11,183,252,137,218,139,21,72,60,176,195,77,59,138,115,136,245,209,184,234,245,63,129,134,165,119,122,211,63,43,216,191,52,43,80,246,86,32,147,59,184,104,133,94,217,203,222,215,178,19,240,210,142,175,215,140,231,144,23,205,174,221,94,146,48,59,211,74,28,121,1,46,145,76,196,150,100,100,166,53,196,147,162,163,130,169,52,140,74,93,249,143,0,76,126,105,36,30,182,15,243,99,195,125,137,122,27,44,217,100,44,122,227,255,228,112,9,134,1,196,65,59,137,238,252,153,251,101,227,13,149,122,70,104,157,202,115,14,146,1,1,84,133,82,16,113,64,117,142,40,231,167,241,229,80,127,232,79,200,15,235,209,139,2,13,191,163,6,129,93,118,129,163,116,211,33,36,74,238,43,127,14,239,135,208,9,47,18,2,172,3,123,237,36,41,164,72,151,195,178,212,234,125,3,254,68,233,121,147,79,223,217,63,81,115,100,147,228,234,189,122,229,157,41,197,4,164,189,147,94,239,225,124,29,199,54,69,54,45,103,179,116,28,59,119,163,103,138,104,211,62,46,56,252,13,88,165,100,139,165,232,201,164,104,239,72,97,240,30,102,63,152,254,65,233,232,158,89,188,174,96,158,127,249,107,76,70,236,44,63,20,217,162,190,51,201,147,128,226,12,231,221,239,189,76,235,66,189,182,147,48,140,28,141,39,83,146,66,10,193,4,13,204,101,0,19,222,221,7,98,43,70,165,73,1,137,35,81,93,243,89,73,51,137,14,48,156,248,5,178,72,41,50,150,90,33,157,47,104,180,49,170,210,114,23,235,84,117,39,6,70,54,175,60,117,59,40,134,136,193,157,210,11,62,89,252,117,51,105,25,8,161,102,50,147,204,249,162,175,61,21,182,208,143,221,72,245,37,144,84,78,73,105,246,246,131,131,32,232,95,83,132,154,119,182,185,158,37,24,164,51,190,71,44,52,35,219,248,241,96,251,123,127,160,153,78,248,172,164,90,183,33,101,133,113,223,60,196,231,144,56,153,4,232,182,242,235,56,70,45,31,93,92,154,183,30,149,248,182,91,142,164,217,108,236,238,53,156,47,2,170,253,250,95,231,65,157,177,178,217,186,182,240,187,180,186,195,249,163,177,252,107,37,86,196,187,148,20,44,76,204,113,152,101,137,238,24,201,62,185,43,243,185,134,180,143,85,152,184,221,71,227,7,172,11,252,45,36,22,184,144,206,98,87,60,229,138,80,162,188,161,77,50,134,244,16,233,171,134,1,117,135,13,144,45,2,124,24,74,49,252,144,27,145,8,213,201,80,153,59,59,250,219,0,192,77,133,111,158,76,78,119,177,173,87,154,213,68,121,212,23,53,22,167,216,192,140,15,69,79,48,155,240,249,210,230,59,202,122,188,132,218,184,199,91,128,221,182,26,217,52,83,197,200,9,148,142,238,226,53,159,60,139,101,158,96,197,7,38,183,53,90,201,84,145,182,125,230,144,6,11,247,38,111,126,108,21,31,71,23,232,108,9,106,139,72,89,226,9,115,181,75,238,45,135,62,84,8,241,35,47,7,240,88,211,209,80,105,107,178,242,66,223,162,38,22,179,50,242,151,46,127,230,193,227,36,180,40,230,238,63,215,68,193,159,249,36,3,99,11,6,252,125,232,215,218,41,178,10,61,218,244,8,141,95,15,54,200,215,155,57,140,11,229,224,27,64,20,220,171,1,15,127,82,219,162,205,210,249,122,35,61,134,95,52,179,41,105,17,11,229,167,129,49,206,111,2,102,142,30,157,117,199,132,43,96,26,125,36,242,252,72,124,212,17,72,155,120,137,199,210,107,105,54,207,63,38,43,136,144,79,47,113,163,229,103,36,243,153,200,38,186,130,115,246,26,198,245,251,236,249,109,176,55,35,243,96,102,111,204,213,118,159,148,128,40,163,42,119,193,95,20,26,153,219,8,169,118,88,34,233,199,255,70,67,163,219,250,162,132,46,44,145,45,43,90,38,134,81,124,60,31,151,138,180,231,133,203,136,100,251,192,133,234,28,105,159,87,237,135,12,249,48,86,2,70,204,107,132,141,131,108,86,26,33,219,244,249,132,78,195,243,38,207,101,193,178,245,196,161,56,194,185,84,118,28,156,104,96,133,35,158,225,194,170,147,253,243,131,35,38,130,105,241,15,18,240,22,28,20,101,163,132,141,72,110,220,212,189,28,61,109,148,37,132,53,125,160,29,143,255,149,35,2,136,68,33,115,66,2,229,166,225,184,63,55,105,8,168,142,111,241,147,171,131,209,137,49,68,38,107,252,192,160,172,119,187,150,6,76,145,76,111,35,196,206,25,245,52,119,3,54,22,123,239,230,192,12,116,255,107,23,62,252,60,212,134,119,101,218,237,99,48,234,51,188,66,243,130,29,58,30,44,124,158,85,140,168,85,12,20,193,24,46,14,209,18,218,43,160,240,205,70,136,122,152,139,224,53,189,182,226,70,62,245,233,147,24,177,56,20,186,140,45,122,120,101,8,139,182,33,89,74,198,67,37,245,34,200,201,208,195,138,76,86,185,2,29,7,141,157,81,167,250,110,101,250,181,179,229,247,159,6,151,252,11,114,16,44,190,243,15,0,41,133,141,22,114,107,175,107,235,49,76,127,218,85,234,96,178,186,172,162,247,169,253,243,212,68,157,2,204,208,103,98,105,80,46,188,190,163,128,229,222,244,145,81,251,200,231,36,115,3,184,208,35,79,110,200,40,85,157,101,57,77,181,17,75,66,239,127,202,5,48,105,69,46,30,28,119,163,236,198,169,252,210,164,212,21,29,237,54,81,79,8,238,217,56,174,208,118,79,64,250,56,251,173,212,37,176,133,216,141,222,36,17,220,65,238,248,34,13,111,36,221,237,251,236,21,22,2,57,118,53,37,151,25,62,177,157,211,167,229,178,103,121,211,119,246,239,112,113,182,189,39,96,58,164,207,62,36,152,157,53,118,120,0,192,63,230,4,253,233,232,240,22,233,239,211,17,188,51,101,226,54,12,92,41,227,150,114,110,200,91,210,100,219,159,116,178,213,3,26,41,185,178,193,220,17,170,148,53,128,7,23,7,127,203,118,223,51,244,104,111,245,77,117,233,1,230,130,160,0,58,174,79,22,16,97,227,102,45,83,237,58,82,76,163,188,59,249,61,111,216,213,179,25,76,75,220,212,86,126,48,182,65,177,248,171,185,16,110,114,186,106,88,165,164,218,159,117,88,144,195,151,151,240,55,12,250,145,234,150,53,211,216,244,65,191,135,207,111,186,113,214,247,55,1,148,247,141,91,221,245,201,246,210,96,123,53,63,205,51,16,64,17,35,94,93,218,230,47,207,55,113,39,211,80,40,160,79,226,113,136,35,121,23,79,145,169,109,126,47,75,113,138,69,237,202,234,234,49,252,210,48,140,126,194,108,67,171,96,29,108,138,211,211,196,203,195,194,15,225,169,112,238,199,104,175,192,240,88,57,109,188,217,166,192,123,231,30,139,133,93,154,58,239,175,123,83,185,33,33,40,145,165,229,241,1,152,75,81,138,157,10,217,30,221,38,50,124,169,5,125,253,65,162,9,57,184,174,128,251,238,23,18,58,99,16,59,234,13,17,17,123,142,72,68,202,112,28,215,189,171,78,22,194,142,30,107,22,241,255,105,67,138,182,186,202,28,198,186,29,203,190,68,40,108,37,49,110,128,212,163,57,228,212,220,165,144,141,57,234,112,110,41,210,9,115,17,210,116,150,2,231,185,185,247,95,84,233,169,148,188,102,138,250,223,104,127,20,177,33,143,112,235,141,89,50,194,196,118,79,114,225,180,92,50,79,6,209,221,130,156,129,105,86,27,47,216,14,82,18,38,55,88,136,219,54,11,78,34,49,38,130,54,240,11,2,185,211,90,119,118,66,118,223,229,140,18,1,111,96,230,126,49,232,66,151,201,126,71,204,37,39,208,86,105,118,157,82,178,110,161,6,33,22,85,83,108,63,5,114,180,168,141,86,165,88,4,97,109,165,75,1,90,200,178,200,79,196,128,149,213,192,215,233,71,83,181,224,165,139,165,7,192,71,85,72,192,184,220,159,17,226,144,202,42,206,251,172,157,236,40,190,207,131,150,230,109,155,224,157,100,68,165,204,57,137,161,91,113,23,109,50,203,130,42,62,74,102,27,89,38,116,17,249,241,114,145,51,133,24,249,2,181,45,70,38,42,72,240,15,81,154,221,162,230,15,231,8,86,193,160,136,182,200,110,52,101,5,60,154,13,244,153,44,79,205,130,2,175,198,118,234,19,53,163,45,149,92,29,142,39,164,184,145,11,215,50,66,13,233,177,216,90,102,114,78,47,64,52,245,67,124,148,171,84,224,37,228,2,245,192,126,54,162,160,54,122,140,60,244,43,0,25,74,155,16,57,249,93,2,135,25,154,244,134,162,209,145,13,118,23,168,186,210,49,140,68,236,81,234,19,20,99,214,183,137,9,146,102,60,57,136,183,40,255,48,190,34,152,145,208,250,36,22,27,98,154,177,94,91,170,192,233,36,31,74,138,101,77,190,165,239,187,124,224,168,140,103,215,60,140,25,73,47,132,244,122,42,227,199,156,242,155,206,188,245,58,22,190,110,245,214,222,146,110,56,89,171,247,159,210,80,213,240,125,146,48,44,127,108,59,22,131,29,1,60,83,142,77,213,230,104,125,6,24,35,209,58,197,128,86,11,247,251,36,236,126,23,15,139,4,131,161,169,212,45,43,26,67,123,172,58,225,157,77,233,7,86,127,159,24,32,178,203,123,92,1,244,245,139,250,32,169,103,184,249,41,236,46,121,198,160,92,52,205,198,59,180,142,30,21,148,13,36,14,90,12,21,162,160,180,175,3,193,168,114,151,229,230,160,82,214,40,231,186,119,121,150,65,71,69,151,205,191,26,52,231,217,58,48,210,97,204,34,0,125,28,119,190,70,181,29,161,235,152,17,68,181,185,249,127,50,20,82,164,225,87,32,72,135,34,17,22,56,182,208,84,78,50,111,239,139,59,49,56,1,68,15,56,79,41,218,97,187,213,65,49,226,138,77,24,55,228,105,110,247,114,237,214,104,176,157,47,210,241,159,74,143,254,246,46,120,254,67,163,187,75,145,164,3,47,61,55,53,179,241,188,179,134,203,179,9,69,175,16,77,47,53,169,238,129,178,154,193,81,20,242,215,88,55,145,212,242,6,107,91,82,4,4,59,14,193,186,128,150,55,119,73,57,86,205,15,45,233,241,155,229,67,138,236,214,244,140,115,43,136,132,52,123,131,202,83,129,27,161,102,176,73,185,26,103,73,28,195,239,171,192,103,124,144,144,82,50,76,173,181,96,130,6,92,246,3,229,133,4,116,26,117,230,186,154,116,137,87,205,179,97,254,151,155,226,34,8,211,90,80,114,93,18,237,243,45,48,72,233,145,110,215,69,251,243,249,201,174,104,76,206,205,140,26,120,61,202,228,89,189,197,224,233,49,204,92,17,48,49,206,65,139,167,106,199,84,96,226,17,217,95,110,13,125,22,230,179,179,106,252,73,107,41,192,180,250,180,180,184,60,114,248,86,85,121,95,203,5,170,191,95,218,109,230,152,63,248,92,214,168,40,55,214,2,110,102,119,180,7,77,171,2,157,170,172,150,192,101,12,136,107,248,84,8,132,19,79,55,165,60,2,6,123,163,204,250,180,85,175,239,92,231,173,166,166,112,33,45,237,24,217,83,197,136,212,240,115,79,178,118,200,174,203,101,206,221,101,168,49,212,220,156,205,169,68,68,140,41,74,76,50,141,63,241,179,118,217,225,131,97,205,29,36,206,177,222,186,69,6,142,81,124,114,132,232,28,88,131,188,47,106,246,238,41,223,93,225,229,102,241,104,191,30,22,163,46,11,208,151,39,129,28,145,246,10,177,192,141,175,133,156,76,212,180,155,155,33,109,32,40,186,111,55,131,18,175,176,5,183,182,17,145,92,222,123,151,235,107,61,84,7,146,191,244,13,40,193,39,28,48,138,4,42,2,84,192,94,249,239,106,235,6,255,125,209,108,69,32,210,118,86,102,200,228,11,242,38,119,48,23,48,17,146,19,80,28,77,208,185,243,207,124,72,197,243,66,125,192,189,225,208,239,76,104,148,183,39,248,9,204,77,134,96,25,52,197,92,226,201,109,98,184,234,91,82,80,52,72,199,156,158,240,90,72,31,247,216,219,148,216,153,104,34,49,150,73,182,65,94,70,40,252,242,186,89,255,139,157,248,231,79,205,140,24,1,190,183,25,200,151,2,216,86,195,207,130,122,247,62,67,210,204,178,61,48,105,254,205,137,191,248,12,160,244,52,97,64,182,249,125,62,51,253,222,182,97,75,199,27,231,21,86,198,213,112,61,139,5,17,62,193,91,98,255,21,177,174,103,191,109,45,4,51,202,88,238,185,104,245,63,252,195,171,215,167,111,140,145,120,219,0,28,122,245,182,57,240,232,61,240,67,134,77,134,18,195,70,91,24,58,212,82,243,81,73,102,103,219,31,48,2,27,93,39,100,186,132,159,243,17,223,248,116,181,147,221,235,115,209,100,112,176,244,143,2,13,136,192,4,8,154,52,251,160,98,200,52,172,167,101,62,225,145,111,144,31,192,99,253,65,203,96,127,57,141,77,119,209,86,117,141,70,86,198,173,128,167,15,221,182,60,87,150,43,230,122,35,161,76,15,32,178,121,213,189,185,206,199,184,232,34,20,213,232,144,52,69,65,146,215,129,250,37,3,188,161,118,245,20,173,57,241,152,137,192,244,190,254,140,73,164,238,189,166,167,164,233,145,190,191,223,48,119,213,220,54,201,238,114,104,30,51,118,4,251,211,125,185,158,164,168,253,254,192,54,152,253,92,98,150,170,199,197,120,236,160,102,95,133,103,77,118,155,155,85,114,219,149,205,200,58,220,203,117,37,188,9,74,47,147,228,30,102,55,21,21,162,72,50,137,64,76,43,57,33,13,20,20,187,16,195,188,170,44,134,86,158,248,202,162,94,37,25,73,82,61,88,4,241,204,225,87,89,122,52,41,104,98,203,115,8,234,213,203,28,227,166,20,39,134,146,216,4,103,233,133,146,62,21,179,139,21,170,15,154,90,146,94,115,127,26,181,111,45,66,47,155,1,19,138,4,225,206,245,100,141,187,25,24,199,78,202,65,27,13,239,57,75,128,201,141,222,83,252,79,165,194,43,139,175,234,237,39,108,98,135,254,124,197,13,220,58,153,114,231,147,33,173,195,151,154,139,224,127,191,138,33,77,192,226,23,81,166,79,230,4,42,118,248,239,187,207,178,49,219,23,4,193,44,101,251,201,125,40,7,78,122,93,48,84,79,165,35,105,160,225,190,244,0,155,75,217,102,152,248,48,173,226,35,31,187,250,131,125,109,183,5,10,25,219,40,46,100,161,230,187,156,226,112,8,30,192,68,209,231,115,115,173,146,16,240,129,32,214,39,138,77,3,187,17,226,39,187,128,112,124,81,5,126,175,64,138,235,202,247,6,48,55,18,2,231,250,225,200,79,205,202,220,213,245,31,101,182,74,199,117,149,106,122,209,211,107,84,93,86,159,15,98,210,0,184,42,229,156,203,81,232,29,187,228,173,42,148,74,236,252,108,111,149,92,96,169,101,146,218,232,129,249,112,124,5,127,97,202,122,148,157,232,55,28,226,243,84,127,30,98,111,175,216,173,193,56,119,63,0,157,59,30,60,218,195,255,201,184,136,249,72,220,106,177,41,12,17,200,192,230,92,166,21,224,114,23,165,122,64,20,41,182,9,41,177,31,155,90,169,31,112,229,217,139,162,187,194,55,128,192,181,6,50,198,180,239,237,195,88,49,198,60,139,15,126,189,106,124,220,217,227,33,66,150,225,201,136,176,98,53,158,116,143,220,204,118,184,189,133,4,237,114,18,220,147,169,59,177,19,115,179,53,12,57,101,51,18,16,211,149,111,101,107,219,247,80,187,189,209,206,32,196,63,225,201,178,48,167,61,23,19,232,249,96,240,143,102,131,36,2,94,76,104,21,173,25,216,130,81,58,1,209,12,134,14,69,13,79,157,165,202,198,26,168,144,86,24,147,220,29,79,193,118,121,1,62,163,221,229,13,74,152,227,44,127,237,196,171,139,70,16,43,92,147,138,221,109,140,7,141,26,208,202,163,164,70,8,134,74,21,206,10,111,250,155,159,136,232,130,99,151,32,238,238,232,96,104,23,8,114,82,242,220,9,166,205,4,37,125,56,102,114,92,175,95,30,173,87,222,66,146,98,204,209,36,7,67,31,7,33,154,248,107,163,249,90,183,35,245,239,69,33,180,66,156,105,126,49,65,123,63,151,70,232,154,182,26,188,90,98,27,14,14,254,50,71,30,101,198,57,235,73,215,106,180,183,136,72,56,214,60,175,187,44,146,255,39,195,207,23,124,24,85,114,84,40,106,2,188,45,246,33,233,21,77,92,102,157,124,100,98,250,180,15,108,36,118,164,223,50,198,107,249,114,120,33,13,158,44,208,14,99,137,180,163,83,241,67,150,216,180,95,221,161,190,29,193,142,210,153,7,49,250,172,212,73,27,198,134,212,111,164,149,175,53,199,139,139,53,148,130,50,123,185,99,2,109,146,201,130,44,43,99,152,163,176,208,177,191,35,111,245,96,169,253,41,75,176,192,92,187,216,150,138,217,169,170,17,101,229,166,39,115,91,254,215,91,10,234,149,248,54,5,13,87,208,129,31,198,175,60,216,30,98,78,171,140,79,192,212,179,13,140,245,212,209,22,116,142,43,4,117,119,101,224,215,56,65,85,178,185,10,150,244,132,168,233,238,183,170,253,163,158,176,123,126,126,31,92,10,189,245,185,235,211,47,104,127,50,50,164,70,120,54,165,4,4,192,160,138,158,255,223,197,68,93,44,130,115,38,204,255,38,140,214,118,35,127,180,207,127,69,51,92,94,100,57,55,254,17,46,102,96,130,159,83,209,237,196,198,123,178,95,6,221,47,106,24,3,62,57,54,204,42,23,87,85,32,137,134,43,48,75,29,248,14,193,0,175,239,250,159,135,246,21,50,115,228,147,165,244,244,106,116,245,12,100,171,247,42,23,134,63,179,235,122,172,224,145,33,66,131,208,56,147,46,111,61,132,218,212,2,188,118,73,135,8,246,112,52,155,16,45,130,60,103,156,209,95,144,190,182,205,119,127,218,175,142,224,54,172,1,9,250,115,189,255,101,6,157,233,239,140,28,98,9,196,223,50,93,230,200,106,253,1,103,82,179,97,104,122,223,86,116,196,95,20,179,66,19,191,219,146,31,173,112,159,75,202,230,61,226,150,92,17,200,98,30,27,48,123,245,88,190,202,115,129,63,0,197,248,48,192,97,110,199,231,175,101,108,157,138,95,189,142,207,7,255,154,236,128,47,174,126,8,25,111,38,28,221,163,178,244,130,201,87,203,94,62,34,73,248,38,62,121,94,88,148,33,156,232,40,39,223,176,74,243,131,142,6,37,245,170,171,62,18,152,125,61,158,237,67,243,36,38,176,203,58,18,110,47,10,195,209,111,123,36,235,128,167,42,49,196,13,121,31,180,138,6,105,44,15,49,221,43,233,147,233,44,200,242,88,30,56,181,235,242,172,120,141,7,233,6,75,137,123,6,203,158,224,52,46,52,97,118,69,158,83,105,85,249,246,218,195,10,18,121,197,226,244,117,188,127,23,9,170,236,13,135,207,165,39,23,105,93,150,27,250,224,128,121,57,67,6,210,40,118,93,176,167,222,88,204,227,73,194,153,1,139,66,145,184,219,207,222,79,157,163,213,125,36,226,144,15,234,132,235,209,199,104,229,78,183,18,154,55,190,232,98,164,82,195,139,223,31,222,185,216,172,25,129,11,101,16,24,162,97,126,247,145,52,51,218,26,159,197,157,31,192,140,67,30,38,99,254,91,249,24,152,47,18,132,28,139,169,91,56,250,115,129,67,185,137,177,22,207,70,136,7,172,83,25,225,193,38,61,61,82,233,145,54,22,141,145,228,120,59,205,19,79,57,2,12,137,121,104,79,252,46,174,211,128,33,39,174,210,227,59,139,236,52,235,13,168,114,184,150,144,174,131,130,165,88,83,116,143,153,116,5,160,66,201,91,240,118,78,88,192,106,35,85,190,208,137,220,246,228,27,124,197,75,3,122,142,26,242,23,113,123,241,172,188,102,132,132,231,226,140,132,224,102,131,22,79,126,193,18,96,122,118,125,156,195,171,226,49,46,94,176,184,191,125,77,113,30,152,252,45,113,186,120,18,36,147,194,55,23,186,239,181,116,48,40,7,49,73,198,157,31,233,124,88,155,44,35,124,26,210,152,8,103,15,198,73,179,16,60,251,16,56,68,148,198,230,79,72,35,224,22,95,31,88,81,22,146,170,149,87,106,135,17,119,20,121,240,127,130,141,135,149,107,120,176,126,243,27,145,254,148,10,241,209,180,36,64,36,142,88,51,8,9,32,119,209,174,140,35,201,168,210,122,196,7,59,55,136,42,26,107,235,112,174,140,189,182,255,48,64,14,36,131,125,245,235,87,11,186,149,39,86,221,111,68,193,99,100,20,153,222,5,63,82,205,134,188,228,25,236,105,95,178,12,79,81,7,130,172,69,49,101,164,36,156,80,55,176,213,114,180,36,153,47,100,49,249,194,192,73,215,223,96,228,31,213,10,20,200,242,70,201,60,129,90,68,64,133,160,62,137,229,249,183,85,130,61,254,122,193,54,148,234,226,33,207,126,236,46,88,52,110,97,139,221,134,5,197,207,166,4,68,201,1,220,182,90,234,182,84,180,66,68,154,184,91,95,154,237,139,74,27,194,175,189,31,228,224,230,196,72,233,217,32,229,32,103,167,240,133,166,240,93,250,192,11,228,70,170,47,139,224,170,79,108,223,97,226,157,253,122,169,249,222,156,169,211,202,57,198,229,11,64,153,169,101,82,38,217,96,225,61,200,96,83,102,90,176,36,225,252,239,233,89,107,16,108,150,43,221,86,140,226,170,48,84,213,216,5,64,225,0,92,9,171,89,154,235,107,230,163,40,85,85,87,60,160,145,209,177,245,207,207,48,100,158,12,1,198,204,187,4,58,61,94,59,18,133,236,246,78,150,218,71,225,23,203,49,241,85,214,135,196,98,223,40,52,69,166,63,28,73,82,76,241,240,252,239,231,53,198,4,213,211,11,7,207,224,211,207,83,122,186,146,207,254,30,57,118,212,208,94,191,234,255,205,54,0,178,201,126,169,99,1,58,244,181,169,186,98,217,176,17,169,104,174,245,130,101,173,30,95,41,176,181,187,141,103,105,89,217,40,24,144,134,47,144,64,17,238,42,134,170,84,114,47,18,126,123,154,240,61,115,160,189,103,176,102,35,170,56,40,190,22,57,123,209,53,12,7,172,248,56,128,213,133,176,162,238,222,206,33,231,228,188,136,205,123,121,130,56,232,172,143,252,225,93,76,185,204,221,112,93,104,24,49,31,100,180,26,152,121,129,1,41,121,236,178,177,152,128,197,142,192,130,199,10,77,163,24,95,168,24,173,210,126,253,239,8,154,131,100,170,191,107,129,228,1,149,5,108,57,81,112,161,60,219,25,213,39,101,239,214,102,56,121,11,111,4,85,226,104,219,142,75,227,52,203,168,249,84,240,95,91,209,45,149,209,234,55,173,123,90,133,188,53,229,108,59,2,209,81,147,35,61,213,132,247,130,194,4,103,115,195,120,177,98,152,53,19,69,24,18,180,38,207,78,222,56,104,165,222,176,84,99,22,144,106,20,28,125,104,207,219,160,65,30,9,4,204,196,255,31,223,112,38,76,106,144,211,126,92,107,10,110,156,13,123,236,208,40,219,116,15,133,186,86,246,11,113,141,150,64,171,130,47,168,202,200,160,91,90,163,88,219,42,251,143,34,221,214,209,193,245,246,114,248,12,107,184,240,51,198,166,145,208,13,48,38,91,64,240,217,9,111,238,242,34,201,69,45,89,53,84,186,248,5,93,152,223,15,48,248,52,255,179,105,227,56,69,32,132,114,130,102,234,139,240,155,140,171,122,170,220,108,72,133,95,228,68,23,151,200,83,7,29,86,139,51,23,225,202,228,123,76,71,159,184,93,232,162,163,127,237,158,76,63,105,125,208,238,203,122,29,176,201,81,232,141,238,197,9,195,242,7,72,75,70,177,135,195,160,149,148,138,98,253,144,143,189,96,231,110,162,86,76,179,254,18,239,209,131,76,134,12,116,116,84,136,38,73,170,198,249,253,69,246,40,43,207,84,72,76,162,105,231,199,138,49,5,185,170,88,129,72,153,16,232,114,139,94,208,152,53,178,26,5,251,139,11,97,243,100,230,54,144,38,140,122,82,30,1,45,43,138,216,232,100,29,169,94,76,160,52,39,167,109,38,246,127,152,101,49,125,96,105,176,215,94,232,106,118,240,92,137,93,243,116,94,99,98,246,17,18,102,125,235,162,82,6,7,95,110,167,90,215,164,48,204,187,72,26,81,60,73,209,25,127,172,129,38,118,224,102,80,71,3,5,62,178,209,95,68,145,69,32,24,244,16,229,64,52,8,133,238,190,147,222,204,34,241,42,119,54,57,65,100,205,122,130,122,17,109,158,61,71,61,37,149,144,33,178,175,253,179,13,166,173,44,60,15,242,168,76,125,227,157,229,92,118,193,161,214,193,154,40,78,3,234,68,34,93,227,77,24,70,18,118,204,28,96,144,80,23,142,27,166,179,20,33,208,152,148,92,27,186,171,66,202,68,8,236,52,143,126,238,57,126,114,126,250,130,247,37,82,243,220,218,128,147,99,30,163,11,32,229,154,193,228,135,69,221,54,254,209,112,183,193,20,214,222,68,105,163,250,95,130,196,157,9,61,130,140,227,182,243,199,248,148,114,52,114,38,125,122,201,195,156,55,62,56,88,46,1,122,17,196,140,27,75,60,72,223,36,85,222,200,246,59,122,164,167,65,236,131,96,159,161,43,59,99,11,14,29,155,52,149,16,197,197,136,131,101,23,165,142,192,100,78,226,67,186,85,41,34,62,229,146,239,41,34,113,133,131,119,32,60,172,31,36,222,71,203,228,154,96,29,66,200,90,74,205,205,57,172,229,255,229,236,164,198,102,37,80,89,249,151,158,172,34,5,9,30,23,23,250,96,4,243,141,107,156,235,68,48,239,245,31,113,170,160,231,56,85,8,9,195,233,154,99,76,196,16,108,38,2,113,127,59,114,216,120,226,210,86,89,25,154,100,85,72,40,18,173,155,203,1,254,61,16,173,182,190,254,211,91,240,146,72,13,70,92,251,45,73,127,182,254,181,72,6,6,104,125,87,85,144,82,141,40,227,250,163,170,112,88,138,145,193,231,30,224,241,195,65,90,239,13,58,59,163,109,166,1,95,124,76,75,237,239,67,10,123,197,224,248,50,150,159,161,85,97,145,63,115,223,106,52,165,132,108,76,19,117,232,23,14,155,220,163,130,161,223,80,241,179,86,102,69,108,175,84,168,124,86,224,11,18,239,132,206,90,210,124,89,180,190,255,152,171,141,225,37,129,238,115,93,235,73,168,154,145,97,71,221,243,160,229,35,129,81,73,194,62,118,87,23,184,220,181,120,249,74,158,75,84,158,148,122,132,248,189,19,36,214,119,231,189,12,162,116,75,89,107,228,164,81,0,113,92,176,197,156,192,255,240,7,222,60,160,210,250,54,40,41,51,151,87,36,170,34,102,110,126,236,51,169,134,86,64,216,164,4,238,186,77,65,68,43,169,205,236,187,61,135,63,165,112,18,55,187,194,34,4,149,239,0,45,110,189,115,128,62,223,228,70,209,33,142,106,172,180,56,103,218,194,149,225,86,179,107,197,79,186,228,92,29,224,16,148,254,190,145,161,52,242,196,197,105,166,148,211,115,38,151,224,72,242,8,9,184,51,21,120,159,16,41,195,144,92,150,1,94,18,58,34,178,8,93,230,81,242,48,86,14,104,152,75,155,185,241,121,60,206,78,211,37,133,249,244,31,100,98,35,103,226,85,155,153,33,139,164,8,37,147,34,220,229,222,155,74,106,101,63,28,73,238,0,42,23,165,225,19,233,183,43,254,154,47,57,44,228,3,108,119,203,12,141,214,174,120,213,172,93,234,160,16,152,164,197,71,36,244,66,101,25,76,168,221,153,126,121,0,124,241,172,109,61,69,123,244,154,20,245,200,75,105,8,97,188,196,84,197,165,231,160,172,69,208,240,25,10,65,212,130,242,26,49,169,39,42,3,153,143,255,200,5,177,101,58,156,125,211,41,110,52,2,192,14,139,14,41,200,82,63,91,63,220,213,189,228,164,113,42,255,78,122,250,62,82,139,195,205,125,225,68,56,128,160,227,92,101,110,77,108,190,78,128,92,63,190,172,196,159,28,138,98,242,216,200,163,96,180,100,31,249,97,118,197,42,87,130,239,255,222,50,229,228,197,14,139,158,122,102,224,105,2,202,138,195,197,185,47,211,162,183,23,125,238,101,220,39,177,42,112,163,138,225,209,137,141,113,180,69,204,196,107,109,149,102,180,101,52,94,169,244,242,148,59,235,248,118,45,122,233,120,136,233,151,190,207,93,194,153,37,116,102,71,51,224,20,66,172,85,13,188,172,93,199,180,203,17,56,62,232,138,236,117,131,102,5,93,188,46,2,232,90,185,138,47,77,190,35,168,200,82,131,113,8,30,198,252,26,92,202,170,116,48,235,131,65,70,197,37,3,70,168,131,28,153,161,86,92,98,213,46,139,72,159,216,231,211,171,106,220,87,245,170,42,147,247,165,88,179,227,243,22,172,206,181,250,95,141,102,184,6,229,23,128,205,4,197,240,199,99,2,51,18,221,115,211,247,40,152,116,62,43,193,14,245,87,221,89,168,119,60,192,89,11,225,160,177,186,149,130,155,252,197,235,89,162,60,221,103,35,223,160,49,233,156,144,98,76,38,137,229,253,29,189,69,204,192,147,90,209,32,138,25,153,192,132,107,65,133,130,144,87,42,114,1,79,230,138,87,159,155,251,194,40,189,149,213,3,222,116,241,106,52,58,5,64,249,232,185,121,253,216,43,9,80,92,119,95,65,118,216,47,109,66,184,163,41,207,201,111,61,225,246,154,156,136,79,245,184,250,204,18,71,66,71,193,10,143,161,140,51,144,73,206,208,249,226,55,210,164,132,57,235,130,69,223,139,209,209,172,90,68,18,188,21,42,170,187,183,45,170,119,205,15,60,195,120,243,178,162,249,144,42,110,44,180,81,85,46,19,205,126,240,52,232,213,154,28,42,214,14,136,177,246,50,7,56,126,218,20,162,81,164,255,111,210,108,210,70,93,109,216,91,125,198,228,4,15,33,192,135,174,52,64,37,212,143,228,130,166,25,240,43,42,117,195,187,175,145,17,114,155,95,129,46,122,78,40,18,156,201,142,112,142,146,228,69,47,108,176,51,21,85,244,204,165,37,202,235,45,139,225,84,27,138,141,221,120,16,43,213,98,175,167,26,162,127,136,251,50,193,126,39,208,61,207,245,235,232,102,106,110,145,75,114,175,8,90,253,104,120,180,120,101,229,58,254,195,106,47,33,213,84,5,74,110,187,213,209,82,66,148,8,249,29,107,249,87,18,220,189,106,216,224,125,122,47,177,117,101,103,51,34,52,119,207,58,185,212,68,118,229,246,8,60,210,120,217,5,106,191,169,34,0,45,250,39,157,96,159,35,146,120,204,251,83,216,213,134,120,213,105,145,79,249,134,227,55,99,225,190,108,105,137,231,201,34,168,204,123,33,108,87,162,172,128,228,128,240,93,52,106,76,195,247,183,228,96,155,97,73,152,23,116,132,3,111,47,102,55,161,143,70,4,165,113,131,179,91,158,98,107,27,32,128,45,224,121,181,191,105,114,26,89,242,4,202,117,197,143,1,154,227,96,65,197,240,6,6,58,178,107,117,155,6,212,194,14,190,185,168,132,182,45,200,222,39,246,155,232,29,99,94,221,218,195,17,234,204,20,62,6,82,26,214,51,153,187,142,177,235,86,41,26,78,199,208,223,224,164,220,236,201,182,156,254,119,228,135,82,8,250,17,173,102,89,248,247,70,103,158,103,101,229,170,180,231,70,172,65,172,52,64,206,161,24,164,56,198,174,72,223,150,86,37,82,141,242,190,190,222,17,143,18,74,93,143,153,137,122,135,52,240,109,122,59,121,216,245,233,154,162,17,8,193,24,30,79,164,113,142,52,71,42,81,31,6,20,97,2,50,236,216,128,143,80,96,69,125,70,228,90,222,204,155,228,208,69,75,142,123,101,77,193,125,97,249,2,91,179,141,41,41,17,227,7,119,56,31,109,53,208,213,16,200,244,226,227,53,93,214,48,148,123,114,66,141,27,208,172,67,250,232,150,236,202,244,248,250,50,162,152,174,224,204,59,149,82,86,225,205,232,164,167,164,5,95,238,135,238,0,170,110,184,227,24,26,37,140,48,141,7,154,68,30,37,158,65,143,249,227,23,33,220,254,202,197,231,238,199,235,179,60,170,235,106,14,230,210,122,42,115,23,45,153,120,239,233,218,74,252,219,66,245,6,229,8,250,222,86,145,19,186,215,71,139,212,249,33,212,42,141,164,215,105,178,78,237,219,137,137,174,39,77,180,142,107,172,30,53,243,90,216,107,223,223,222,156,175,61,200,171,33,183,180,122,169,2,162,82,34,102,117,18,255,124,66,188,220,123,151,109,1,86,218,2,0,248,142,60,117,157,251,242,78,9,225,197,167,154,191,82,100,23,54,40,183,14,156,37,166,9,207,160,87,55,86,152,212,147,234,35,57,67,56,156,148,217,209,17,190,232,125,20,43,240,187,224,249,156,58,5,158,49,106,77,244,247,174,171,32,54,134,110,183,222,233,71,97,78,19,219,8,82,35,114,70,240,201,50,195,192,139,83,72,116,151,137,22,201,211,190,239,126,227,199,107,111,209,70,136,246,34,218,42,229,57,240,204,114,153,199,170,249,239,21,160,37,200,134,91,15,94,143,123,44,105,15,250,206,8,126,110,194,119,8,192,7,23,83,76,246,170,175,2,69,143,235,154,73,112,69,66,214,41,116,163,77,48,209,168,168,62,168,43,6,82,185,118,70,246,234,248,238,99,91,77,51,60,16,171,168,7,74,246,127,69,209,130,218,126,196,95,133,63,78,10,111,252,112,219,86,228,208,109,230,192,180,42,96,24,86,222,182,145,67,207,214,115,131,31,166,108,165,189,190,106,177,115,189,79,196,227,160,223,8,38,25,121,137,35,218,226,142,97,36,3,206,74,12,30,239,31,7,36,167,94,128,80,179,155,152,23,231,235,59,85,142,100,36,159,216,25,183,197,156,78,220,116,128,43,38,57,167,197,251,69,101,147,25,203,49,252,125,75,79,72,68,215,196,208,227,165,194,48,238,38,179,26,173,167,130,198,120,166,190,135,69,241,9,141,97,91,11,164,203,211,156,193,73,143,140,35,145,71,139,120,54,197,108,128,17,231,60,88,167,234,129,151,112,99,78,108,174,229,205,195,168,116,195,142,202,149,158,116,8,8,169,126,59,54,122,121,163,77,234,160,70,110,42,71,187,133,26,212,119,233,111,99,155,248,247,16,152,225,174,135,169,8,30,60,184,76,228,194,177,24,50,187,35,37,231,60,30,62,123,250,64,21,145,58,34,243,227,135,51,60,193,136,250,231,208,67,124,115,245,1,201,195,32,24,181,13,154,49,30,226,108,35,78,117,157,182,56,8,28,204,20,220,226,141,144,84,208,173,26,104,66,250,72,140,183,192,181,234,145,249,20,79,91,61,20,219,193,18,183,46,202,84,208,185,111,87,129,21,233,251,99,67,124,8,171,33,38,156,79,68,127,48,243,219,166,182,28,19,95,81,156,114,98,125,77,70,156,18,188,56,172,197,161,248,132,144,147,189,84,129,138,180,189,211,79,35,220,70,19,246,197,247,148,147,138,103,49,248,117,11,9,171,9,216,7,13,106,174,205,85,1,152,220,134,247,46,183,206,31,230,50,121,219,113,149,235,16,97,49,124,4,62,83,50,129,103,143,3,231,58,237,174,20,59,38,62,101,35,84,63,84,68,94,67,52,223,40,72,131,218,169,82,111,52,75,30,208,231,82,48,249,211,117,39,168,122,60,55,149,134,22,252,34,125,83,232,146,43,57,175,19,183,198,231,229,40,224,86,129,253,71,167,20,44,161,119,66,102,123,127,226,117,63,202,118,141,210,203,204,66,31,253,234,73,46,168,203,120,87,37,37,151,182,123,178,93,17,66,183,239,124,230,36,189,43,164,31,134,156,153,205,93,151,167,31,235,46,199,35,6,147,242,91,199,40,39,197,18,171,54,0,82,102,60,249,228,191,20,116,99,219,16,47,254,189,134,221,173,2,238,3,136,22,255,255,202,22,178,142,31,56,244,77,73,1,85,61,178,184,121,78,219,98,209,26,40,117,112,62,66,192,223,108,90,91,191,17,22,137,247,205,27,240,215,223,22,138,30,106,125,206,224,218,95,30,156,30,124,43,193,168,163,126,1,254,61,210,151,165,4,239,3,105,232,252,45,109,124,99,49,222,35,136,57,7,18,157,154,137,144,209,24,112,204,41,31,20,36,61,211,149,181,237,112,141,181,117,196,0,206,155,156,33,32,253,68,143,208,121,33,247,26,82,69,98,216,77,85,229,66,170,177,201,216,133,86,205,72,153,206,216,125,241,226,91,124,95,12,156,65,217,147,204,10,138,206,83,174,128,161,164,243,20,93,46,153,104,176,57,77,103,229,179,93,37,81,153,132,221,237,76,30,212,65,177,100,111,29,171,172,177,71,245,162,110,26,144,79,37,95,202,5,109,54,135,194,127,142,100,194,113,2,246,221,31,72,142,77,241,189,172,198,221,124,220,217,207,238,115,119,100,112,242,202,62,162,49,226,224,157,49,228,36,85,232,253,153,22,242,3,94,39,220,154,142,133,119,158,145,168,123,161,172,216,109,159,254,203,92,4,76,40,181,22,254,243,23,94,110,75,196,147,225,124,126,241,27,73,195,72,6,9,81,41,130,77,85,70,190,84,89,224,255,195,182,116,137,12,172,167,240,107,219,142,194,127,100,46,64,15,211,81,106,37,164,65,95,123,82,163,201,66,73,37,105,242,71,32,219,76,49,90,104,144,130,55,99,248,75,146,137,107,206,108,250,154,81,113,198,228,226,234,46,155,113,86,208,76,171,60,233,220,154,128,81,244,46,231,70,86,163,32,63,246,92,188,69,123,236,0,228,107,12,208,128,167,149,131,104,200,128,79,75,163,201,178,211,16,145,129,46,170,22,43,199,238,246,250,200,153,245,109,171,157,183,176,3,93,205,76,200,181,234,89,100,125,94,162,18,139,26,129,211,255,209,124,226,26,247,99,132,142,156,5,117,24,177,39,246,18,142,157,50,80,251,30,216,16,93,114,244,39,249,133,254,186,105,231,111,163,214,207,21,29,6,3,206,123,150,102,92,191,12,159,20,149,183,175,89,35,168,90,60,70,246,48,41,81,123,97,88,182,218,23,203,101,103,106,12,42,81,42,104,48,170,65,237,142,174,119,81,118,83,124,123,89,99,159,108,133,35,73,89,222,225,180,14,131,205,150,141,160,234,140,177,214,111,114,86,215,94,108,158,53,230,82,207,238,26,136,118,118,24,229,111,209,187,81,29,251,232,157,2,20,220,184,143,228,252,26,62,19,216,67,130,68,127,115,222,9,188,190,101,181,130,144,87,150,94,161,28,55,226,126,97,99,61,172,227,13,22,153,196,196,8,116,131,196,67,152,143,198,218,33,75,130,155,241,216,118,213,175,23,5,78,74,85,181,104,234,207,57,34,24,12,31,181,39,85,244,48,34,192,64,175,205,93,175,67,52,64,187,51,184,180,66,116,22,255,209,249,7,92,63,0,107,158,65,170,33,231,123,63,81,77,4,62,43,57,82,105,199,2,6,21,158,28,147,8,77,50,135,171,247,245,162,93,225,119,250,212,120,108,247,233,132,239,0,223,207,21,197,177,225,168,188,87,113,33,58,56,90,41,82,179,81,192,124,7,163,75,187,177,58,232,159,235,91,233,147,100,43,248,40,110,200,229,116,169,243,97,228,81,194,168,27,163,21,169,10,152,21,195,20,32,13,163,28,224,204,67,177,196,135,51,51,73,189,128,119,184,50,138,43,82,25,161,149,203,150,141,139,47,33,101,20,113,112,16,106,44,141,44,189,191,104,110,180,245,239,150,166,128,180,82,129,202,253,179,203,87,49,12,219,137,8,157,40,206,171,145,157,148,15,178,135,139,126,34,24,120,25,186,2,251,149,19,121,19,252,165,55,0,31,24,28,88,89,7,115,9,250,178,155,60,27,56,210,13,53,155,61,19,37,238,160,120,81,146,111,34,65,152,148,45,250,69,190,170,29,218,250,247,38,222,91,22,167,184,203,219,225,30,132,169,176,150,248,207,127,199,128,149,100,248,217,10,225,123,165,10,165,203,40,168,50,77,93,129,118,214,100,153,107,155,224,32,246,78,46,115,35,205,109,18,16,88,26,136,94,20,69,53,125,14,248,11,93,230,61,141,43,178,88,73,237,73,6,251,173,113,211,237,147,100,24,134,119,66,181,84,136,203,51,4,56,60,184,105,41,86,181,239,62,156,106,94,60,149,111,94,242,166,88,24,152,14,209,230,193,167,208,48,178,242,205,82,88,252,35,106,215,66,125,153,33,134,124,156,110,45,148,144,15,27,5,49,156,69,136,229,223,115,40,114,57,56,98,48,235,150,141,91,13,190,133,195,166,133,101,195,140,226,89,97,232,81,30,184,153,94,140,93,161,205,57,221,112,116,200,160,227,152,37,3,11,38,26,63,0,79,3,54,117,115,118,204,40,204,106,141,138,67,19,93,85,77,222,18,111,167,220,114,16,10,135,24,137,16,252,28,149,161,87,155,31,237,22,21,200,73,132,55,66,15,63,92,176,223,131,250,59,234,213,136,101,169,233,215,67,124,30,27,34,56,233,238,53,104,37,46,56,196,132,182,49,146,24,90,218,220,80,25,39,4,239,19,169,171,18,7,84,226,85,156,156,77,184,254,118,216,152,242,241,141,135,127,198,222,21,61,139,240,145,121,208,209,119,28,169,121,151,46,149,233,113,227,200,90,155,72,212,150,62,168,116,251,254,125,173,197,94,162,111,103,194,48,57,137,9,200,217,73,224,48,182,61,210,97,115,46,79,182,246,242,188,55,110,243,96,143,241,163,143,30,152,194,154,108,66,152,23,106,151,129,143,33,52,50,74,146,86,42,189,118,49,114,80,74,197,20,20,40,231,201,115,26,236,205,109,210,235,60,21,133,160,28,213,235,7,162,187,234,130,164,49,137,29,171,161,172,107,247,210,135,240,237,151,207,117,209,190,247,134,26,86,145,161,27,247,106,19,81,63,74,102,117,98,126,231,212,135,98,103,188,103,183,162,144,117,155,40,35,157,253,56,55,19,227,160,212,207,147,144,4,23,152,195,157,49,58,184,110,50,61,61,189,198,100,98,165,113,30,128,233,25,210,121,24,156,149,186,167,228,51,24,210,60,169,122,34,181,134,250,203,193,154,71,157,217,59,102,67,150,72,255,44,25,89,32,24,3,105,181,61,153,54,114,148,221,179,45,53,126,70,145,173,27,124,41,2,171,199,234,187,130,147,222,57,104,47,6,146,76,184,179,36,161,203,35,238,215,246,22,42,54,56,32,64,221,71,110,105,188,143,223,141,105,33,80,118,152,131,28,46,76,150,6,180,184,243,221,108,71,196,11,107,200,47,212,197,94,173,127,139,253,47,234,57,163,158,249,187,38,136,136,55,12,82,55,234,150,255,80,14,37,35,228,136,59,110,18,98,188,32,208,61,19,77,33,14,186,197,233,204,48,33,235,237,185,52,239,184,253,123,229,205,2,178,88,200,95,231,117,98,30,101,11,134,83,165,210,149,142,206,121,29,122,62,221,214,193,160,23,31,111,84,8,112,153,136,224,221,205,111,202,187,41,164,38,99,37,2,102,92,12,185,219,105,2,192,207,236,47,103,126,167,66,165,166,5,63,113,212,51,30,64,190,90,185,37,229,94,67,77,242,150,44,8,130,15,173,125,120,121,248,115,133,13,190,125,129,212,241,144,78,120,182,62,21,65,5,21,238,33,124,126,240,86,134,219,233,71,6,9,166,181,4,110,144,84,222,44,152,171,2,9,145,75,254,3,213,146,120,109,49,250,137,101,66,12,15,144,215,187,158,191,148,85,50,91,170,61,252,99,65,60,239,226,219,103,17,112,244,153,138,243,96,184,220,10,205,18,138,102,80,1,1,65,149,1,205,149,105,80,45,17,148,31,96,146,78,178,250,67,231,98,191,191,98,237,103,118,103,67,213,2,123,189,76,183,5,98,209,203,85,97,215,154,128,252,248,91,223,66,13,223,85,180,244,45,17,73,64,128,88,90,26,99,20,242,22,68,222,73,94,208,187,36,238,233,113,54,62,182,76,226,117,139,205,200,65,153,147,48,163,236,170,209,138,231,244,75,202,131,252,187,58,19,76,229,252,179,108,157,14,228,227,82,207,157,49,89,79,40,85,188,68,241,104,123,246,170,69,107,189,73,79,213,231,6,249,77,99,78,232,84,18,179,171,250,88,141,220,43,126,136,32,98,131,186,251,139,71,50,170,24,9,191,248,131,130,24,100,156,67,14,233,212,125,192,192,56,83,155,177,84,22,66,93,199,7,219,237,190,197,229,114,22,179,154,66,111,122,180,3,124,200,190,68,118,129,70,44,204,192,130,139,103,45,100,1,134,77,18,113,83,31,74,195,158,161,112,204,225,248,233,184,193,34,51,159,179,113,103,66,19,61,6,254,50,49,210,28,138,195,146,213,29,14,20,199,6,181,140,95,130,33,77,197,24,228,71,9,248,4,13,141,87,161,247,123,85,193,29,235,138,65,162,177,232,144,121,92,87,177,8,150,34,165,176,184,2,22,211,231,64,87,230,190,201,46,148,147,78,90,98,50,49,11,185,199,77,227,254,4,54,201,125,17,148,114,240,156,1,165,185,148,152,59,211,76,175,202,105,128,186,158,184,121,9,136,143,96,108,159,214,163,107,111,94,48,102,220,233,197,21,158,171,238,103,33,169,171,135,76,44,74,233,209,8,148,69,252,123,133,143,49,141,76,87,240,191,128,247,172,147,232,92,89,131,6,119,160,126,190,73,207,187,182,22,84,198,64,156,46,42,190,249,192,7,73,85,247,106,186,24,94,213,94,81,212,30,112,116,137,238,117,118,85,151,248,245,103,175,8,12,252,52,42,46,4,165,200,244,84,106,29,127,31,130,1,19,148,121,31,65,46,48,73,183,1,232,135,243,111,214,130,56,226,204,34,204,95,84,122,10,181,31,131,230,231,54,97,210,221,169,213,86,119,204,192,35,202,124,89,202,117,148,243,51,121,163,51,112,168,129,154,161,68,97,12,229,93,121,250,247,53,57,13,236,165,63,241,58,35,5,171,67,159,243,213,8,133,37,78,151,113,28,24,92,32,61,93,170,152,192,91,4,25,141,42,124,153,248,172,40,152,189,188,166,146,93,239,171,10,92,67,193,135,112,11,100,73,128,210,146,207,153,96,218,84,163,62,11,255,155,228,229,59,96,168,87,56,64,208,186,235,128,12,155,144,92,21,199,147,245,47,221,108,62,2,160,187,59,50,114,105,142,191,204,128,57,93,238,185,70,82,148,151,226,119,81,219,220,228,182,158,168,124,192,83,252,178,20,230,141,12,29,187,194,93,27,34,41,168,68,91,9,253,10,65,243,52,173,22,126,105,167,14,100,121,155,218,92,232,127,88,133,5,252,188,222,95,22,252,179,112,70,21,156,231,211,136,63,18,13,213,78,219,82,217,44,4,8,153,99,22,129,17,107,199,27,36,36,185,32,91,40,157,179,186,231,192,149,79,134,95,120,168,131,58,228,37,33,156,68,138,113,54,146,148,32,153,215,52,6,35,0,92,148,71,50,117,250,173,175,237,115,27,173,115,6,45,220,129,231,146,21,239,101,132,17,23,234,251,10,167,227,56,20,1,249,76,185,233,134,229,114,243,208,16,36,95,214,215,103,177,5,2,128,33,48,12,50,193,105,8,110,196,196,19,62,132,122,112,55,47,205,72,249,158,137,181,53,188,103,240,119,251,192,252,40,72,94,39,42,49,180,249,102,4,37,136,179,34,248,168,55,148,188,4,171,208,22,194,79,217,3,151,176,55,210,40,73,85,234,90,184,248,100,82,156,12,208,242,142,92,201,29,204,156,162,145,159,231,61,124,189,136,145,219,218,232,117,163,162,40,189,13,58,66,73,96,74,119,156,7,156,74,103,241,129,210,117,216,27,216,229,25,179,143,53,51,186,29,219,157,199,3,97,202,98,130,93,186,141,60,251,122,205,243,223,59,143,183,91,195,224,247,84,124,196,210,240,168,210,179,26,167,19,174,155,52,182,187,138,149,228,123,42,229,152,171,64,123,30,227,52,203,249,65,40,73,180,159,36,250,9,98,173,30,251,115,213,10,111,200,206,159,100,244,29,69,223,117,28,104,223,18,63,146,59,19,198,49,181,216,52,206,135,203,255,41,78,28,161,161,86,16,218,83,245,125,176,138,16,216,112,158,45,160,8,230,23,51,6,208,27,252,50,189,185,164,19,251,139,155,45,0,229,59,98,240,236,49,17,71,237,146,157,63,11,19,50,100,165,31,145,118,46,146,125,87,248,91,127,206,149,173,195,173,177,110,83,9,143,207,132,41,79,14,219,77,19,246,21,169,185,141,127,123,234,197,230,129,18,98,20,243,196,135,100,134,178,220,98,26,53,233,182,129,160,238,126,29,68,81,100,216,20,245,181,194,91,187,179,43,249,214,86,72,68,174,75,71,102,171,20,57,119,7,24,170,80,239,230,189,122,21,61,110,103,109,2,237,191,154,142,166,195,46,201,41,217,206,31,23,68,86,107,88,187,32,213,147,43,246,32,28,47,237,210,55,106,248,154,238,28,213,224,22,64,89,35,116,241,234,113,176,255,5,21,127,156,198,171,146,127,19,255,101,83,34,176,52,60,84,109,47,110,249,121,16,195,50,92,71,139,223,196,77,179,184,172,48,248,37,145,52,237,54,162,51,117,160,55,101,88,19,228,57,167,226,158,62,152,173,203,133,237,236,111,168,26,69,203,187,130,14,6,234,255,179,106,168,1,151,105,188,202,178,186,56,203,68,210,236,235,232,139,195,29,151,162,196,237,40,233,9,160,127,97,181,175,83,194,83,143,183,225,35,196,84,116,163,143,21,17,179,20,68,6,158,93,170,57,162,144,142,99,137,96,165,199,12,38,62,124,225,151,26,181,32,127,91,164,113'

console.log("kukskakdksdakda")
// console.log(de_crawl_data(linsongx1,'iKtYrbkDicIStyHsUBTnkg=='))

console.log("linsongx")
// console.log(de_crawl_data(linsong,'VQYiecdq7TaXbMOeYMyP7w=='))
console.log("linsongx")
// console.log(/*  */crawl_data('Lsp8AqQB9QQK32tB/KQeJw=='))
// console.log(crawl_data('Lsp8AqQB9QQK32tB/KQeJw==').buffer)
// console.log(crawl_data('jNN7wCko7pYnmobZU/6ITg==').length)
// console.log(N,x,void 0,x)



function request_post(url,key,TIMESTAMP) {
    data = crawl_data(key)
    console.log(data)
    var options = {
        hostname: 'servicewechat.com',
        port: 443, //端口号 https默认端口 443， http默认的端口号是80
        path: url,
        method: 'POST',
        headers: {
            'Connection': 'keep-alive',
            'Content-Length': data.length,
            'Content-Type': 'application/octet-stream',
            'Host': 'web-001.cloud.servicewechat.com',
            'Origin': 'https://www.ibox.art',
            'Referer': 'https://www.ibox.art/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
            'X-WX-COMPRESSION': 'snappy',
            'X-WX-ENCRYPTION-TIMESTAMP': TIMESTAMP,
            'X-WX-ENCRYPTION-VERSION': 2,
            'X-WX-LIB-BUILD-TS': 1655460325335,
            'X-WX-REQUEST-CONTENT-ENCODING': 'JSON',
            'X-WX-RESPONSE-CONTENT-ACCEPT-ENCODING': 'PB, JSON',
            'X-WX-USER-TIMEOUT': 30000,
        },//伪造请求头
        
    };
    // console.log(options)
    var req = https.request(options, function (res) {
 
        // var json = ''; //定义json变量来接收服务器传来的数据
        var array = [] //定义数组来接收服务器传来的数据
        console.log(res.statusCode);
        console.log(res.headers)
        //res.on方法监听数据返回这一过程，"data"参数表示数数据接收的过程中，数据是一点点返回回来的，这里的chunk代表着一条条数据
        res.on("data", function (chunk) {
            // var array  = new Uint8Array(new ArrayBuffer(chunk.length));
            a_l = array.length
            for (let i=0; i < chunk.length ; i++){
                var value = chunk[i]
                array[a_l] = value
                a_l +=1
            }
            // json += chunk.toString(); //json由一条条数据拼接而成

        })
        //"end"是监听数据返回结束，callback（json）利用回调传参的方式传给后台结果再返回给前台
        res.on("end", function () {
            // var array  = new Uint8Array(new ArrayBuffer(json.length));
            // for (let i = 0; i < json.length ; i++){
            //     var value = json.charCodeAt(i)
            //     array[i] = value
            // }
            // console.log(json.length);
            array_int8 = Uint8Array.from(array)
            console.log("请求返回原生数据")
            console.log(array);
            console.log(array_int8);
            fs.writeFileSync('ibox_data.json',array_int8.toString())
            x = new Uint8Array(base64ToArrayBuffer(key))
            console.log('返回数据')
            new_array_int8=R(array_int8,x,void 0,x)
            console.log(R(array_int8,x,void 0,x))
            new_buffer = new Buffer.from(new_array_int8.buffer)
            console.log(new_buffer)
            console.log(new_buffer.toString())
            // fs.writeFileSync('ibox_data.json',new_array_int8)
        })
    }, )
    // console.log(json)
    req.on("error", function () {
        console.log('error')
    })
//这是前台参数的一个样式，这里的参数param由后台的路由模块传过来，而后台的路由模块参数是前台传来的
//    var obj = {
//        query: '{"function":"newest","module":"zdm"}',
//        client: '{"gender":"0"}',
//        page: 1
//}
    req.write(data); //post 请求传参
    req.end(); //必须要要写，
}

url = '/wxa-qbase/container_service?token=58_5cz6GPNaRlT38aqqGVyFnnwjX4cJ4f0u9ayaKhrFu4s7TdOna1cVP1U3WjyvZP5w090C3kUUTgtBg1Pk'
key = '/GAS9vJ1vwaYnzLC5kYmpA=='
TIMESTAMP = '1657027153432'
// request_post(url,key,TIMESTAMP,R)
// request_post(crawl_data('6pIrsLDUX/uWDHoBv/MDlg=='),R)
// R(request_post(crawl_data('Qc2LyiG3HQcWRW9371N1lg==')),x,void 0,x)
// console.log(new Uint8Array(base64ToArrayBuffer(key)))