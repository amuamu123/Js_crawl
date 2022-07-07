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

function de_crawl_data(data,key){
    // key = 'IcUrF6yQJLBzfQrS0oPsjA=='
    buffer = Buffer.from(data);
    var array = new Uint8Array(buffer);
    a =new Uint8Array(array.buffer)
    x = new Uint8Array(base64ToArrayBuffer(key))
    return R(a,x,void 0,x)
}
linsong = 'efbfbd33efbfbd0befbfbdefbfbdefbfbdefbfbd0b04c6a7d29a0fefbfbd0774efbfbd21efbfbd1a7044146e082aefbfbd187a5a1d0c1aefbfbd43efbfbd27efbfbdefbfbd77efbfbdc38eefbfbd6befbfbd5fefbfbd5d7defbfbd30d3a104efbfbdefbfbd04efbfbdefbfbd591befbfbd545659221116efbfbdefbfbd65efbfbdefbfbdefbfbd4b6cefbfbd6c6d16efbfbd29efbfbdefbfbd5517efbfbdc495534d38317a404b5d3befbfbd2d4aefbfbd4f6933efbfbd28efbfbdefbfbdefbfbdefbfbd6d770cefbfbd3c70efbfbdefbfbd7b53efbfbd5b1fefbfbdefbfbd45efbfbd6aefbfbd57143e7371efbfbd17efbfbdefbfbdefbfbdefbfbd34efbfbd6eefbfbdefbfbd106953efbfbdefbfbdefbfbd14efbfbdefbfbd7966efbfbd1c7361efbfbd066f68593cefbfbd5c04efbfbd14efbfbd57566006efbfbd0eefbfbdefbfbdefbfbdefbfbd4defbfbdefbfbd3262efbfbd1aefbfbdefbfbdefbfbd0526efbfbdefbfbd72efbfbdefbfbd0e575d66efbfbd1a40446c3befbfbdefbfbd6253efbfbdd8a4efbfbd3a0413efbfbd40efbfbdefbfbd5253efbfbdefbfbd4653efbfbd3760efbfbd2f61efbfbd42efbfbdefbfbdefbfbdefbfbdefbfbd1a226c780a782842efbfbdefbfbdefbfbd22efbfbdefbfbdefbfbdefbfbd4848efbfbd62efbfbdefbfbd27efbfbd774aefbfbdcea8efbfbdefbfbd15efbfbd10efbfbdefbfbd780161efbfbd13efbfbdefbfbdd4b01871efbfbd13efbfbd1f037fefbfbdefbfbdc3a20befbfbd394e46efbfbd79efbfbd3a1aefbfbd60efbfbd376d36efbfbd785befbfbdefbfbd6f1befbfbd50efbfbdefbfbdefbfbd474befbfbd6156efbfbdefbfbdefbfbd70efbfbd4b63efbfbd46010aefbfbd17c8b3efbfbdefbfbdefbfbd6125424dc98befbfbd34696a43420c7aefbfbd2f13efbfbd1f447befbfbd5cefbfbdefbfbd3f6929efbfbd2defbfbd7aefbfbdefbfbd7a79efbfbd7fefbfbdefbfbd37efbfbd04efbfbdefbfbdefbfbd5d27efbfbd42734406efbfbd1559efbfbddbb122efbfbd1befbfbd1234efbfbdefbfbdefbfbdefbfbd34096d0c32efbfbdefbfbdefbfbd19efbfbd6befbfbd6eefbfbdefbfbdefbfbd5e6ec985efbfbd72efbfbd03efbfbdefbfbd25efbfbd4aefbfbd0defbfbddb97247873efbfbd3305efbfbd2938efbfbdefbfbd0036efbfbd05efbfbd2f64efbfbdcd99efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd66efbfbdefbfbdc7a62befbfbdefbfbdefbfbd11efbfbd1b5962efbfbd3f0b31efbfbd37efbfbd3eefbfbdefbfbd74d9b8efbfbd19efbfbd674951efbfbd2fefbfbd3befbfbdefbfbd22efbfbdefbfbdefbfbd26efbfbdcc9befbfbdefbfbdefbfbdec868eefbfbdefbfbd5f3befbfbdefbfbddebdefbfbdc5bcd9b96476efbfbd394b4c5223187d0e1f3f52efbfbd50efbfbdd089efbfbdefbfbd7d32efbfbdc3af73404b530e605e2267efbfbdefbfbd7defbfbdefbfbd62efbfbd0eefbfbd34efbfbd512e36513b2befbfbdefbfbd24157cefbfbdcdaaefbfbd4ed79eefbfbd4a41efbfbd7a3704564fefbfbd02efbfbdefbfbdefbfbdefbfbdd798efbfbdefbfbdefbfbd4a74583defbfbd065116efbfbdefbfbd5aefbfbdefbfbdefbfbd09efbfbd01efbfbdefbfbd55efbfbdefbfbddeadefbfbd356cefbfbd555defbfbd3fefbfbd6aefbfbdefbfbd4eefbfbdc7a4561276efbfbd6d1330efbfbd70efbfbd1b65efbfbd41efbfbd4b0befbfbdcca4efbfbdefbfbdefbfbd06efbfbd50efbfbdefbfbdefbfbdefbfbd5927d690efbfbd1144efbfbd6e6befbfbdefbfbd03e892b2efbfbdefbfbd36efbfbdefbfbdefbfbd481039efbfbdefbfbdefbfbdefbfbdefbfbd0d6defbfbdefbfbd6c1aefbfbd0e7c66efbfbdefbfbdefbfbdefbfbd276d46755e456f0eefbfbd1d476eefbfbd1e532f10efbfbd4a782f7b0f4cefbfbdefbfbdefbfbdefbfbd5850efbfbd2fefbfbd1801efbfbd23efbfbdefbfbd6d170cefbfbd2773ce8eefbfbdefbfbd141c024809674aefbfbdefbfbdefbfbd04efbfbdefbfbdefbfbdefbfbdefbfbd75efbfbd080fd18defbfbd5aefbfbd78efbfbdefbfbd6befbfbdefbfbdefbfbd7fefbfbdefbfbd1d10efbfbd7266efbfbd01efbfbdefbfbdefbfbdefbfbd5264efbfbd3fefbfbdefbfbdefbfbdefbfbd58efbfbdefbfbd6befbfbdefbfbd56efbfbd3900555717565eefbfbd247155efbfbd41efbfbd50efbfbdefbfbdefbfbdefbfbd1e5defbfbd712aefbfbd69efbfbdefbfbdefbfbd0c15efbfbd396a7e76541d44efbfbd08efbfbdefbfbd5cefbfbddabc7440efbfbdefbfbdefbfbd18dead69efbfbd1212efbfbdde947b21efbfbdefbfbd0449efbfbd0befbfbdefbfbd163b4a01efbfbdefbfbd3aefbfbdefbfbd1befbfbd3359efbfbdefbfbd7438efbfbd750c14efbfbdefbfbd196f5aefbfbdefbfbd116a69efbfbdefbfbd5741030eefbfbd1cefbfbd55efbfbd7409efbfbdefbfbd070668130719efbfbdd6beefbfbdefbfbdefbfbd313fefbfbd34efbfbd03efbfbd63615defbfbdefbfbd50efbfbdefbfbd12efbfbd09efbfbd1335135518516822efbfbd245a72efbfbdefbfbd60efbfbd672e4fd8a9d2a272dbbf57486fefbfbd0e685cefbfbd64efbfbd19efbfbdefbfbdefbfbd48efbfbdefbfbd27efbfbd5defbfbdefbfbde69a93efbfbdefbfbd75efbfbd4546437defbfbdefbfbd12c786efbfbd67efbfbdefbfbd16efbfbdefbfbd40efbfbd7624efbfbdd58a5863efbfbdefbfbd66cfa5091b741146efbfbd7eefbfbd2defbfbd144a34efbfbd6147efbfbd0878efbfbd3778efbfbd25efbfbdefbfbdefbfbdefbfbd6cefbfbd67efbfbd54efbfbd60efbfbdefbfbdefbfbdefbfbdd9a65636efbfbd1c67efbfbdefbfbd0eefbfbdd295efbfbdefbfbd2f6c6eefbfbd323b6eefbfbd52efbfbd3d3befbfbd17efbfbdefbfbd216d5a677befbfbd1d19370aefbfbdefbfbd3dd68defbfbdefbfbd7b06efbfbd3e26efbfbdefbfbdefbfbd60efbfbd6defbfbd62efbfbd7cefbfbd7eefbfbdcd9defbfbdefbfbdefbfbd6eefbfbdefbfbdefbfbdefbfbdefbfbd6c2aefbfbdefbfbd5aef9aa8e6b2b4efbfbd3c0b1aefbfbdd49123dc88ca91efbfbdefbfbdefbfbd793befbfbd1defbfbddd8559efbfbd04efbfbd092befbfbd30efbfbdefbfbd32efbfbd261ae68696efbfbdefbfbdd886efbfbd6eefbfbd6e0cefbfbdefbfbd65efbfbd64424b61efbfbd333befbfbd201d26efbfbdefbfbd73137e2b242a78217b6a6031efbfbdefbfbd6cefbfbd7defbfbdefbfbd1f7fefbfbd00efbfbd4ddd856defbfbdefbfbd0817efbfbdefbfbd621befbfbdefbfbd62efbfbdefbfbdefbfbd5a00c6b1cc97efbfbdefbfbd69efbfbdefbfbdefbfbd71efbfbd4cefbfbdefbfbdefbfbd675cefbfbdefbfbd6ddab5efbfbd0defbfbd30efbfbd16efbfbd0b1fefbfbdefbfbd78257befbfbd122aefbfbd4eefbfbdefbfbdefbfbd55efbfbdefbfbd4fefbfbd03efbfbd1eefbfbdefbfbd75090eefbfbd19efbfbdefbfbd1fefbfbd27efbfbdefbfbdefbfbd18efbfbdefbfbdefbfbdefbfbdefbfbd0e126b6cefbfbd1fefbfbdefbfbd2a1befbfbd17efbfbdefbfbd6cefbfbdefbfbd2defbfbd37efbfbd67efbfbd19efbfbdefbfbd3a49efbfbdefbfbdefbfbdefbfbd0fefbfbdefbfbd09efbfbdefbfbdefbfbdefbfbd6d1aefbfbdefbfbd3a28efbfbdefbfbd7275671a6fefbfbdd4a4efbfbd273a63efbfbd46efbfbd252857efbfbd49e49cabefbfbdefbfbd54efbfbd4eefbfbd29efbfbdefbfbdc8bfefbfbd2befbfbdefbfbdde937e70efbfbd0aefbfbd3678efbfbd67efbfbd57efbfbd5107efbfbd52efbfbdefbfbdefbfbd4befbfbdefbfbdefbfbd57efbfbdefbfbd01efbfbd5ed08b21efbfbd24590cefbfbddbb3cc9807d9adefbfbd757a25efbfbdefbfbdefbfbdefbfbd1befbfbd285befbfbd0aefbfbd54efbfbdefbfbd053177efbfbd54efbfbdefbfbdefbfbdefbfbdefbfbd230cefbfbd004befbfbdefbfbd26efbfbdefbfbd47efbfbd5c504604efbfbd6a5a1c515a20efbfbd5befbfbd05efbfbdefbfbd7d050b2d314a2043efbfbdefbfbd5fefbfbd6aefbfbdefbfbdddabefbfbdefbfbd11efbfbdefbfbd32efbfbdefbfbdefbfbd7247efbfbd0540efbfbdefbfbd74efbfbd17efbfbdefbfbd311752efbfbdefbfbdefbfbdefbfbdefbfbd03efbfbd381d08503defbfbdefbfbd0345efbfbd2b54efbfbdefbfbd5e615eefbfbd1eefbfbd24efbfbdefbfbdefbfbdefbfbd35efbfbdefbfbd29efbfbd32efbfbd11efbfbdefbfbdefbfbd06e8b088efbfbd7cefbfbdefbfbd4a1339efbfbdefbfbd1aefbfbd677525165f4fefbfbd6eefbfbdefbfbd49395d3b39d982de8c63205d0edcbd2f1defbfbdefbfbdefbfbd74efbfbd7d45efbfbd3c0130efbfbd60380cefbfbdefbfbd6f0b09efbfbd15efbfbdefbfbdefbfbd7011cfb12866efbfbdefbfbd38efbfbd22efbfbdefbfbdefbfbdefbfbddfbcefbfbdefbfbd4a70efbfbdefbfbd7710efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd0c3eefbfbd4befbfbdefbfbdefbfbd49efbfbd36efbfbdefbfbd05efbfbd70efbfbd791cefbfbd2928efbfbdefbfbdefbfbdefbfbd1aefbfbd6a655d3bceb04212efbfbd57efbfbd353830717560efbfbd20efbfbdefbfbd27efbfbd42efbfbd0ccb836f5befbfbd6910efbfbd063247efbfbd2023efbfbdefbfbd182404474f6aefbfbd49efbfbd785d0907efbfbd24dc90efbfbdefbfbd534f6e38efbfbdefbfbdefbfbdefbfbdefbfbd59efbfbdefbfbd22efbfbd2e5aefbfbdefbfbd7f1fefbfbd48184c2c7cefbfbd1c75efbfbd56efbfbd77efbfbd13efbfbd32306606efbfbdefbfbd0271efbfbd79efbfbd6befbfbd257446efbfbd3cefbfbdefbfbd0ed8bf20efbfbd18691d51efbfbd71efbfbd6ecc97efbfbd32efbfbd1c77efbfbd683c6035efbfbd0c5fefbfbdefbfbdefbfbd1fd1beefbfbd5d1170efbfbd475859efbfbdefbfbd5a18efbfbdefbfbdefbfbd370cefbfbdc2817defbfbd0e19efbfbdefbfbdefbfbd56efbfbd48181eefbfbd0008efbfbdefbfbd3fefbfbd2162efbfbd622261efbfbdefbfbdefbfbdd7970befbfbdefbfbd7a65efbfbd5b45efbfbdefbfbd4f6cefbfbd5a0eefbfbd7c4e19efbfbd77d1b0efbfbdefbfbd27722e0defbfbd62151a24efbfbd74efbfbd4738625138efbfbdefbfbd6551efbfbdefbfbd2b1e4740efbfbdefbfbd4672efbfbdc59defbfbdefbfbd7e584c1aefbfbdefbfbdefbfbd0aefbfbdefbfbdefbfbdefbfbd7defbfbd4b065fefbfbd1319efbfbd4618efbfbd7d2aefbfbd5f7befbfbd11efbfbddda325282374efbfbd0cefbfbdefbfbdefbfbdefbfbd5b13efbfbd67efbfbd2464efbfbdefbfbd1c1d5cefbfbd547cefbfbd371e77efbfbdefbfbd4defbfbd7f4defbfbd3532475a355f7b281cefbfbdefbfbd537700efbfbdefbfbd24efbfbd0b777214c5926e0b3d47efbfbd70110aefbfbdefbfbdefbfbd71efbfbdefbfbdefbfbd50efbfbd5b0befbfbd3317efbfbd480eefbfbdefbfbd3409efbfbdefbfbd5926efbfbd6eefbfbd1cefbfbdefbfbd7542efbfbdefbfbddd8027151f363f44efbfbd1c4fefbfbdefbfbdefbfbd15efbfbdefbfbd18493fefbfbdca84efbfbdefbfbd6f79efbfbd3737efbfbd2b72efbfbd73efbfbdefbfbdefbfbd35efbfbdefbfbd76efbfbd6cefbfbd4defbfbd262157efbfbdefbfbdefbfbdefbfbd01efbfbdefbfbd59d088efbfbdefbfbdefbfbd01efbfbd60efbfbdefbfbd7d33efbfbd0defbfbdefbfbd3cefbfbd253a24efbfbd6befbfbdefbfbdd5ab7cefbfbd393455d586eeb3b7efbfbd377defbfbdefbfbd7a0903efbfbd2eefbfbd5fefbfbd3414efbfbd5429664642efbfbdefbfbd6defbfbdefbfbd1aefbfbd33efbfbd70685b26efbfbd3aefbfbd7fefbfbdefbfbd35c897efbfbdefbfbd2defbfbd33460eefbfbd5cefbfbdefbfbd5a213346137f13efbfbd24efbfbdefbfbd4b44efbfbdefbfbd02efbfbd3c644eefbfbdefbfbd5cefbfbdefbfbdefbfbdefbfbdefbfbd4746efbfbd1befbfbdefbfbd342defbfbdefbfbd49117d4d43efbfbd38efbfbdefbfbd6112747e267defbfbd6befbfbdefbfbd5643efbfbd4b08475c49efbfbdefbfbd6127efbfbd0befbfbd294a7f09681befbfbdefbfbdefbfbdefbfbdcebbefbfbd387204efbfbdefbfbdefbfbd69efbfbd1eefbfbd625defbfbdefbfbdefbfbdefbfbd5fefbfbd7b78efbfbd2a2fefbfbdefbfbd497e3a6cefbfbd235befbfbd51efbfbd504f1420efbfbdefbfbd363eefbfbd7758efbfbdefbfbd0d543553efbfbdefbfbdc288efbfbdefbfbdefbfbdefbfbdefbfbd08efbfbdefbfbd7befbfbd677c1adb973022efbfbdefbfbdefbfbd637d50584befbfbdefbfbdefbfbdefbfbdefbfbdefbfbd22efbfbd403eefbfbd2761efbfbdefbfbd60efbfbd7c3635efbfbd75efbfbd5706efbfbddd8fefbfbdefbfbdefbfbd58efbfbd0a5aca83efbfbdefbfbd3fefbfbdefbfbd3a2befbfbdefbfbd4cefbfbd4a4134efbfbd03efbfbd4eefbfbdefbfbd67efbfbddf98efbfbd717aefbfbd0befbfbd42efbfbd3567efbfbdefbfbdefbfbd66efbfbd70efbfbdefbfbd6cefbfbd126a4fefbfbd7149075eefbfbd4f6c68efbfbd11efbfbdefbfbd3cefbfbd30efbfbdefbfbdefbfbdefbfbd5eefbfbd6fefbfbd43efbfbd63394d1c7aefbfbd5000efbfbd37efbfbd57efbfbd36efbfbd603065efbfbd56efbfbd3eefbfbd48762912efbfbd6e66efbfbdccadcda0efbfbd29efbfbd20725e18efbfbdefbfbd5624efbfbd1d4d74efbfbd23d98befbfbd2defbfbd0308efbfbd00efbfbd5c6d4fefbfbd0014efbfbd372c4aefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd0865efbfbd40efbfbd756aefbfbdefbfbdefbfbd2a5eefbfbdefbfbdefbfbd0a1eefbfbd487defbfbd1fcb9a1056784befbfbd553666efbfbd3befbfbd47efbfbd69efbfbdefbfbdefbfbd690a0cefbfbd3800efbfbdefbfbdefbfbdefbfbd16efbfbd5eefbfbdefbfbd20efbfbd34efbfbdefbfbdefbfbdefbfbd0cefbfbdefbfbdefbfbd7e09efbfbd73452eefbfbd2160210defbfbd6eefbfbd55efbfbd1b2cefbfbd5e1a17efbfbd2fefbfbd28efbfbd51153f46efbfbd1729efbfbd59efbfbdefbfbd1b6c17efbfbdefbfbdefbfbdefbfbd3eefbfbd235771efbfbd33efbfbd31efbfbdefbfbd09ca8c52efbfbdefbfbd7c1807efbfbdefbfbdefbfbd79efbfbd5479efbfbd4e0e30efbfbd3a4a4defbfbd2734efbfbd4809efbfbd0856efbfbd66efbfbdefbfbdefbfbd0f32efbfbdefbfbd5eefbfbdefbfbdefbfbd61efbfbd6d2759efbfbd3e49efbfbd3f38296defbfbd6cefbfbd34efbfbd0e117f16efbfbd55721fefbfbd7278efbfbdefbfbd3befbfbd7159efbfbd12efbfbd18355fefbfbdefbfbd053544645711efbfbd1567207f78efbfbdefbfbd75706eefbfbdefbfbd24efbfbd35efbfbd54efbfbd5defbfbd220cefbfbdefbfbdefbfbdefbfbd60417e05efbfbdefbfbd68efbfbd0b532fefbfbd07efbfbd76efbfbd2defbfbd12efbfbdefbfbdefbfbdefbfbdefbfbd12653c35cebfefbfbd437fd19639efbfbdefbfbdefbfbddcba7811efbfbd37efbfbd275ecbbd190cefbfbdefbfbd3b6f6b42cb94de8420efbfbd79efbfbd2472efbfbdefbfbdefbfbd1cefbfbdefbfbd43311cefbfbdefbfbd602a155eefbfbd6a6e4eefbfbd024befbfbd0e264cefbfbd61efbfbd25efbfbdefbfbdd9b21d00efbfbdefbfbd76efbfbdefbfbdefbfbd620a55efbfbd47787b18efbfbd37cd80efbfbdefbfbd7b69dda2efbfbdefbfbd6d14efbfbdefbfbdefbfbd1cefbfbd572d3befbfbdefbfbdefbfbd2defbfbd6fefbfbdefbfbdefbfbdcf87efbfbdefbfbd446a66efbfbdefbfbd4befbfbdefbfbd66efbfbd4e4eefbfbd39efbfbdefbfbdefbfbdefbfbd115b13efbfbdefbfbdefbfbdefbfbd7b0607efbfbd6aefbfbdefbfbdefbfbd084befbfbd6f7aefbfbd4eefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd59efbfbdefbfbd4cefbfbdefbfbd150cefbfbd0a2a00efbfbd73520119efbfbdefbfbd532c0befbfbdd9bc122aefbfbd7ac5bdefbfbd3d661adda1efbfbdefbfbdefbfbd14032306efbfbd220009707cefbfbd6befbfbdefbfbd032eefbfbd34efbfbdefbfbd286e621defbfbdd89defbfbd27efbfbdefbfbd2c78efbfbd3fefbfbdefbfbd227fefbfbd3548efbfbd38efbfbd36efbfbdd0b3563e1fefbfbd48efbfbdefbfbd77247e44090befbfbdefbfbdefbfbdc6b66f0c3412e8adb6e5a1a5efbfbdefbfbd6f4320efbfbdefbfbd4475efbfbdefbfbdefbfbd1137efbfbdefbfbdefbfbdefbfbd526503efbfbdefbfbd53efbfbdefbfbd64efbfbd3e1619681d4801efbfbdefbfbd66efbfbd1873efbfbd1c0cefbfbdefbfbd2f1809efbfbd431d25efbfbdefbfbd2aefbfbdefbfbd10efbfbdc3a2efbfbd49efbfbd2a42efbfbd2b2bdaa2efbfbd684defbfbdefbfbd46efbfbdefbfbdefbfbd29efbfbd47efbfbd3268efbfbd17efbfbdefbfbd310a75265fefbfbdefbfbdefbfbdefbfbd6aefbfbd033befbfbdefbfbdefbfbd7fefbfbd3fefbfbd1aefbfbdefbfbdefbfbdefbfbd1aefbfbdefbfbd4eefbfbd083e6defbfbd2befbfbd3defbfbd6124efbfbdefbfbd450a67efbfbd6109efbfbd253e7aefbfbdefbfbd2eefbfbd7019630eefbfbdefbfbd0871664d037dc2a8c8a940efbfbd204011efbfbd79efbfbdefbfbdf0a5b58eefbfbdefbfbdefbfbd43efbfbd50efbfbd53efbfbdefbfbd7cefbfbd7befbfbd49234f4befbfbd511aefbfbd574c4a55efbfbdefbfbd6eefbfbdefbfbd58efbfbd520d3b06efbfbdefbfbd0d4524efbfbd0a027416525fefbfbd64efbfbd7648efbfbdefbfbdefbfbd475368efbfbdefbfbdefbfbd0befbfbdefbfbd0a6344efbfbd545743efbfbdefbfbd2934efbfbd43efbfbd2227efbfbd455fefbfbd39efbfbd31e5869e6407efbfbdefbfbd544befbfbdefbfbd25efbfbdd1a2efbfbd3b79efbfbd76efbfbd2defbfbd4befbfbd4063efbfbdefbfbd05c3a44defbfbdefbfbd06111dca92736cefbfbd402a77efbfbd011842efbfbd58070b11efbfbd3cefbfbd7f524aefbfbd45efbfbdefbfbd4eefbfbd59efbfbdefbfbd15efbfbd51efbfbd2befbfbdefbfbdefbfbd2829efbfbd50efbfbdefbfbd5fefbfbde6928c370defbfbd71efbfbdefbfbd19efbfbd24efbfbd24efbfbdefbfbdefbfbdefbfbdefbfbd27efbfbdefbfbd562b7267efbfbd7cefbfbd54efbfbd49efbfbdc6a70742efbfbd74efbfbd43efbfbdefbfbd317930efbfbdefbfbdefbfbdefbfbd4eefbfbd51421c093f3cefbfbdefbfbd25efbfbd5443efbfbd4d07efbfbdefbfbdefbfbdefbfbd61efbfbd46efbfbdefbfbdefbfbdefbfbd5eefbfbdefbfbd76efbfbdefbfbd45efbfbd75efbfbdefbfbdefbfbdefbfbd44efbfbdefbfbd44efbfbd5a65efbfbdefbfbd546defbfbd46efbfbd1b7befbfbdefbfbd710ecdb172efbfbdefbfbdc58f4a29efbfbd0d76efbfbdefbfbd1c60efbfbd10efbfbd2108efbfbd10efbfbd1d75efbfbd3009efbfbd38efbfbd3d71efbfbd6873efbfbd476a106c6864efbfbd1aefbfbd01efbfbdefbfbdefbfbd2cefbfbd724a1f1d2defbfbdc3ad22efbfbd186aefbfbdefbfbd602eefbfbd5433efbfbdefbfbdefbfbd3479efbfbdefbfbdefbfbd4c4befbfbd5e7eefbfbd3a1cefbfbdefbfbd4d011eefbfbdefbfbd45efbfbdefbfbdefbfbdefbfbd7b1975454aefbfbdefbfbd44efbfbdd1a1efbfbdefbfbd185002efbfbdefbfbd05672aefbfbd6cefbfbdefbfbdefbfbd0eefbfbd50efbfbd777b5516efbfbd7214efbfbdefbfbdefbfbd433befbfbd1422efbfbd5aefbfbdefbfbdefbfbd036745efbfbdefbfbdefbfbdefbfbdc4aa09efbfbdefbfbd1a230eefbfbdefbfbdefbfbd71efbfbd36efbfbdefbfbd26efbfbd5b50efbfbd177c1b5f14efbfbd37efbfbd53efbfbdefbfbdefbfbd506252efbfbd70efbfbd14efbfbd69efbfbdefbfbd511aefbfbd76410c7b4eefbfbd65efbfbd716303efbfbd0defbfbd25efbfbdefbfbd0422213cefbfbd48efbfbd7cefbfbd18efbfbd42152f58efbfbd35496212efbfbdefbfbd63efbfbdefbfbdc3a2d2bdefbfbdefbfbd0603efbfbd10cc80efbfbdefbfbdefbfbd154364efbfbdefbfbd453f35efbfbdefbfbd16efbfbd28efbfbd19efbfbdefbfbdefbfbdefbfbd07efbfbd66efbfbd62efbfbdefbfbd3601efbfbdefbfbd24efbfbd1815efbfbdefbfbdefbfbdefbfbdefbfbd2d22efbfbdefbfbd3befbfbd64efbfbd6570efbfbd54560063efbfbd576defbfbd1cefbfbdcfb9efbfbd7c1cefbfbd5defbfbdefbfbd6cefbfbd69efbfbdefbfbdefbfbd0fefbfbd594b595e51efbfbd015854efbfbd1f60efbfbdefbfbd38efbfbd5618efbfbdefbfbdefbfbd3035efbfbdefbfbd082464efbfbd5f2f7defbfbd3fefbfbd565f5640211865efbfbd50efbfbd05efbfbdefbfbd6456efbfbd62efbfbdeb958f1b265752efbfbdefbfbd01efbfbdefbfbd75efbfbd7d17efbfbdefbfbd004eefbfbd31efbfbd6c2f45efbfbdefbfbdefbfbdd1b94befbfbdefbfbd52efbfbdefbfbd632939efbfbdefbfbdefbfbd33efbfbdefbfbdefbfbd42efbfbdefbfbdefbfbd7e0fdba9c6b951efbfbd6b6d73efbfbd3b0defbfbd7e572348efbfbdefbfbd60651a246defbfbd24e3bdb4433c26efbfbd3d78686b7d1aefbfbd502276efbfbd7cefbfbdefbfbdefbfbd1c46e881b41152efbfbdefbfbd3077efbfbd57efbfbd1536495defbfbd77efbfbdefbfbd407fefbfbdefbfbd795e59efbfbdefbfbdefbfbdefbfbd63efbfbd18efbfbdefbfbd08efbfbd7151efbfbdefbfbd3aefbfbd1041efbfbd6728efbfbd4343efbfbd2befbfbd706e0befbfbdefbfbd63efbfbdefbfbd2a03efbfbd58600d3eefbfbd05efbfbdefbfbdefbfbd4aefbfbdefbfbdefbfbd3c032cefbfbd214650efbfbdefbfbd3cefbfbdefbfbdefbfbd31efbfbdefbfbdefbfbdefbfbd711cefbfbd5eefbfbdefbfbd1b61646defbfbd73efbfbdefbfbd76efbfbd3b14efbfbdefbfbd7773530778efbfbd1eefbfbd3eefbfbdefbfbd0fefbfbdd48d0defbfbd7eefbfbd73efbfbdefbfbdefbfbdefbfbd1e63efbfbdefbfbd3c6349c3b114efbfbd51efbfbdefbfbd6f4a305fefbfbd79613a08efbfbd2aefbfbd552eefbfbd01efbfbd2015efbfbd271028efbfbd5f0cefbfbd030d11c6afefbfbdefbfbdefbfbdefbfbd683760efbfbd05efbfbdefbfbd700f5834efbfbdefbfbdefbfbd3fefbfbdefbfbd472d06efbfbd713126efbfbd48efbfbd70efbfbd0cefbfbdefbfbd361fefbfbd0defbfbd3c5aefbfbdefbfbdefbfbd501966c8b2efbfbdefbfbd42efbfbdefbfbdefbfbd227510efbfbd14efbfbdefbfbdefbfbd50efbfbdefbfbd67efbfbdefbfbdefbfbdefbfbdc8b166efbfbdefbfbdefbfbd072a034e545d59efbfbd0236d18befbfbdefbfbd0d5cefbfbdefbfbdefbfbdefbfbd37efbfbd7601efbfbd7defbfbd13efbfbd1979076a18efbfbdefbfbd4314efbfbdefbfbd4d2a3650efbfbd15c2bf7cefbfbd69efbfbdefbfbdd6814cefbfbd09c980efbfbdefbfbd3fefbfbdefbfbd1b31efbfbd17efbfbd373e2b0a31efbfbd5eefbfbdefbfbdefbfbdefbfbd5636074fefbfbd76efbfbd33320fefbfbdc9921338474c507e2258efbfbdefbfbd6fefbfbdefbfbd54efbfbd553366efbfbd66efbfbd3a2d5defbfbdefbfbd1cefbfbd5befbfbd05efbfbdefbfbd45d4b81eefbfbdefbfbdefbfbdefbfbdefbfbd700eefbfbdefbfbd4fefbfbdefbfbd7cefbfbd587befbfbd725c65efbfbdefbfbdefbfbd004576efbfbdefbfbd5d132d1b1779efbfbd46730108efbfbdefbfbd225b0aefbfbd46efbfbdefbfbdefbfbdefbfbd0f2f4e5b0e5058c69befbfbd78efbfbdefbfbdefbfbd346cefbfbdefbfbdefbfbdefbfbd2aefbfbd28efbfbdefbfbdefbfbdefbfbdefbfbd2defbfbdefbfbdefbfbdefbfbd6befbfbd116115efbfbd780c68efbfbd7fefbfbd2d4f0b72efbfbd50efbfbd27efbfbd36efbfbd0a7defbfbdefbfbdefbfbdefbfbd2eefbfbdefbfbd6defbfbd4befbfbd5fefbfbdefbfbd7075635eefbfbdefbfbd1f484fefbfbd202774cfa604efbfbd61efbfbdefbfbd4c65efbfbd53efbfbd27efbfbd0defbfbdefbfbdefbfbd5defbfbdefbfbdefbfbdefbfbdefbfbdefbfbd3eefbfbd4befbfbd1f4cefbfbd5eefbfbdefbfbd0befbfbd3964efbfbdefbfbd17efbfbdefbfbd5e7a426d0c69efbfbdefbfbd42555defbfbd38d9974330efbfbd07efbfbd743cefbfbd2161efbfbd390defbfbd11efbfbdefbfbd4f3006efbfbddaa05801487defbfbd297c2f391d130b576fefbfbd5c301befbfbdefbfbd31124d2e072ec8a3d094efbfbd294438efbfbd1defbfbdefbfbdefbfbdefbfbd1fefbfbd4a53efbfbd63efbfbd5123470befbfbdefbfbd462f7b745b221c6aefbfbd6d5367efbfbdefbfbd4fefbfbd1149efbfbd6837726539efbfbd61efbfbd2a097070efbfbdefbfbdd7847330efbfbd7cefbfbd2375efbfbd1f534a6a5fefbfbdda9befbfbdefbfbd64efbfbdefbfbdefbfbd31657fefbfbdd1a8efbfbd47efbfbdefbfbdefbfbd1fefbfbdefbfbdefbfbd374f301fefbfbdefbfbd40efbfbd3befbfbdefbfbdefbfbdefbfbd25efbfbd3344414d1fefbfbd0defbfbdefbfbdefbfbd30efbfbd31efbfbd2cefbfbd6a481cefbfbdefbfbd5e4112157defbfbdefbfbd612427efbfbd5100703fefbfbd6befbfbdefbfbdefbfbdefbfbdefbfbd0a15efbfbd5339efbfbdefbfbdefbfbd7eefbfbdefbfbd18efbfbdefbfbdefbfbdefbfbd4defbfbd20efbfbdefbfbd3d325eefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd0defbfbdefbfbd56efbfbd7fcbb9d58154efbfbd22efbfbdd1b81a4cefbfbdefbfbde58e85efbfbd46efbfbdddb7efbfbd1317efbfbd57efbfbd2c68efbfbd04dcbaefbfbd1f11efbfbd5cefbfbdefbfbdefbfbd3f3d28efbfbd322908d4a7571eefbfbd68efbfbd7066efbfbdefbfbd14efbfbdefbfbd6defbfbdefbfbdefbfbdc7acefbfbd6d1d17efbfbd1defbfbd7b43efbfbdca9c27efbfbdefbfbd5aefbfbdefbfbd320cefbfbdefbfbd10efbfbdefbfbd01efbfbdefbfbd73efbfbd1f2c59efbfbdefbfbd30efbfbdefbfbdefbfbd44efbfbd67382164efbfbd4d090f09efbfbdefbfbd15402c07713060efbfbd7eefbfbd2e35efbfbdefbfbd58efbfbdefbfbd2defbfbd5d4e554d27efbfbd7236efbfbdefbfbd677016efbfbd0e0c39efbfbd3931efbfbd73efbfbd7365efbfbd4aefbfbdefbfbd15efbfbd3f307cefbfbdefbfbdefbfbdefbfbdefbfbd40efbfbd5741efbfbd685e1b031263efbfbdefbfbd27456a50dab2efbfbdefbfbd29efbfbd1a0befbfbdce87125befbfbd622aefbfbdefbfbd63efbfbd5e21242befbfbdefbfbdefbfbd3aefbfbdefbfbdefbfbdefbfbdefbfbd03efbfbdefbfbd6f4c50efbfbd6c530412efbfbdefbfbd0cefbfbd3b59efbfbdefbfbdefbfbd44efbfbdefbfbd401571efbfbdefbfbdefbfbdd4a0efbfbd4e490708efbfbdefbfbd1478efbfbd422d7aefbfbd05efbfbd3423efbfbdefbfbdefbfbd4cefbfbd7cefbfbd7cefbfbdefbfbdefbfbd1831efbfbd0defbfbdefbfbd500b6befbfbd207cc7a1efbfbd31efbfbdefbfbd68efbfbd2408efbfbdefbfbd416defbfbdefbfbdefbfbdefbfbd5d6defbfbd4a2564efbfbdefbfbd1befbfbdefbfbd7befbfbdefbfbdefbfbd42efbfbd2c1e172d5f1c081019efbfbd4b4eefbfbdefbfbdefbfbd0a04efbfbd0fe7959fefbfbd57efbfbd7e6bc294efbfbdefbfbd43efbfbd012cefbfbd00efbfbd255eefbfbdefbfbdefbfbdc29059efbfbd00efbfbd405cefbfbdefbfbdd99a79cebfefbfbdefbfbdefbfbd6fefbfbd43787aefbfbd1a1f0648efbfbd3f70e6b884284cefbfbdefbfbdefbfbd7a18efbfbdefbfbd7fefbfbd704f3d69216befbfbd2f02efbfbdd188efbfbd5b1defbfbdcdae791cefbfbd4e63efbfbdefbfbd5808efbfbdefbfbd1224efbfbd56efbfbde580a17d1fefbfbdc6b01021efbfbdefbfbdefbfbd7a046a30efbfbd22efbfbd7befbfbdefbfbdefbfbd217c09efbfbd6b6c4befbfbd38efbfbd0d44c8aeceb076efbfbdefbfbd7befbfbdefbfbdefbfbd2e684f37683aefbfbdefbfbd6a776a7d53efbfbd2f29efbfbd156defbfbd0b5befbfbd59efbfbdefbfbdc8a24478efbfbd5e46efbfbdefbfbd02efbfbd2e1e282fefbfbd68efbfbdefbfbd782c6c6e6b023e14efbfbd75efbfbdefbfbd165cefbfbd42c995efbfbdefbfbd7fefbfbd406f666f0fefbfbd66627747efbfbdefbfbd4adea64000efbfbdefbfbdefbfbd691b200c326defbfbdefbfbdefbfbd01efbfbdefbfbdefbfbd50efbfbdefbfbdda8befbfbd7a6eefbfbd3b0e1d22efbfbd11123fefbfbd0defbfbdefbfbd1e74efbfbdefbfbdefbfbd54efbfbdefbfbd70efbfbdefbfbd1850efbfbd702eefbfbdefbfbdefbfbd41efbfbd41efbfbdefbfbd20efbfbd1eefbfbd752cefbfbd2800efbfbd25efbfbd1675efbfbd056fefbfbd6d1cefbfbd47efbfbddfab1ddda22befbfbdefbfbd05c480722576064cefbfbd14efbfbdefbfbd7fca904cefbfbd513defbfbd32efbfbdefbfbd1c02430c7454efbfbd2defbfbdefbfbdefbfbd3cefbfbd33381803efbfbd2fefbfbd64efbfbdefbfbd1e0d26efbfbdefbfbd71601aefbfbdefbfbd77efbfbdefbfbd55efbfbdefbfbdefbfbd1befbfbdefbfbdefbfbde0a98befbfbdefbfbdefbfbd2e5c29efbfbd48d8a2efbfbd210fefbfbdefbfbdefbfbdefbfbd13efbfbd1fefbfbdd2966d025505efbfbdefbfbdefbfbd213cefbfbd1f152c67efbfbd3defbfbdefbfbd2847efbfbd21efbfbdefbfbdefbfbd26efbfbdefbfbd30efbfbd352aefbfbdefbfbdefbfbde6b884efbfbdefbfbd081028efbfbd57efbfbdefbfbd58efbfbdefbfbdefbfbd1f57383a221defbfbd53efbfbd7327efbfbdd2864eefbfbd48c48defbfbdefbfbdefbfbd0c4876efbfbd634fefbfbd2befbfbdefbfbdefbfbd71ca99efbfbdefbfbd54620defbfbd45015c2f7f24efbfbdefbfbd4f3962efbfbd17efbfbd717201efbfbd5133cd9569efbfbd14efbfbdefbfbd5e4605d9923c4aefbfbdefbfbd526265efbfbd22efbfbd3831c8a144091fefbfbd594eefbfbdefbfbd3aefbfbd4befbfbdefbfbd623332efbfbdefbfbdefbfbdefbfbd6950efbfbdcf9fefbfbd71796aefbfbd2fefbfbdefbfbd28efbfbd171eefbfbdefbfbd6624efbfbdefbfbd46186f2befbfbd617cefbfbdefbfbd5430efbfbdefbfbdefbfbd44efbfbd73efbfbdd3ab21efbfbdefbfbd1d693f2defbfbdefbfbd6577efbfbd4823efbfbd6b0bc7b0efbfbdefbfbd25192fefbfbd2fefbfbdefbfbdefbfbdefbfbd54efbfbdefbfbd70efbfbd745cefbfbd463bc38eefbfbd78efbfbd00efbfbdefbfbd421e3326efbfbd4222efbfbd5aefbfbd3befbfbd60436eefbfbd4f502a75efbfbd1eefbfbd68eba792df824d21efbfbd5befbfbd0a1befbfbd4e0d5fefbfbdefbfbdefbfbd71ce9defbfbdefbfbd5befbfbd534907efbfbd1ae496baefbfbd3aefbfbd6befbfbdefbfbd2befbfbdefbfbd6fefbfbd2aefbfbd3b3cefbfbd7c1aefbfbdefbfbd7e0cefbfbdefbfbd537cefbfbd20efbfbdefbfbdefbfbd576c0a033405efbfbdefbfbd0d396f167b0d521235efbfbdefbfbd3e22efbfbd5a7d74efbfbd3eefbfbd23efbfbd5cefbfbd38034defbfbd1cefbfbd542230efbfbd59efbfbd13efbfbd56dd8b5445744e1c31efbfbd43efbfbd2fefbfbd73efbfbdefbfbd73efbfbd19efbfbd1e00efbfbd0ce59199efbfbd621f38efbfbd5dd39befbfbd70efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd78efbfbd65efbfbd502fefbfbdefbfbd63efbfbd79561eefbfbdefbfbd28efbfbd0a662650efbfbdefbfbd350f340cefbfbd0cefbfbd14efbfbd175d52efbfbddc9418efbfbd2423efbfbdefbfbd08efbfbdefbfbdefbfbd5955efbfbd6e08dc83efbfbd743c20efbfbd58efbfbdefbfbd24de98efbfbdefbfbdefbfbd74efbfbd365f627e3235efbfbd4aefbfbdefbfbd21037624efbfbdefbfbd6c0734efbfbd11efbfbd44efbfbd0377efbfbdefbfbdefbfbd2035efbfbd4b26efbfbdefbfbd2b36efbfbdefbfbd0245efbfbd3befbfbd21efbfbd5811efbfbd750defbfbd5a59efbfbd75efbfbd4cefbfbd27efbfbd6defbfbd7eefbfbd322aefbfbd47efbfbd51efbfbdefbfbd7befbfbdefbfbdefbfbd1fefbfbdefbfbdefbfbdefbfbd1139efbfbd1675efbfbd6fefbfbdefbfbdefbfbdefbfbd2aefbfbd65efbfbdefbfbdefbfbdefbfbdefbfbd461e7aefbfbdefbfbd5a7ad984efbfbd2139efbfbd063cefbfbd7fefbfbdefbfbd3251efbfbdcb8fefbfbdefbfbd46efbfbd2e167a62d8a06a52efbfbdefbfbd4b6438efbfbd1f72efbfbdd9901e5fefbfbdd992efbfbd433a01efbfbdefbfbd0eefbfbd71efbfbd057aefbfbdefbfbd23efbfbd3eefbfbd164f0a47efbfbd7eefbfbd5befbfbdc386366fefbfbdd29f4cefbfbd39efbfbd7c2564efbfbdefbfbd41515e6fefbfbdefbfbdefbfbdefbfbd3221efbfbd0d114fefbfbd5aefbfbd2761ceaa6865efbfbd4b5cefbfbd3d51efbfbdefbfbd4736efbfbdefbfbd684befbfbd14521a015b0eefbfbd3a285009344e2a454a44410eefbfbdefbfbdd2bf71efbfbd627414efbfbd4059efbfbdefbfbd23635349efbfbd341a05efbfbd57efbfbd6fefbfbdefbfbd4c651933efbfbd27efbfbd051aefbfbdefbfbdefbfbdefbfbdefbfbd1aefbfbdefbfbdefbfbdefbfbd471365efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd6cefbfbdefbfbd5defbfbdefbfbd55efbfbd2333efbfbdefbfbd7a25dfb9efbfbd2419537aefbfbd254fefbfbd20efbfbd25efbfbdefbfbdefbfbdefbfbd611f40494aefbfbdefbfbd72efbfbdefbfbd01190b2a6c1e58efbfbd4a32efbfbdefbfbdefbfbd5fefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd1fefbfbd55efbfbdefbfbdefbfbd55efbfbd43efbfbd26efbfbd49efbfbd32efbfbd1e04efbfbd4946700f251eefbfbd2b6248efbfbdefbfbdefbfbd4cefbfbdefbfbdefbfbdefbfbdefbfbd2eefbfbdefbfbdefbfbd3f391cefbfbdefbfbd2cefbfbd23efbfbdefbfbdefbfbdefbfbdefbfbd55de957e68efbfbdefbfbd08efbfbd761855262defbfbdefbfbd52efbfbdefbfbdefbfbd6befbfbd2eefbfbd50efbfbdefbfbd6fefbfbdefbfbdefbfbd580e66efbfbdefbfbd5eefbfbdefbfbd4ec6a80eefbfbd42615fdabeefbfbdefbfbdefbfbdefbfbd24efbfbdefbfbd5fefbfbdefbfbd62efbfbd3fefbfbd463e247e7443491fefbfbdefbfbd4f43efbfbdefbfbd44efbfbd085d54354aefbfbd48efbfbdd9a7d0a13222efbfbdefbfbd53efbfbdefbfbd3b046415efbfbdefbfbd472e47efbfbdefbfbdefbfbdefbfbd56efbfbd171875efbfbdc39aefbfbdefbfbd7e2eefbfbd686c1410efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd007aefbfbd6e4e41c69c4fefbfbdefbfbd4e02efbfbd38efbfbd66c28e1befbfbdefbfbdefbfbdefbfbddc96757f2521efbfbdefbfbdefbfbd55063b04efbfbd4a3e7cefbfbdefbfbdefbfbdefbfbdefbfbd23efbfbd27464adf85efbfbd66651cd5945046c592ed98b740efbfbd4d7e5eefbfbdefbfbd4eefbfbd47efbfbd38efbfbd3eefbfbd41efbfbdefbfbdefbfbdefbfbd6cefbfbd3eefbfbde4a0aeefbfbdefbfbd50efbfbdefbfbd60533befbfbdefbfbdefbfbd222eefbfbd7cefbfbd7eefbfbd36efbfbd5843561e37efbfbd74efbfbd2fefbfbd0d47efbfbd081a0e3905efbfbd197a3324efbfbdefbfbd497546493aefbfbd582eefbfbd24efbfbd05efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd6277efbfbdefbfbd583d47efbfbdd5a0efbfbd6620efbfbdefbfbd18efbfbdefbfbd63efbfbdefbfbd4f1defbfbd146354efbfbd5befbfbdef9697d78fefbfbd44efbfbdefbfbd60efbfbd1b6d69efbfbd5eefbfbdefbfbd36efbfbdefbfbd1151efbfbd23efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd2a40efbfbd4d116d1d00efbfbd167fefbfbdefbfbdefbfbd04efbfbdefbfbd77efbfbd1d742631753204715defbfbdefbfbd0816efbfbd4956efbfbdefbfbd3e50cd92efbfbdefbfbdefbfbd6ac78f6aefbfbd44efbfbdefbfbd6d6b520959efbfbd1cefbfbddb91efbfbdefbfbdefbfbd36efbfbd28efbfbdefbfbdefbfbd256e20097078efbfbd58efbfbd073eefbfbd426eefbfbd431720efbfbd4a2e50efbfbd37792aefbfbd68efbfbd51efbfbd387518efbfbd66145b68177fefbfbdefbfbdefbfbd23efbfbd12efbfbd0839efbfbdefbfbd1eefbfbd4130efbfbd2f4eefbfbdefbfbd6cefbfbd73efbfbdefbfbd0456efbfbd1329efbfbdefbfbd2f3befbfbdefbfbdd1af2eefbfbdefbfbd39efbfbdefbfbdefbfbd317d3e197d1eefbfbdefbfbdefbfbd13efbfbdcd8b596d0aefbfbd6c02efbfbdefbfbd75efbfbd084aefbfbdefbfbd39efbfbdcb8a0418efbfbd6aefbfbdefbfbdefbfbd473726707d2fefbfbd261a0cefbfbd2fefbfbd4a6e20efbfbd322e0853efbfbdefbfbd04efbfbdefbfbd3befbfbd7f2fefbfbd3c40efbfbd63efbfbd38efbfbd43efbfbd22efbfbdd8b4efbfbd352001c7a06defbfbd7870efbfbdefbfbd53efbfbd7612efbfbd042b0b483f512b28efbfbdefbfbdefbfbd2fefbfbd052a7aefbfbdefbfbdefbfbd7defbfbdddb0efbfbd72efbfbd41c6aeefbfbdefbfbdefbfbd4aefbfbd2e43efbfbdefbfbdefbfbd0eefbfbd7821efbfbd275eefbfbd4510efbfbd4a372befbfbddaa4453d2defbfbd31efbfbd6d5f44efbfbdefbfbdd4972f1aefbfbdefbfbdefbfbd5b62efbfbd4fefbfbdefbfbd586eefbfbdd792efbfbd3c7a76efbfbdefbfbd04686d70efbfbd64efbfbd2e1defbfbd66efbfbd4dcd846011efbfbd7fefbfbd087058efbfbdefbfbd7a45efbfbdefbfbdefbfbd6567efbfbdd2857d781922efbfbd3fefbfbd77efbfbd52efbfbdefbfbd4417efbfbd72efbfbd50efbfbd5029efbfbdefbfbd4410efbfbd44efbfbdefbfbd67efbfbdefbfbdefbfbdefbfbdefbfbd18efbfbd56efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd53efbfbdefbfbdefbfbdefbfbd723f73efbfbd5d3e166eefbfbdefbfbd4defbfbd6815efbfbd276ad0b14defbfbdefbfbdefbfbdefbfbdefbfbd2f0defbfbdefbfbd2befbfbddaa8efbfbdefbfbdefbfbdefbfbd4fefbfbdefbfbd500c6c345d40722a0047481445efbfbdefbfbd4e173f4befbfbd30efbfbd1770efbfbdefbfbd007fe78cb5065e7defbfbdefbfbdefbfbd4bc9b7393defbfbd2cefbfbdefbfbd0609efbfbd272aefbfbd1973efbfbdefbfbdefbfbdefbfbd7eefbfbdefbfbdefbfbd345fefbfbdccb247efbfbdefbfbd651a2257efbfbd105111004eefbfbddbb33d717d60efbfbd34efbfbdefbfbdd9a04aefbfbd22efbfbdefbfbd0cefbfbd0aefbfbdcfa56e7321efbfbdefbfbd6846efbfbdcf85efbfbd58efbfbd31efbfbd0cefbfbdefbfbd6b67efbfbd713b2d7c62efbfbd7024efbfbd3628d79ed89e75efbfbd2364efbfbdefbfbd152c76efbfbd3fefbfbd1836efbfbd7fefbfbd35efbfbd3b6169efbfbd23c7af46efbfbd6aefbfbdefbfbd43d3a1efbfbd70efbfbd03efbfbd0546efbfbdefbfbdefbfbd78efbfbdefbfbdefbfbdc8920b68efbfbdc5a9efbfbd43efbfbdc393efbfbd386c40efbfbd23146f4b0b4f094d18efbfbd0c01193460efbfbd43782578efbfbdefbfbd2425efbfbdefbfbd00efbfbdefbfbdefbfbd79efbfbdefbfbdefbfbd7a0cefbfbdefbfbdefbfbd47efbfbd18efbfbdefbfbdefbfbdefbfbd6fefbfbd0923daa5efbfbd50efbfbd1e6defbfbd116aefbfbd226903efbfbdd1b2183aefbfbdefbfbd1778efbfbdefbfbdefbfbdefbfbd3d6866efbfbd26efbfbd3b0614efbfbd6e75efbfbd05efbfbdefbfbd4e0befbfbd3e043f1defbfbd36efbfbd4f73efbfbdefbfbd577defbfbd5f743f05efbfbd1cefbfbdd28e05efbfbd706a42efbfbd01efbfbd19efbfbd1aefbfbd60efbfbd105d221cefbfbd40efbfbdefbfbdefbfbd27d8884befbfbd282eefbfbdc2ab172fefbfbdefbfbd041e6b2eefbfbd3b49ca9036081f22efbfbd3f50efbfbd67efbfbd18efbfbdefbfbd5e05efbfbdefbfbdefbfbd0b3fefbfbdefbfbd72465fefbfbd2f0a21efbfbd0e3129efbfbdefbfbd454befbfbdefbfbd4befbfbd1aefbfbdefbfbd795defbfbdefbfbd65efbfbd3e6c38c2945d4d2976efbfbdefbfbd0aefbfbd58efbfbdefbfbd5a42efbfbd304fefbfbdefbfbdefbfbd282eefbfbd39efbfbd795d5f3eefbfbdefbfbd5cefbfbdefbfbdefbfbd2b17efbfbd4d5c1befbfbdefbfbd76efbfbd4b7defbfbd7befbfbdefbfbd4e775918efbfbdd3bb242e68efbfbdefbfbdefbfbdefbfbd23efbfbdefbfbdefbfbdefbfbdefbfbdc9a63fefbfbdcf81077aefbfbdefbfbd5215336537efbfbd7049efbfbdefbfbdefbfbd18efbfbd7defbfbdefbfbd46efbfbdefbfbdefbfbd1b76efbfbd0aefbfbd086cdab545c7bd172befbfbd35293f61021d3a2eefbfbdefbfbd4467efbfbd534777551966796c75efbfbd1befbfbdefbfbdefbfbd731befbfbd1f4f6c29efbfbdefbfbdefbfbd36efbfbd471defbfbd68efbfbd393b66efbfbd063a48efbfbd43772fefbfbd24efbfbdefbfbd491914efbfbdefbfbd38efbfbdda9c7aefbfbd56efbfbd12efbfbd7516efbfbdefbfbd1f2a042d4befbfbd47efbfbdefbfbd034118184713d593efbfbd682438efbfbd7a45efbfbdc9b627067aefbfbd02efbfbdefbfbdefbfbd430aefbfbdefbfbd150fefbfbd4aefbfbdefbfbd3b532befbfbdefbfbd13efbfbd37efbfbdefbfbd373f2defbfbdefbfbdefbfbdefbfbd7b3cefbfbd3315efbfbd06efbfbdefbfbdefbfbdefbfbd6c397aefbfbd5bdbbbefbfbd64efbfbd3aefbfbd5aefbfbdcc85efbfbd51efbfbd7defbfbdefbfbd16efbfbd1c58efbfbd04efbfbdefbfbdd1877eefbfbd150e1c2545efbfbd7e31efbfbdefbfbd560b13efbfbd31efbfbd767defbfbdefbfbd1befbfbdefbfbd6a0e5a540befbfbdefbfbd68637277efbfbdefbfbd06efbfbd1356efbfbdefbfbdefbfbd13efbfbd71efbfbd25efbfbdefbfbdefbfbd7346efbfbd0355efbfbd4402efbfbd18380cefbfbd53efbfbdefbfbd4a0a35efbfbdc485efbfbdefbfbd764b2aefbfbd3aefbfbdefbfbdefbfbd5d69066931efbfbdefbfbd3c460925efbfbd4a2aefbfbd4cefbfbd5b79efbfbd51c8a6efbfbdefbfbdefbfbd671151efbfbd1eefbfbdefbfbdefbfbd00efbfbdefbfbd4a0c41efbfbdefbfbdefbfbd35ce9631efbfbdefbfbd00210defbfbd6524efbfbd2bec9b827c75efbfbd24615aefbfbd76efbfbdefbfbd2f5a3cefbfbd03efbfbdefbfbd4b2e0800efbfbd63efbfbd73efbfbdefbfbdefbfbd29d6b734efbfbd32efbfbd603203efbfbd2cefbfbdefbfbd416742efbfbd5054197205efbfbdd3a0efbfbd7f004aefbfbdefbfbd33efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd6645747846620e63efbfbd2d0a63621fefbfbd15046aefbfbd4e770c12efbfbdde83eea5a0efbfbd26efbfbdefbfbdefbfbd236b1150efbfbd32696c1befbfbdefbfbdefbfbd1050efbfbdefbfbd3c2eefbfbd1964011f01efbfbd26efbfbd2defbfbdefbfbdefbfbd0254efbfbd320a1332efbfbd23efbfbd273eefbfbdefbfbd746befbfbdefbfbd5aefbfbd62efbfbd2aefbfbd3befbfbdefbfbd40d5beefbfbdefbfbd17efbfbd14efbfbdefbfbd59efbfbd0a214958561312353cefbfbd44efbfbdefbfbdefbfbdcb8cefbfbdefbfbd14140cefbfbdefbfbd050cefbfbdefbfbd29efbfbd23efbfbdefbfbd517421efbfbd445f301eefbfbdefbfbdefbfbdefbfbd1f7befbfbd18efbfbd3c6dcba26defbfbdefbfbd6cefbfbdefbfbddeb4efbfbd6c7defbfbdefbfbd14efbfbd2fefbfbd58efbfbd1d1befbfbdefbfbdefbfbdefbfbd4e6cefbfbd300c14510cefbfbd122b74efbfbd7e332b6fefbfbd44efbfbdefbfbd28efbfbd27efbfbd471708efbfbdefbfbd1358efbfbd4aefbfbdefbfbdefbfbd5957efbfbd00efbfbd4eefbfbdefbfbdefbfbdefbfbdefbfbd6fefbfbd0a68761fefbfbd4979efbfbd190d2709efbfbdefbfbdefbfbddc85efbfbd0befbfbdefbfbd4d09c2a9530befbfbdefbfbdefbfbd2eefbfbd22efbfbdefbfbdefbfbdd493efbfbd2fefbfbd50efbfbd7d6a0aefbfbd4fefbfbd317fefbfbd080402efbfbdefbfbd4e42752aefbfbdefbfbd4cefbfbd4531efbfbdefbfbdefbfbd62efbfbdefbfbd0defbfbdefbfbd536f22efbfbdefbfbd06efbfbd18efbfbd5041efbfbdefbfbdefbfbd1aefbfbdefbfbdefbfbd7f34efbfbd37557aefbfbdefbfbd477cefbfbdefbfbdefbfbdefbfbd7108efbfbdefbfbd462befbfbdefbfbdefbfbd0defbfbd6b6aefbfbd1e48d1843cefbfbd462d65efbfbdefbfbd15efbfbd7fefbfbdefbfbdefbfbd7346efbfbd4776efbfbd0143efbfbdefbfbdefbfbd6164efbfbd5eefbfbdefbfbdefbfbdefbfbd11efbfbdefbfbd3aefbfbd00efbfbdefbfbd1e4eefbfbdc58a24efbfbdefbfbd004178377f71efbfbd530befbfbd62efbfbd4141053001267617efbfbd6b1466053e2cefbfbd6befbfbdefbfbdd8a53b781b7fefbfbd312e14efbfbd3c14efbfbddcbd12efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd6aefbfbd571cefbfbd06efbfbd210440efbfbd483befbfbd6433efbfbdefbfbddc9fefbfbd6eefbfbdefbfbdefbfbd32031aefbfbdefbfbd59efbfbdefbfbdcb89efbfbd557232efbfbdefbfbd47d99e4cefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd37efbfbdefbfbdefbfbd155eefbfbd7d612eefbfbd633148334f71424d29efbfbdefbfbd61efbfbd6ec4b969efbfbdefbfbd2b5fefbfbd402329efbfbd4f3b70efbfbd0218efbfbdefbfbd4b0872efbfbd04efbfbd3173efbfbdefbfbdefbfbdefbfbdefbfbdca93efbfbdd0b62fefbfbdefbfbd0537c99cefbfbdefbfbd021fefbfbdcba2034aefbfbd09efbfbd747364586d56efbfbdefbfbd34efbfbd3bd28c4eefbfbdefbfbd06efbfbd7fefbfbdefbfbd01efbfbdefbfbd42efbfbd33efbfbd23efbfbd6fefbfbdefbfbd6befbfbd4e5eefbfbdefbfbdefbfbd06c6825058efbfbdefbfbd1f38efbfbd0811212defbfbd10efbfbd605957efbfbdefbfbd43efbfbdefbfbd5422efbfbdefbfbdefbfbdefbfbd135eefbfbdefbfbd4e68df9c5926efbfbd4071efbfbdefbfbdefbfbdefbfbd2eefbfbd577c77510cefbfbd74efbfbdefbfbdefbfbd15efbfbdefbfbdefbfbdefbfbdefbfbd0d32cbb16e5f2befbfbdefbfbd1e49efbfbdefbfbd0c0b06efbfbdefbfbd72efbfbdefbfbdefbfbd35efbfbdefbfbd753f6d1103d684efbfbd5fefbfbd5865efbfbd3a571d29efbfbdefbfbdefbfbdefbfbd47efbfbdefbfbdefbfbd13470cefbfbdefbfbd06efbfbdefbfbd4defbfbdefbfbd114f3116efbfbd2b6e0652efbfbd6fefbfbdefbfbd1c3e7cefbfbdefbfbdefbfbdefbfbd4f6befbfbdefbfbd22efbfbdefbfbdefbfbd2a25efbfbd7c213befbfbd4951efbfbdefbfbd37377eefbfbdefbfbd0cefbfbdefbfbd7832efbfbd327f2d0d00520cd0a2efbfbd041d7c672406efbfbd5eefbfbdefbfbdefbfbdefbfbd71efbfbd655befbfbd33efbfbdefbfbdefbfbd44efbfbdefbfbd2678efbfbd045eefbfbd60efbfbd60efbfbd78455b230b2fefbfbdde886befbfbd492c63efbfbdefbfbdefbfbdefbfbd274eefbfbd42efbfbd184bcd9f72efbfbd41efbfbd4eefbfbd5befbfbdefbfbd066770dd81efbfbdefbfbd2c1b56efbfbdefbfbd73efbfbd2fefbfbd09efbfbdefbfbd673f122934c88cefbfbd64efbfbd25efbfbdefbfbdefbfbd56efbfbdefbfbd0fefbfbdefbfbdefbfbd7d325672efbfbdefbfbdefbfbd0befbfbd00efbfbdefbfbdefbfbdefbfbdefbfbd517eefbfbd7458efbfbdefbfbd302069efbfbd5fefbfbdefbfbd641b4201efbfbdefbfbd336c28efbfbd36efbfbd713d575d43efbfbd36efbfbd1fefbfbdefbfbd7defbfbd333defbfbdefbfbd4903efbfbdefbfbd2646efbfbdefbfbd0451214a314e4cefbfbd1cda80efbfbd466aefbfbddea5efbfbd4cefbfbd0a292e00efbfbdefbfbd250053efbfbd48efbfbdefbfbd18efbfbdefbfbd42efbfbd59efbfbd396befbfbd2cefbfbd23efbfbd4c10156d5f6befbfbd583d4fefbfbd4e5eefbfbdefbfbdefbfbd1defbfbdefbfbd6d69efbfbdefbfbd3a5a5f2242efbfbd73efbfbdefbfbdefbfbdefbfbd63efbfbdefbfbdd9871cefbfbdefbfbd3defbfbdd7b3efbfbd376eefbfbdefbfbdefbfbd4f73efbfbdefbfbd0659efbfbd40efbfbdefbfbdefbfbdefbfbd4cefbfbd085746efbfbdefbfbdd6ba15c4bc22613b14410fefbfbd386f043ec29c4f3d745fefbfbd1b7a653ad297efbfbd18efbfbd0c64430cefbfbd0a127e0e1841477cefbfbdefbfbdd28429efbfbd1ad298efbfbd65efbfbd3551efbfbd7275efbfbd23efbfbd6155efbfbdefbfbdefbfbd3e73efbfbdefbfbd33efbfbd7ce199b77fc3855831efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd21efbfbd637618efbfbdefbfbd1b235811efbfbd70efbfbd79efbfbd042aefbfbd60efbfbd5c7befbfbd7aefbfbdefbfbd303912efbfbd02166cefbfbd4a2319efbfbdefbfbd7c5021efbfbd6aefbfbd07efbfbdefbfbdefbfbd30efbfbdefbfbd64efbfbdefbfbd1aefbfbdefbfbdefbfbdefbfbdefbfbd0cefbfbdefbfbd41782a0fefbfbdefbfbd7d6e3fefbfbd7c61efbfbdefbfbd7eefbfbd606eefbfbd16efbfbdefbfbd39efbfbd3f615e37efbfbd73efbfbd2aefbfbd3f224b4f34efbfbd40c7a3efbfbdefbfbdefbfbd48307befbfbd4b1d415fefbfbd65efbfbdefbfbd270a2d324aefbfbd66efbfbdefbfbd65efbfbdd6a7efbfbdefbfbdefbfbdefbfbd0527efbfbd570221efbfbd405161efbfbd1a17efbfbd3defbfbd3befbfbdefbfbdefbfbdd08c5f1aefbfbd58efbfbd22efbfbdefbfbd3545324c173859efbfbdefbfbd7b1a2c65efbfbdefbfbd4defbfbdefbfbd7fefbfbd7838efbfbd2c0a51efbfbd19efbfbdefbfbdcfb7efbfbd68efbfbdefbfbdefbfbd2aefbfbdefbfbdefbfbdefbfbd76efbfbdefbfbdefbfbdefbfbdefbfbd7fefbfbd137fefbfbde0b686efbfbd6cefbfbd0cefbfbdefbfbdefbfbd3a65efbfbdefbfbd500c05efbfbd05c49a51efbfbdefbfbd5b67efbfbd0642efbfbd2806e3a3ba24efbfbdefbfbdefbfbd2542efbfbd373cefbfbdefbfbd3eefbfbd37efbfbdefbfbd5f6914efbfbd5673777c734defbfbd6c0c1eefbfbdefbfbd73efbfbd75180cefbfbd687921efbfbd6420efbfbd381800efbfbdefbfbdefbfbd1a252b60efbfbd50786befbfbdefbfbdefbfbd1eefbfbd18211cc2a9efbfbdefbfbd655eefbfbd0a7fefbfbd6c72efbfbdefbfbdd38844cb9c0167efbfbd07056573efbfbdefbfbdefbfbdefbfbd48efbfbd2cefbfbdefbfbdefbfbdefbfbd1fefbfbdc3b5efbfbd0d6fefbfbd3cefbfbdefbfbdefbfbd724a78efbfbdefbfbdefbfbdefbfbdefbfbd53efbfbdefbfbdefbfbdefbfbdefbfbd4cefbfbdefbfbd747fefbfbdefbfbd4a3defbfbd00efbfbdefbfbd4ada9c5d02efbfbdefbfbd0b38272c6f6bdaa1efbfbdefbfbd69efbfbd4befbfbdefbfbdefbfbdefbfbd5aefbfbd754c7316efbfbd20efbfbd1849efbfbdd5b062efbfbd55efbfbd3fefbfbdefbfbdefbfbd20174c1a7cefbfbd103ad8aeefbfbdefbfbdefbfbd75efbfbd267651efbfbdefbfbdefbfbdefbfbd18efbfbdefbfbd71cb9d412cefbfbd07482fc8a5efbfbd12efbfbdefbfbd5316efbfbdefbfbd2f6506efbfbd0866efbfbd75efbfbdefbfbd5befbfbdefbfbd021c7fefbfbd56efbfbdefbfbd6fefbfbdefbfbdefbfbd207b7ae2959aefbfbd57774a0405efbfbd1950efbfbd14efbfbd1d6e5cefbfbd082b7604efbfbdefbfbdefbfbd29267b6aefbfbd114540c48fc9a6776649efbfbdefbfbdefbfbdefbfbde69599efbfbd66efbfbdefbfbd50efbfbd74efbfbdefbfbdefbfbdefbfbd5c2befbfbd3eefbfbd25efbfbd48efbfbdefbfbd537eefbfbd0e10550612efbfbdefbfbdefbfbdefbfbd45efbfbdefbfbddfbcefbfbdefbfbd70efbfbdefbfbd69efbfbdefbfbd0b1e4cefbfbd5b51d78cefbfbd7fefbfbdefbfbd7b3fefbfbdefbfbd12caacefbfbde1a9ae2e1314efbfbd45efbfbd25efbfbdefbfbdefbfbdefbfbd3b45286eefbfbdefbfbd3602d284efbfbdefbfbd06efbfbd16efbfbd58efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd2fefbfbd7c66efbfbd3eefbfbd4fefbfbdefbfbd31efbfbd3e7f02efbfbdefbfbd06efbfbdefbfbd2a5850405a42efbfbdefbfbd1269efbfbdefbfbdefbfbd7cefbfbd6befbfbdefbfbd1fd7a330474365efbfbdefbfbd60561b01efbfbdefbfbdefbfbdefbfbdcab1dd9d1348efbfbdefbfbd051c43efbfbdecaaaeefbfbdefbfbd1d0eefbfbd1217efbfbdefbfbd24efbfbdefbfbd4aefbfbd56efbfbd6cefbfbdefbfbd03efbfbd204f33efbfbd49efbfbd5378efbfbd66efbfbdefbfbdefbfbd7a3cefbfbd65dd8e26efbfbd45efbfbd15efbfbd295fefbfbd16efbfbd5befbfbdefbfbdca9fefbfbdc280efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd37efbfbdefbfbd04efbfbd64750400efbfbdefbfbd6356efbfbd686defbfbdefbfbd50efbfbdefbfbd1369efbfbd50efbfbd1f39471727efbfbd6cefbfbd4b75efbfbd074d5932376eefbfbdefbfbdefbfbd51efbfbd59c7996008efbfbdefbfbdefbfbdefbfbd77efbfbdefbfbdefbfbdefbfbd45efbfbdefbfbd482befbfbd0f0b3aefbfbd732c484d6563efbfbd2825087e0cefbfbd5e470c72501d4aefbfbdefbfbd471defbfbdefbfbd79efbfbdefbfbdefbfbdefbfbd1a6f70efbfbdefbfbd45efbfbd70efbfbd7f60efbfbdefbfbdefbfbdcd8504efbfbdefbfbdefbfbdefbfbd057814efbfbdefbfbdefbfbd187b67efbfbdefbfbd14efbfbdefbfbd28efbfbd0a3defbfbdefbfbdefbfbdceb56eefbfbd535b00efbfbdefbfbd0eefbfbd12efbfbdefbfbd130e3f3aefbfbd11efbfbd6cefbfbdefbfbd47efbfbd546fd187efbfbd457d0f00efbfbd65687f25efbfbd21efbfbd4fefbfbd007d0cefbfbd1f24efbfbd65efbfbd1b0d62efbfbdefbfbd76efbfbdefbfbdefbfbd43efbfbdc4b6efbfbde190a84ed1a76cefbfbdefbfbd11efbfbd69efbfbd1c027b26efbfbd16545b63574b61efbfbd65efbfbd432c295219efbfbdefbfbd4e0fefbfbd62efbfbd35037defbfbd32280138efbfbd3d7d2eefbfbdefbfbdefbfbd086e28efbfbdd3af264e58efbfbd03efbfbdefbfbd4627efbfbd75efbfbdefbfbd02efbfbdd7940559efbfbd79efbfbd7cefbfbd2eefbfbd58440070185aefbfbdefbfbd5b28efbfbdefbfbdd388efbfbd74efbfbdefbfbd42efbfbdefbfbd53efbfbdefbfbdefbfbd6945efbfbdefbfbd6fefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd78efbfbdefbfbdefbfbdefbfbd561955697214efbfbd43735145efbfbdefbfbd1249efbfbd6cefbfbdefbfbd3e370b435fcaa37aefbfbd43071cefbfbd5809206932efbfbd012d60efbfbdefbfbd4a1cefbfbdefbfbdefbfbd11efbfbd59332eefbfbd0c532fefbfbdefbfbdefbfbdefbfbd071cefbfbd6a2eefbfbd2befbfbdefbfbd741602efbfbd2008efbfbd432639efbfbdefbfbd3c6befbfbd4032efbfbd474e31efbfbdefbfbd2a3aefbfbd45efbfbd4456665e48efbfbd13efbfbd1e4b6b6fefbfbdefbfbdefbfbd38000e3d43efbfbdefbfbd1cefbfbdefbfbd21efbfbd3d15efbfbdefbfbdefbfbd0704efbfbdefbfbd416a76efbfbd25d8a2efbfbd2167efbfbd2a2d6eefbfbd4040efbfbd50efbfbd5511efbfbd0e0f3cefbfbdefbfbd5befbfbd1219c592efbfbdefbfbdefbfbdefbfbdefbfbd235aefbfbdefbfbd0defbfbdefbfbd55efbfbd14efbfbdefbfbdefbfbd1a05777b23efbfbd554d1060cfac6b55efbfbd10efbfbdefbfbd72c5b56134efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd0eefbfbd1362efbfbdefbfbdddbaefbfbd281defbfbd10efbfbdefbfbd2eefbfbdefbfbd7718efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd3defbfbd0eefbfbd3b592fefbfbd6f04efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd55efbfbd2f23efbfbd30efbfbdefbfbd085010551c6222efbfbd0fefbfbdefbfbd372935efbfbdefbfbd053f2a502f1cefbfbdefbfbdefbfbd42efbfbdefbfbdefbfbd0c3205efbfbdefbfbd163fefbfbdefbfbd49efbfbdefbfbdefbfbdefbfbd6eefbfbd114aefbfbd4defbfbdefbfbd12efbfbd61efbfbdefbfbd24efbfbd0122efbfbd18efbfbdc78b2eefbfbd2fefbfbdefbfbdefbfbd6876efbfbdefbfbddb977677d587efbfbdefbfbdefbfbd1e08efbfbd5979efbfbd2a145d2eefbfbd5633efbfbd45efbfbd2cefbfbdefbfbd19efbfbdefbfbdefbfbd6121efbfbdefbfbd6268efbfbd33efbfbd6b65efbfbdefbfbd32efbfbdefbfbdefbfbdefbfbd045573efbfbdefbfbd50efbfbd17c4b10befbfbdefbfbd79efbfbd6defbfbdefbfbd207ddb8d3f07efbfbdefbfbdefbfbddd97e4a2b012efbfbd5cefbfbd352ec5821d5402efbfbd4befbfbdefbfbdefbfbd15efbfbdefbfbdefbfbdefbfbd7e5defbfbdefbfbd2e2dc4944832efbfbd0d1eefbfbdefbfbd083b25efbfbd453befbfbd277e50efbfbd7fefbfbd701163efbfbd75140e28efbfbd12efbfbd6201efbfbdefbfbdefbfbdefbfbd79efbfbdefbfbd74efbfbdefbfbd2cefbfbd4b435befbfbdefbfbd4defbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd32065f19efbfbdefbfbdefbfbdefbfbdefbfbd1c285939efbfbd5e4befbfbdefbfbd45efbfbd76efbfbd5aefbfbd1eefbfbd30efbfbd78efbfbd67efbfbd4a4cefbfbdc4b92fefbfbdefbfbd3a36efbfbdefbfbd32efbfbdefbfbdefbfbd1942efbfbd46efbfbd1aefbfbdefbfbd3967efbfbd1acab247efbfbdefbfbdefbfbd20efbfbdefbfbd6cefbfbd7e1eefbfbd19efbfbd355a002befbfbd42637603efbfbdefbfbdefbfbd43efbfbdefbfbdefbfbdefbfbd08672aefbfbd1612efbfbdefbfbd03efbfbdefbfbdefbfbdefbfbd204457667cefbfbdefbfbdefbfbd15efbfbdefbfbd3743c5994279efbfbd58efbfbd27efbfbd75efbfbd48efbfbdefbfbd62efbfbd0002efbfbdcebeefbfbdefbfbd47efbfbd510defbfbd54efbfbd4fefbfbdefbfbd5346efbfbdefbfbd0e47efbfbd1defbfbd7404efbfbdefbfbdefbfbd2c6aefbfbd21efbfbd39efbfbd0aefbfbd35efbfbdefbfbdefbfbdefbfbd7fefbfbdefbfbd50efbfbd7c341070efbfbdefbfbd493eefbfbd2d0defbfbd235b6914491a1d237c7aefbfbd13efbfbdefbfbdefbfbdefbfbd66efbfbdefbfbd27efbfbdefbfbdefbfbdefbfbdefbfbd6009efbfbdefbfbd2d1242efbfbdefbfbd53287a3eefbfbdefbfbdefbfbdefbfbd3dceb1c8baefbfbdefbfbdefbfbd3814efbfbd2eefbfbd6c77efbfbd55efbfbd5b25efbfbd05456c7b28efbfbd766defbfbdefbfbd1befbfbdefbfbd2fefbfbdefbfbd7defbfbdefbfbdefbfbdefbfbd1651efbfbd79efbfbd7b2b70072b15efbfbdefbfbdefbfbd0fefbfbdefbfbdefbfbd753b42efbfbd6aefbfbd75efbfbd704f64efbfbdefbfbd3defbfbd0e4aefbfbd1cefbfbd37661e4e31efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd33efbfbd63efbfbdc4b51ecf82703fefbfbdefbfbdefbfbd215eefbfbdefbfbdefbfbd0a720c34efbfbd504452efbfbd1fefbfbd5a6b2aefbfbdefbfbd6f1b1befbfbdefbfbd2defbfbdefbfbdefbfbd6338efbfbd404f16efbfbd28710befbfbd1c1451735052efbfbdefbfbd71efbfbdefbfbd6c13efbfbdefbfbdefbfbd1aefbfbd1a2cefbfbdefbfbdefbfbd5befbfbdcfb1efbfbd2f4fefbfbdefbfbd50efbfbd395cefbfbd324eefbfbdefbfbdefbfbd56efbfbdefbfbdefbfbd047d435143efbfbd386518efbfbd6e2cefbfbd20efbfbd3defbfbdc3baefbfbdefbfbdefbfbdefbfbd303defbfbd1defbfbd7befbfbd4a6e00efbfbdefbfbdefbfbd370d3c2cefbfbd66efbfbdefbfbd5f7227606fce9cefbfbd3b0a7f64efbfbd624b6c7befbfbdefbfbd3aefbfbdefbfbdefbfbd12efbfbd38efbfbdefbfbd24efbfbdefbfbdefbfbd7b54d09cefbfbd65efbfbdefbfbd66efbfbd542a7defbfbdefbfbdc3bf1f27efbfbdefbfbd36efbfbdefbfbdefbfbd34efbfbd25786d360e74293defbfbd6f3defbfbd5021652fefbfbd46081eefbfbdefbfbd0c7f5f12efbfbd1c5eefbfbdefbfbdefbfbd3f0261efbfbdefbfbd5defbfbd35efbfbdefbfbdefbfbd11efbfbdefbfbdefbfbd6d6cefbfbd0cefbfbdefbfbdefbfbd7befbfbd25efbfbdefbfbd19efbfbd6befbfbd4e7defbfbdefbfbd4a52efbfbdefbfbdefbfbdefbfbd0fefbfbd0339efbfbdc8a43478efbfbdefbfbd77efbfbdefbfbd1b28efbfbd67efbfbd39efbfbdefbfbd063d20efbfbd53efbfbd621813efbfbdefbfbdefbfbdefbfbd3eefbfbdefbfbd54efbfbd11efbfbd12efbfbd1e4870615d1435200b093670efbfbd30efbfbdefbfbd00efbfbd6d240a33efbfbd4542efbfbd32efbfbdd4aa52efbfbd1407efbfbdefbfbddcaa687c35efbfbd55efbfbd38111308efbfbdefbfbd3e120d7343efbfbdefbfbdefbfbd302eefbfbdefbfbd48efbfbd1e211e27efbfbd326b25efbfbdefbfbdefbfbd6eefbfbd357eefbfbd39efbfbdefbfbd3625efbfbd75efbfbdefbfbd74efbfbd6defbfbdefbfbd26efbfbd36efbfbd4676efbfbdefbfbd781eefbfbd5b0c1eefbfbd68efbfbd44efbfbd7877efbfbd49efbfbd633274efbfbd0c54efbfbd1cefbfbdefbfbdd598efbfbd18efbfbd1cefbfbdefbfbd3444cb817fefbfbd7aefbfbdefbfbdefbfbd09efbfbdefbfbdc399efbfbd78efbfbdefbfbd2436efbfbdc99eefbfbddfadefbfbdefbfbd02123eefbfbdd5937c71efbfbd26efbfbd64efbfbd3c1973602a6defbfbdefbfbdefbfbd1b282915efbfbd2a2eefbfbdefbfbd11efbfbdefbfbdefbfbdefbfbd32efbfbd07eba28a1defbfbd6d12efbfbdefbfbd7a68efbfbd04efbfbd2aefbfbd58184befbfbdefbfbdefbfbd7e1cefbfbdefbfbd60efbfbde28da6efbfbdefbfbd6cefbfbd626e0732efbfbdefbfbdefbfbd6eefbfbd74efbfbd273113efbfbdefbfbd1c00efbfbdc6b842560ac4814a64efbfbdd88c54efbfbd221cefbfbd09efbfbdefbfbd0751efbfbd2cefbfbdefbfbd5eefbfbd4d1aefbfbd40efbfbd70431defbfbd73efbfbd0c1defbfbd0fefbfbdefbfbdc783036eefbfbdefbfbdefbfbdefbfbdefbfbd132160efbfbd7425efbfbd4c6defbfbd09125cefbfbdefbfbdefbfbdefbfbdefbfbd29f098bc933b7225efbfbd776b7eefbfbd2e4f6cefbfbd74efbfbd1befbfbd38efbfbd4defbfbdefbfbdefbfbd17efbfbd2b261e2b5512efbfbd046c0f1d0fefbfbdefbfbd570c32efbfbdefbfbdefbfbdefbfbdefbfbd4befbfbdefbfbd11180eefbfbd39efbfbddeb4efbfbd72efbfbdefbfbdefbfbd67efbfbd29efbfbd7eefbfbdefbfbd6cefbfbd65174eefbfbdefbfbd7c22efbfbdefbfbd78efbfbdefbfbdefbfbd38efbfbd6ecbb7efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd7aefbfbd3fefbfbded9bbbefbfbdefbfbdefbfbd21efbfbdefbfbdda9fefbfbdd497efbfbd32efbfbd69efbfbdefbfbd4968efbfbdefbfbd472514326fefbfbdefbfbdefbfbd5060efbfbd17efbfbd10687c7707efbfbd2b274b003e25efbfbdefbfbd19003c731c15efbfbdefbfbdefbfbdefbfbd14efbfbd7a12efbfbdefbfbd38efbfbdefbfbdefbfbdefbfbd7a1c49efbfbdefbfbdefbfbd55efbfbd607c38efbfbd7f32362aefbfbdefbfbd13efbfbd33efbfbdefbfbdefbfbdefbfbdefbfbdd48befbfbdefbfbd7800efbfbdefbfbd21deb5efbfbdefbfbd781cefbfbdefbfbd0cefbfbd72efbfbd184befbfbd5befbfbd7e24efbfbdefbfbd697fefbfbde29f9bc7a4efbfbd6d6befbfbde3aa85efbfbd0befbfbdefbfbdefbfbd6defbfbd7a2677efbfbd7eefbfbdefbfbdefbfbd76efbfbdefbfbd72efbfbdefbfbdefbfbd4a20efbfbd051355efbfbd5a4f0e5e5973efbfbd12efbfbdefbfbdefbfbd457a32671a497befbfbdefbfbdefbfbdefbfbd7befbfbdefbfbd5defbfbd72efbfbd15efbfbd65efbfbdefbfbdefbfbd5c2336efbfbdefbfbd2471ef8dad1defbfbd50efbfbd2eefbfbd170819efbfbdefbfbdefbfbd38587a66efbfbd76efbfbd58efbfbdefbfbdefbfbdefbfbde0b99440efbfbdefbfbdefbfbdefbfbd51067831efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd4e65efbfbdefbfbd6b5709efbfbd68c9ba60efbfbd326defbfbd72093d18efbfbd2c13efbfbd06efbfbd3839efbfbd75efbfbd7074d58b136cd1beefbfbd75efbfbdefbfbdefbfbd57d59cefbfbd7917efbfbd0a75372a215befbfbdefbfbd1fefbfbdefbfbdefbfbd6befbfbdefbfbdefbfbdefbfbdefbfbd000befbfbdefbfbdefbfbd397362efbfbdefbfbdefbfbd17efbfbd293befbfbd4cefbfbdefbfbd36efbfbdefbfbdefbfbdefbfbd3a5cefbfbdefbfbd50efbfbd72036d5a0aefbfbd2befbfbdefbfbd42efbfbd50efbfbdefbfbd047defbfbd60314a2455efbfbdefbfbdefbfbdefbfbd165eefbfbd2cefbfbd1576efbfbdefbfbd2aefbfbd40efbfbd0befbfbd36efbfbdefbfbd3a0922efbfbdefbfbd4015efbfbd0e6aefbfbdefbfbdefbfbdd5baefbfbd367440efbfbdefbfbdefbfbdefbfbdefbfbd7c50efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd06efbfbdefbfbd154aefbfbd67557b226d05efbfbdefbfbdefbfbd58efbfbdefbfbd50efbfbd73efbfbdefbfbd48efbfbd1aefbfbd4849efbfbd7334efbfbd3cefbfbd30595bd18c0defbfbd20efbfbd63efbfbd75efbfbdefbfbdefbfbd6918efbfbd4cefbfbd2befbfbd00efbfbd53d28f2c47efbfbdefbfbd36efbfbdefbfbdefbfbd4fefbfbdefbfbd61efbfbdefbfbdefbfbdefbfbd19efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd50efbfbd15efbfbdc7842537efbfbd151256793032efbfbdefbfbd4fefbfbdefbfbd6fefbfbd14efbfbd050cefbfbd28efbfbd00efbfbd20efbfbdefbfbd1b76efbfbd30efbfbdefbfbdefbfbdefbfbd5b304e64efbfbdefbfbdefbfbd5fefbfbdeeae8fefbfbdefbfbdefbfbdefbfbd0931621bdbab72efbfbdefbfbdefbfbdefbfbd2859efbfbdefbfbdefbfbdd6ae77efbfbdefbfbdefbfbd4e21efbfbd64efbfbd2058efbfbd0defbfbdefbfbd32c3ab77efbfbd06efbfbdefbfbd5befbfbdefbfbdefbfbdefbfbd6d7eefbfbdefbfbd3e50efbfbdefbfbdefbfbd26efbfbd0fefbfbd7fefbfbd6313efbfbdefbfbdefbfbd1071605a5cefbfbdefbfbd4eefbfbd197fefbfbd6e340fefbfbd33efbfbd1fefbfbd4e56efbfbdefbfbd6befbfbd74efbfbd66efbfbd63efbfbd55efbfbd0702efbfbd1b0116d0a3efbfbdefbfbd76efbfbd586aefbfbdefbfbdefbfbd7cefbfbd6f4b5e0fefbfbd4622d7bbefbfbdefbfbdefbfbdcbba55efbfbdefbfbdefbfbd38efbfbd07efbfbdefbfbdefbfbd2fefbfbd5b4e524f0defbfbd2950efbfbdefbfbd7aefbfbd601cefbfbdefbfbdefbfbd202befbfbd5e1e415f7316efbfbdefbfbdc4a8efbfbdefbfbd6eefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd4431dcb076efbfbdefbfbd725d1d5defbfbd435d277d18cab2efbfbdefbfbd1eefbfbd416352efbfbd5a4c0cefbfbdefbfbd2539efbfbd4aefbfbdefbfbd124eefbfbdefbfbdefbfbdefbfbdd6bdd88a6d3eefbfbd732befbfbdefbfbdefbfbdefbfbd4652591064efbfbd78efbfbdefbfbdefbfbd763f40efbfbdefbfbd23636aefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd32efbfbd15c2b4efbfbd3c04455162efbfbd35efbfbdefbfbdefbfbd49efbfbd3c78efbfbdefbfbd50ccbb46efbfbd7befbfbd7eefbfbd7b7c6eefbfbd4aefbfbd6d16efbfbdefbfbd0e6721efbfbdefbfbd10efbfbd43efbfbd4452efbfbd6430efbfbd32efbfbdefbfbd08efbfbdefbfbd530602efbfbd7eefbfbd73efbfbdefbfbdefbfbdefbfbdefbfbd0e711f11efbfbdefbfbdefbfbdefbfbd2e505030efbfbdefbfbdefbfbdd99765d2b0791b32efbfbdefbfbd54efbfbd07efbfbd7fefbfbd64efbfbd386c2befbfbd74efbfbdefbfbdd8867c717e7215efbfbd4a25efbfbd305d3a59efbfbdefbfbd2fefbfbd767fefbfbd325befbfbd49efbfbdefbfbd2befbfbd273aefbfbdefbfbdefbfbd4defbfbdefbfbd5d6c74efbfbd77efbfbd60536a724977efbfbd156e1959efbfbdefbfbd2a73efbfbd1d78575b5858efbfbdefbfbdefbfbd54080a64efbfbd7679efbfbdefbfbd06efbfbdefbfbd53efbfbd6a4eefbfbdefbfbd43efbfbdefbfbd48efbfbd38110fefbfbd6eefbfbd2470efbfbdefbfbd4befbfbdefbfbdefbfbd2b29093f2eefbfbdefbfbd133f5befbfbdefbfbd1defbfbdefbfbdefbfbd573c506c3a7e18151d4203efbfbdefbfbd114f47efbfbd2f74efbfbdefbfbd6defbfbdefbfbd534751c48b2e5a3c4f715befbfbd304012efbfbd317801efbfbdefbfbd43efbfbdefbfbd0defbfbd160d38efbfbdd78c62efbfbdefbfbd6a4a28d294efbfbd09efbfbd2e7d2fdc88efbfbd6d13efbfbdefbfbdefbfbdefbfbdefbfbd3e77efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd3b7654efbfbd2a1f73efbfbd4aefbfbd2b29efbfbdefbfbd10efbfbdefbfbd37efbfbd50c791536fefbfbdefbfbdefbfbdefbfbd2fefbfbd64efbfbdefbfbd3d59efbfbd71efbfbdefbfbd2befbfbdefbfbd2fefbfbd273f3644efbfbd69efbfbd015734efbfbd23efbfbdefbfbd4fefbfbdefbfbd00efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd15efbfbdefbfbdefbfbdefbfbdefbfbd5eefbfbdefbfbd1702efbfbd64efbfbd3d3befbfbd27efbfbddcb8efbfbd2defbfbd3c7413efbfbdefbfbd43efbfbdefbfbd17efbfbd51efbfbd2e2272efbfbd4befbfbdefbfbd27481b1876efbfbdefbfbdefbfbdefbfbd7f18efbfbdefbfbd4fefbfbd365defbfbd65efbfbdefbfbdefbfbdcaa20f38547eefbfbdefbfbd2e20622ad19eefbfbd64efbfbd76efbfbdefbfbdefbfbd7f6727efbfbdefbfbd25efbfbd4c5c2944c480efbfbd2173efbfbdda847fefbfbd04efbfbdefbfbd405cefbfbd33efbfbd09efbfbdefbfbdc280efbfbdd2b559efbfbd714c3b263352efbfbd407fefbfbd50efbfbd7935efbfbd60efbfbd5504efbfbd10efbfbd5e0bd8a41b5e1a1761efbfbd3828efbfbd6a6defbfbd4d46efbfbd24efbfbdefbfbd446aefbfbdefbfbdefbfbd1f74efbfbd6d3461e39e8eefbfbdce8eefbfbd34efbfbdefbfbdefbfbdefbfbd187215efbfbdefbfbd36efbfbdefbfbd02efbfbd0367efb29e7cefbfbd3defbfbd2750304c62234a7eefbfbdefbfbd4e4729efbfbd017a79efbfbd39efbfbd60efbfbd0fefbfbdefbfbd59efbfbdda96efbfbd01efbfbdefbfbdefbfbd78efbfbdefbfbd0901efbfbd4aefbfbd1550efbfbd4defbfbdefbfbd5d1f6e52efbfbdefbfbd320569efbfbd77efbfbdefbfbd367702443fefbfbdefbfbdefbfbdefbfbdefbfbd4defbfbdefbfbd715002efbfbdefbfbd1aefbfbdefbfbdefbfbd1eefbfbd2eefbfbdefbfbd57efbfbd0defbfbdefbfbd4f20efbfbd12efbfbdefbfbdefbfbdefbfbdeab198602e41efbfbdefbfbdefbfbdefbfbd5d45efbfbd3764efbfbdefbfbdefbfbd681048efbfbdefbfbdefbfbdefbfbdefbfbd4211797341efbfbdefbfbd6b7ceab3b7efbfbdefbfbd1952efbfbd3d3bceb7e69eb712efbfbd6cefbfbd4841efbfbdefbfbdefbfbd75efbfbd19cfb5efbfbd71efbfbdefbfbdefbfbd7aefbfbd49efbfbdefbfbdefbfbdefbfbdefbfbd6defbfbd2535571c44efbfbdefbfbdefbfbd4fefbfbdefbfbd48efbfbd5052efbfbd40efbfbd523f691defbfbd551c30efbfbd7449efbfbdefbfbd1defbfbd12d4b52e7474efbfbd6aefbfbd1cefbfbd57201cc9b54769efbfbdefbfbdefbfbd22efbfbdefbfbd6fefbfbd6f151661efbfbdefbfbd6d2eefbfbdefbfbd4c5fefbfbdefbfbd5e341eefbfbd3a5fefbfbd063f57efbfbd46efbfbdefbfbd4d6aefbfbdefbfbdefbfbd2befbfbdefbfbdd7a36eefbfbd7f0d026eefbfbdefbfbd67efbfbd50efbfbd33477d5fefbfbd056531efbfbd2befbfbdefbfbd236930efbfbdefbfbd0852efbfbdefbfbdefbfbd06efbfbdefbfbdefbfbdefbfbdefbfbdc3856cefbfbd175736efbfbdefbfbdefbfbd1e1eefbfbdefbfbd1153efbfbdefbfbd79efbfbd764d0c58015eefbfbd1aefbfbd044040efbfbd4609efbfbd6f1f570fefbfbdefbfbdefbfbd166e1900efbfbd6c72efbfbd01efbfbd7cefbfbd136f6727efbfbd10efbfbdefbfbd7cefbfbd36efbfbd2befbfbd1e10efbfbd08ce8e67efbfbd47efbfbd4364efbfbdefbfbdefbfbdefbfbd5cefbfbd7aefbfbdefbfbd79efbfbd041b5b01efbfbd7c0a6d6c2eefbfbd0fefbfbdefbfbd3a423427efbfbd4cefbfbdefbfbdefbfbdefbfbdefbfbd28efbfbd05efbfbdefbfbdefbfbd0befbfbd57efbfbdefbfbdefbfbd4235efbfbd6856efbfbd593a7f4f0defbfbdefbfbd7c09023defbfbd7cefbfbd2a2104e4a4a002dda46befbfbd6955efbfbd084cefbfbd29efa793efbfbdefbfbd00643a0821efbfbd10efbfbdefbfbdefbfbd66efbfbd64efbfbdefbfbdefbfbdefbfbdefbfbd1349efbfbd0731d990efbfbd11efbfbdefbfbd000c4cefbfbd5776605f555661efbfbd063737efbfbdefbfbd1eefbfbd5d457cefbfbd16efbfbd0849efbfbd48efbfbdc59b2fefbfbd6e3e2cefbfbd3039efbfbdefbfbdefbfbd5b2d6cce9c414befbfbdefbfbdefbfbdca94efbfbd4219efbfbd4b4b12efbfbdce83efbfbdefbfbdefbfbd7befbfbd4eefbfbd7befbfbd5eefbfbdefbfbdefbfbdefbfbd64efbfbd56efbfbd36efbfbd3d475652efbfbdefbfbdefbfbd782561267406efbfbdefbfbdc59befbfbd60efbfbdefbfbd1cefbfbd54efbfbd197d6a0befbfbd0d67efbfbd00efbfbd4cefbfbd45efbfbd6f6aefbfbd2b481cefbfbdefbfbdefbfbdefbfbdefbfbded9ba20cefbfbd2eefbfbd026f346d64d7ad606aefbfbdefbfbd7578efbfbd25efbfbdefbfbd49efbfbd6eefbfbd2415efbfbd2befbfbd3d332eefbfbd14efbfbd5defbfbd6e05efbfbd1eefbfbd3befbfbd19efbfbdefbfbd0c71efbfbd3cefbfbd10557f54efbfbdefbfbd582fefbfbdefbfbd1759597eefbfbd5befbfbdefbfbd7c2defbfbdefbfbdefbfbd3a6d7e0ddaa9c588d4847fefbfbdefbfbdefbfbd2f6e0defbfbd11efbfbdefbfbd67efbfbdefbfbd3b70efbfbd62efbfbd067f310fefbfbdefbfbd72efbfbd77efbfbd75efbfbd0eefbfbdefbfbd23234a3b68efbfbdefbfbd21790fefbfbdefbfbdefbfbd2f396613efbfbd42381eefbfbdefbfbdefbfbd55efbfbdefbfbdc48027efbfbdefbfbdefbfbd1befbfbdefbfbd73efbfbd780d7543636855efbfbdefbfbd723c68efbfbd0b3aefbfbde4b7a4275632efbfbd353a12efbfbd565fefbfbd271729efbfbd7defbfbd70efbfbdefbfbd4a7800efbfbd1defbfbdefbfbdefbfbd56efbfbd42efbfbd2b274655efbfbd7aefbfbd1f4eefbfbd5e203006462132527034efbfbdefbfbd4b717178efbfbd39efbfbd67efbfbd2259efbfbdefbfbdefbfbddd82efbfbd0517efbfbdd7a11aefbfbdefbfbd13efbfbdefbfbdefbfbdefbfbd4650efbfbdefbfbd531c40efbfbd6e2f6d1c2f43246653efbfbdefbfbd05efbfbd0f0cefbfbd0d1befbfbdefbfbdefbfbd691f36efbfbdefbfbdefbfbdefbfbd3eefbfbdefbfbd16efbfbd4aefbfbdefbfbd53d291efbfbd6eefbfbdefbfbdefbfbdefbfbdefbfbd1528d38eefbfbd0453efbfbd5fefbfbd7f01e7b0a215d589efbfbd3638efbfbd72efbfbdefbfbd0befbfbd26efbfbd0b565d3759efbfbdefbfbd281a73efbfbdefbfbdd58befbfbd7fefbfbd715662777defbfbd151fefbfbdefbfbd5f1c2e5e345269ee8488efbfbd5706efbfbd13efbfbd796e53efbfbdefbfbdefbfbd4aefbfbd5aefbfbdefbfbdefbfbdefbfbdefbfbd28efbfbdefbfbd1827efbfbdefbfbd1defbfbdefbfbd3aefbfbdefbfbdefbfbdefbfbd51efbfbdefbfbd0defbfbdefbfbdefbfbdca9272efbfbdefbfbdeca2ad3a052c444aefbfbd4c1cefbfbd7aefbfbdefbfbdefbfbd0d19efbfbd50efbfbd3850efbfbd00efbfbd72efbfbd720914efbfbd16efbfbd0b00efbfbdefbfbdefbfbd0a6fefbfbdefbfbd64efbfbd4e47efbfbdefbfbd30efbfbdcc83efbfbdefbfbdefbfbdefbfbd3b3a2b00efbfbd1f7fefbfbd2e2834efbfbd0206efbfbdefbfbdefbfbd77efbfbd6d4eefbfbd59efbfbdc98c1aefbfbdefbfbdefbfbd79efbfbd5a5d4d620befbfbd664cefbfbd3926efbfbdefbfbd2de3b792efbfbd49643b312a5610efbfbd26efbfbdefbfbdefbfbd1a77efbfbdefbfbd2e30efbfbdefbfbd734defbfbd19efbfbdefbfbdefbfbd57efbfbdefbfbd0b34efbfbdefbfbdefbfbdefbfbd0defbfbdefbfbdefbfbd130defbfbdefbfbdefbfbdefbfbd29efbfbdefbfbdefbfbd2defbfbdefbfbd5748efbfbdefbfbdefbfbdefbfbd7c3c7679efbfbd7d5befbfbdefbfbd370d40efbfbd14393f31efbfbdefbfbdefbfbd1203dca83c331540efbfbd65efbfbd705355efbfbdefbfbddb900cefbfbdefbfbdefbfbdefbfbdefbfbd0b2630efbfbd62792eefbfbdc990044e60efbfbd664ad99c0c34efbfbdd3b50e0b7aefbfbd34efbfbd0a00efbfbd5c06efbfbdefbfbddd84efbfbd7d69efbfbd2aefbfbd5804efbfbdefbfbd6f71c5b232efbfbd6a7c0412efbfbd6defbfbdefbfbd21012a2069efbfbd636d44efbfbd69efbfbdefbfbdefbfbd22efbfbd1c14efbfbd4b63efbfbd31efbfbd6204360befbfbd73efbfbd64efbfbd525341efbfbdefbfbdefbfbdefbfbdefbfbd20efbfbd73efbfbdefbfbdefbfbdefbfbd440157efbfbd414cefbfbdee9bb12aefbfbdefbfbdefbfbdefbfbd09727408efbfbdefbfbdefbfbd035fefbfbd37efbfbdefbfbdefbfbd46efbfbdefbfbd024fefbfbd49d5a30e662defbfbdefbfbd650cefbfbdefbfbd561cefbfbd190552efbfbdefbfbd3defbfbd320defbfbdefbfbdefbfbd08efbfbd28c4a0efbfbd2678696cefbfbdefbfbd57efbfbdefbfbd4aefbfbd250eefbfbdefbfbdefbfbd293b052adf932ed891efbfbd41efbfbd4f1cefbfbd47efbfbdefbfbd3d08efbfbd0258efbfbdefbfbd0cefbfbd2fefbfbdefbfbd7cefbfbd3befbfbdefbfbdefbfbd0170efbfbdefbfbd540d2cefbfbdefbfbdefbfbd20efbfbdefbfbd70efbfbdefbfbdefbfbdefbfbdefbfbd7705efbfbd38efbfbd383cefbfbdefbfbdefbfbd622fefbfbdefbfbd55efbfbd1063efbfbd433a65efbfbd67efbfbdefbfbd780a72efbfbd39efbfbd73efbfbd4c5b036f47efbfbd3675efbfbd05efbfbdefbfbd65202defbfbd35efbfbd7fefbfbd2372efbfbd0471efbfbdefbfbd1f01106929efbfbd011b7b6f01efbfbd51efbfbd79efbfbdefbfbdefbfbd14582852efbfbdefbfbdefbfbdefbfbd4aefbfbd165937efbfbdefbfbd78176d054defbfbd18efbfbd14efbfbd6d5f1941efbfbd02efbfbdefbfbdefbfbdefbfbd64c48f4522efbfbdefbfbdefbfbd07efbfbdefbfbd632972efbfbd011cefbfbd4eefbfbdefbfbd2462efbfbd1c4731efbfbdc99e76efbfbd1550104969efbfbd5cefbfbdefbfbdefbfbd67d6b0efbfbd12300859efbfbdefbfbdefbfbd7412efbfbd36efbfbdefbfbd2bc8a76a1574efbfbd477aefbfbdefbfbdefbfbd65062b376a20244defbfbdefbfbdefbfbd563aefbfbd3d1c17efbfbd5b39efbfbdcbb3efbfbd0d4e2e0402efbfbdefbfbdefbfbd2aefbfbdefbfbdefbfbdefbfbd11efbfbd43efbfbd67efbfbdefbfbd3c056f5361176b76efbfbd47efbfbd50efbfbd1cefbfbdefbfbdefbfbd5befbfbd55efbfbdefbfbd27efbfbd70efbfbd4c3131efbfbd27efbfbdefbfbdefbfbd1d28efbfbdefbfbd24efbfbdefbfbd58efbfbdefbfbd56efbfbd497eefbfbd54efbfbd47efbfbdefbfbd494331efbfbd445defbfbd03efbfbdefbfbdefbfbd4e39efbfbd1339efbfbd6cefbfbd1cefbfbd31efbfbdefbfbd7fefbfbd506befbfbdcf8b0c52efbfbd26c6a5efbfbd1cefbfbdefbfbd0c27efbfbdefbfbde3b6940e0cca8b2f2fefbfbdefbfbd374b65efbfbd7d04efbfbd7347efbfbd02707f21156d15efbfbd73efbfbd1befbfbdefbfbd5c4743efbfbdefbfbdefbfbd351befbfbdefbfbd71efbfbd7c00efbfbd2befbfbd78411fefbfbd03065566efbfbd0b1e71efbfbd44efbfbdefbfbdefbfbd6939014e3b71efbfbdefbfbdefbfbd634e1819ea8a81c3a67fefbfbd3a1c20efbfbdefbfbd183fd483efbfbd5d5e40efbfbd3defbfbdefbfbd11efbfbd21efbfbdefbfbd695a3909efbfbd452679efbfbd48efbfbd07efbfbd0631efbfbdefbfbd4befbfbdefbfbdefbfbd23efbfbd52efbfbdefbfbdefbfbd7c3bd182efbfbd62efbfbdefbfbdefbfbd4406cca4efbfbdefbfbdefbfbd231e17efbfbdefbfbdefbfbd012556efbfbd184174efbfbd7befbfbd3ddd8112efbfbd0defbfbd1718efbfbd204b0b2a34efbfbdc5a75defbfbdefbfbd62efbfbdefbfbd4d64c58e2f69efbfbd59295befbfbd42efbfbd495b21efbfbd345446efbfbdefbfbd1eefbfbdefbfbd2c31efbfbdefbfbdefbfbd5f4820646d3befbfbdefbfbd557332efbfbd3eefbfbdefbfbdefbfbdc8bf4647190eefbfbd54efbfbdefbfbdefbfbdefbfbd1441efbfbdefbfbd1934efbfbdefbfbd5aefbfbd6bd49d35efbfbd20efbfbd49efbfbd14efbfbdefbfbdefbfbdefbfbdefbfbd6f59640defbfbd792eefbfbdefbfbdd8a2c59defbfbd4eefbfbdefbfbd0f6fefbfbd5f60efbfbdefbfbdefbfbdefbfbd25efbfbd04efbfbd4defbfbd62efbfbdceadefbfbd2fefbfbdefbfbd58efbfbdefbfbd406fefbfbdefbfbd55efbfbdefbfbdefbfbd21017d754434efbfbd0fefbfbdefbfbd5d055befbfbd4aefbfbd5b79d9ab67efbfbd6cefbfbd14efbfbd1456efbfbdefbfbdefbfbd06794fefbfbd0347efbfbd0befbfbd4befbfbdd093cbbcefbfbd227f0506efbfbdef8bad6e7877efbfbd4011efbfbd6befbfbd353defbfbdefbfbd211f52efbfbd0721efbfbd5befbfbd0aefbfbd2eefbfbdefbfbde998902e021d5d0840efbfbdefbfbdefbfbd40efbfbd4b6ad8a24525efbfbd1414efbfbdefbfbd04efbfbd011522c598efbfbd473aefbfbd695003efbfbdefbfbd2b2defbfbdefbfbdefbfbd08efbfbdefbfbdefbfbdefbfbd72efbfbd1e0b64efbfbd75347f6e6144efbfbd292e0bccaeefbfbdefbfbdefbfbd79efbfbd343801efbfbd6809efbfbd1fefbfbd5d533aefbfbd2433efbfbdefbfbd35efbfbd07cda2efbfbdefbfbd06efbfbdefbfbd79efbfbdefbfbd4befbfbdefbfbd51efbfbd22efbfbdefbfbd43efbfbddc8aefbfbd31efbfbdefbfbd342eefbfbddf9fefbfbdefbfbdefbfbd1eefbfbdefbfbd4defbfbdefbfbdefbfbd31efbfbd73efbfbdefbfbdefbfbdcc8639c59cefbfbdefbfbd407a7613efbfbdefbfbdefbfbd080aefbfbd2defbfbd7041efbfbddb8715efbfbd760eefbfbd0b50efbfbdefbfbd2066187432efbfbdefbfbdefbfbd7a21efbfbdefbfbdefbfbd596aefbfbd1a3a27c9a2efbfbd16d8881074efbfbdefbfbd5fefbfbdefbfbd78efbfbd78efbfbdefbfbd1712221d07efbfbdefbfbdefbfbd5364efbfbd62efbfbd2a196fefbfbd35efbfbd7aefbfbd6a69efbfbdc79b4f03efbfbd122557efbfbd3c290059efbfbd25efbfbd64efbfbd7defbfbdefbfbde9978cefbfbd6c194064697aefbfbd29efbfbd704fefbfbd68454e6874efbfbdefbfbd6156efbfbd49efbfbdefbfbd0070efbfbdefbfbd1a640fefbfbd2b4eefbfbd79efbfbdefbfbd54efbfbd0bc6a83e12efbfbd7a5eefbfbdefbfbd71efbfbdefbfbdefbfbdefbfbdefbfbd00cd814f6339efbfbd04efbfbdefbfbdefbfbd7fefbfbdefbfbdefbfbd4defbfbdefbfbdefbfbdefbfbd515117efbfbd69eb99b1efbfbdefbfbd4003efbfbd702223efbfbd25efbfbd4defbfbdefbfbdefbfbd09efbfbdefbfbd57efbfbd06efbfbd26efbfbdefbfbd523eefbfbd3415385befbfbdefbfbd4defbfbdefbfbd27555d52efbfbd62efbfbdefbfbde3ba89efbfbdec98a06f7aefbfbd4aefbfbd50efbfbdefbfbdc3a76fefbfbd1c2fefbfbdc2af7defbfbd0defbfbd3befbfbd7eefbfbdefbfbdefbfbdefbfbdefbfbd49714c21efbfbd23efbfbdefbfbd154befbfbd59efbfbd2befbfbd3c03efbfbdefbfbd765c7b716765efbfbd38efbfbdefbfbdefbfbd432f121971efbfbdefbfbdefbfbdefbfbd55efbfbdefbfbd49086c155601291a7230380fd5852befbfbdefbfbdca93efbfbdefbfbd4d0befbfbdefbfbd0966636c10efbfbdefbfbd6158014306efbfbd19efbfbd63efbfbd24efbfbdefbfbd6befbfbd280334efbfbd73efbfbdefbfbd12cdb7efbfbd71551cefbfbd4eefbfbdefbfbd1befbfbd7fefbfbdca8822754aefbfbd31efbfbd1a1a4eefbfbdefbfbd432eefbfbd0bd3ba5fefbfbd1b403a36efbfbd244cefbfbd07efbfbdefbfbdefbfbd40efbfbdefbfbdefbfbd112fefbfbd622d4d6defbfbd794e7523efbfbddba8143eefbfbd33efbfbd56efbfbdefbfbdefbfbd7158c89d7cefbfbd2503efbfbd15274c7a0f7c0cefbfbd26357a0fefbfbd12ca8143daadefbfbdefbfbdefbfbd537478efbfbd540cefbfbd4d2cefbfbdefbfbd76efbfbd5445efbfbd5defbfbd767a45654defbfbdefbfbd13efbfbd54efbfbdefbfbd61efbfbd5e2fefbfbd6a2f596b7a11381c4befbfbdefbfbd5aefbfbd0fefbfbd24efbfbd0fefbfbd43efbfbd75efbfbd105c467033efbfbd1b6befbfbdefbfbd38efbfbd4fefbfbd0defbfbdefbfbdefbfbd45efbfbdefbfbdefbfbdefbfbd7a5cefbfbd51efbfbd05efbfbd7d42efbfbdefbfbddc9721efbfbdefbfbdefbfbd73efbfbd08317befbfbd163c14efbfbd042befbfbdefbfbdefbfbd2642efbfbdefbfbd2a7f37efbfbdefbfbdefbfbd093befbfbd47efbfbd2e13efbfbd02efbfbdefbfbd13efbfbd3c02efbfbd00efbfbd0a55efbfbdefbfbd5eefbfbdefbfbd01efbfbdefbfbd51efbfbdefbfbd48efbfbd37efbfbdefbfbd0c37efbfbdefbfbdefbfbd6118efbfbd39612453efbfbdefbfbd02efbfbd6d0b4c00c9b20a2cefbfbdefbfbd3144efbfbd09cab33942176d7b4e16efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbddb92efbfbdefbfbdefbfbd5defbfbd7aefbfbd2eefbfbdefbfbd59633eefbfbd34510f2470efbfbd0e7362efbfbd0f563002efbfbdefbfbd6d0befbfbdefbfbd2aefbfbd2aefbfbd0d7c17644defbfbddfa4403eefbfbd5defbfbdefbfbd27efbfbddb9eefbfbd06efbfbdefbfbdefbfbd6d417a5359716f7cefbfbdefbfbd0eefbfbd78efbfbd43d3a24276efbfbd3103efbfbd23751fefbfbd75efbfbd38efbfbd3cefbfbdefbfbdefbfbd07efbfbd5758efbfbd0d12763e3672efbfbdefbfbdca88efbfbdefbfbd2b7cefbfbd101defbfbd10efbfbd2eefbfbdefbfbdefbfbdd6baefbfbdefbfbd15efbfbdefbfbd4e22efbfbdc49befbfbdefbfbdefbfbd764befbfbdefbfbd31efbfbd5457efbfbd4778efbfbd3defbfbdefbfbd5978efbfbd4f116a231467efbfbdefbfbd4defbfbd502fefbfbdefbfbdefbfbd0765efbfbd36efbfbdefbfbd7eefbfbdefbfbd5c42dcaf592f5944d383efbfbd43efbfbdefbfbd21efbfbdefbfbd0befbfbd502cefbfbd2cefbfbdefbfbdefbfbd52efbfbd6cefbfbd78efbfbd381f09344defbfbd3aefbfbdefbfbd39efbfbdefbfbd716e07efbfbd1f58efbfbdefbfbd3c16efbfbd67efbfbd5c42efbfbdefbfbd2079550eefbfbd166fefbfbd4213efbfbdefbfbdefbfbd7f205cefbfbd7b7434efbfbd79641b452eefbfbd42efbfbdefbfbd14efbfbd2feaaa8d350705efbfbdefbfbd40efbfbdefbfbd26594e18efbfbdefbfbd2815efbfbdefbfbdefbfbdcd833f1722efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd123b2b0979efbfbdc2a2efbfbdefbfbdefbfbd78efbfbdefbfbdefbfbdefbfbd44efbfbd6cefbfbd02efbfbdefbfbd4d713aefbfbdefbfbd6b4753efbfbd252fefbfbd1911efbfbd2926efbfbd12efbfbd16094eefbfbdefbfbdefbfbdefbfbdefbfbdd598efbfbdefbfbd2a171defbfbd73efbfbdefbfbd3e15efbfbd121100efbfbdefbfbd2cefbfbd3456efbfbd5a4201efbfbd6705efbfbdefbfbd4c13efbfbd43efbfbdefbfbd0e66efbfbdefbfbdefbfbdefbfbd6defbfbdefbfbdefbfbd64efbfbd03efbfbd7eefbfbd046fefbfbdefbfbd3cefbfbdefbfbdefbfbdefbfbd0e7d2d7e1fefbfbd79415fd58d06efbfbdefbfbd3cefbfbd220d7befbfbd5fefbfbdefbfbdefbfbd31efbfbdefbfbd7121efbfbd6befbfbd2573efbfbdefbfbdefbfbd72efbfbd5b73efbfbdefbfbdefbfbd2edfaf31efbfbdefbfbdefbfbdefbfbdefbfbd1defbfbdefbfbd09efbfbdefbfbdefbfbd3cefbfbdefbfbdefbfbdefbfbd28efbfbd193befbfbdefbfbd79e7aa92efbfbd64efbfbdefbfbdefbfbd7f0eefbfbdefbfbd58efbfbd10c5b1010e4f3cefbfbd50efbfbdefbfbd593269efbfbd4cefbfbdefbfbdefbfbd5f0071efbfbd32efbfbdefbfbd4d0defbfbdefbfbdefbfbd0f1e51efbfbd7763efbfbd7fefbfbd6cefbfbd0762efbfbd27efbfbd78efbfbd08d1947befbfbdefbfbd7d5b0cefbfbd60e2b891c2be141aefbfbdefbfbd70efbfbdefbfbd76efbfbdefbfbd066b3defbfbdefbfbdefbfbd3d7cefbfbd6103efbfbd0471efbfbdefbfbd7942576aefbfbd195570efbfbdefbfbd202266efbfbd2cefbfbd4c1a15efbfbd6a1befbfbdefbfbdefbfbd39495c4f1aefbfbdefbfbdefbfbdefbfbd06efbfbdefbfbd362fefbfbd6eefbfbd5d7865eb9da91500efbfbd3275efbfbdefbfbd57efbfbdefbfbd40c99befbfbd1cefbfbd4958efbfbdefbfbd516861efbfbdefbfbd60efbfbdefbfbd6eefbfbd69efbfbdefbfbdefbfbd042d0d3e6f06efbfbdcba562efbfbd3402efbfbd5c73efbfbdefbfbd53313d576825005cefbfbdd7b1efbfbd24efbfbd5f5fefbfbdefbfbd1eefbfbd0d655612321e63efbfbdf2818fbe52210c4a5fefbfbd7b5fefbfbd5a080defbfbdefbfbdefbfbd27efbfbdefbfbd13efbfbd3eefbfbd1b23d994efbfbd6b76efbfbd1b19da96efbfbd502defbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd5cefbfbd19efbfbdd79f0befbfbd233b4eefbfbdefbfbd72efbfbd68efbfbdefbfbdefbfbd0d0defbfbd0a3c75763befbfbd6defbfbdefbfbd00efbfbdefbfbdefbfbd00efbfbd5d6c5a5befbfbdefbfbd7befbfbd5575efbfbd196861efbfbd7900efbfbdefbfbd6aefbfbd25efbfbd4a07efbfbdefbfbdefbfbdefbfbd33df8e0b11efbfbd2628efbfbd6defbfbd22772763efbfbd02764aefbfbdefbfbdefbfbdefbfbdefbfbd46061f4ecf99efbfbd4b7565efbfbd24efbfbd45deaaefbfbdefbfbdefbfbd19efbfbdefbfbdefbfbd18efbfbdefbfbd2c48177cefbfbd4a5403efbfbd13efbfbd1befbfbdefbfbd03efbfbdc6b77176176aefbfbd2f11efbfbd5aefbfbdefbfbd7fefbfbdefbfbd6c7fefbfbdefbfbdefbfbdd3ad11efbfbdefbfbd41efbfbd2defbfbd3c1610204262efbfbd36efbfbd035106efbfbd436d666fefbfbdefbfbdefbfbd38efbfbdefbfbddbb7efbfbdefbfbd62727aefbfbd791c136fefbfbdefbfbdefbfbd4453efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd5245efbfbd22efbfbdefbfbd41395defbfbdefbfbdefbfbd6eefbfbdefbfbdefbfbd4befbfbd766ad38aefbfbdefbfbdefbfbd76efbfbd7e25efbfbdefbfbdf187be92efbfbdefbfbd43efbfbdefbfbdefbfbd2cefbfbdc5aa4b34037c06efbfbdefbfbd41efbfbd2f416a0befbfbdefbfbdefbfbd70efbfbd1217efbfbdefbfbd4b30354d5343d693efbfbdefbfbd646372efbfbd227e45efbfbdefbfbdefbfbd0154efbfbd02efbfbdefbfbd542aefbfbd69efbfbd2b045353efbfbd0425efbfbdefbfbd44efbfbd5f7362324560797a65efbfbdefbfbd2a52efbfbd097403efbfbd4fefbfbdefbfbd277940efbfbd40efbfbd0d78efbfbdefbfbdefbfbdefbfbd2aefbfbdefbfbd67efbfbdefbfbd28efbfbdefbfbd0d69615869efbfbd6a5cefbfbd54efbfbd2528efbfbdefbfbdefbfbd7262efbfbd2aefbfbd48efbfbd28efbfbdefbfbd64efbfbd24226eefbfbd2c4f4aefbfbd57efbfbd24efbfbd5f465b7e66efbfbd37efbfbd60c28333efbfbdefbfbdefbfbd34efbfbd29efbfbdefbfbdefbfbd2a5befbfbdefbfbd3eefbfbd4aefbfbdefbfbd16091c63efbfbd617a503655efbfbd391c71efbfbd4eefbfbdefbfbdefbfbd70efbfbd5d59221eefbfbd4d24efbfbdefbfbd4c076fefbfbdefbfbd44efbfbd6979efbfbd66600d30efbfbd2c0a05efbfbdefbfbd556477efbfbdefbfbd2fefbfbd6e18efbfbd1e19caaa5b2540743eefbfbd7aefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd303452efbfbdefbfbdefbfbd4befbfbdefbfbdefbfbdefbfbd5defbfbdefbfbd1277efbfbdefbfbd61efbfbd2befbfbd4819072d1d604221df91efbfbd606befbfbdefbfbdefbfbd6c25efbfbd0befbfbd3176efbfbdefbfbd62446a4e0b7befbfbdefbfbd0eefbfbd4fefbfbd06efbfbd7f0879066934353f525fefbfbd73efbfbdefbfbdc292efbfbdefbfbd21efbfbd4a2f1aefbfbdefbfbd51efbfbdefbfbd19efbfbdefbfbd7910efbfbd36efbfbdefbfbd703e50efbfbdefbfbd08642aefbfbd39d386732cefbfbdefbfbdefbfbdd2b37837efbfbd1f34efbfbdefbfbdefbfbd347c54efbfbdefbfbd0f2b1f58006eefbfbd6f3befbfbd0fefbfbd1fdabfeea98defbfbd72efbfbdc284efbfbd353654efbfbdefbfbd096defbfbd02efbfbd52c889efbfbdefbfbd14efbfbd1a21efbfbd3e10645cefbfbd05efbfbdd7bfefbfbdefbfbd35efbfbd5c671fefbfbdefbfbd64efbfbdefbfbd0befbfbdefbfbdefbfbdefbfbdefbfbdefbfbd42772517294fefbfbdefbfbd55efbfbdefbfbdefbfbdefbfbdefbfbd3cefbfbd23efbfbdefbfbd40efbfbd363c195aefbfbdefbfbd4171efbfbdefbfbdefbfbdd6866defbfbd2e3d626971345818efbfbd3757100e0c26186632675d32efbfbd5e313253efbfbd48efbfbd68d98c49efbfbdefbfbd5956efbfbd07126e42efbfbd38efbfbdefbfbdefbfbd313c6aefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd5eefbfbdcdabefbfbdefbfbd0a01efbfbdefbfbd6eefbfbdefbfbdc78defbfbd51efbfbdefbfbdefbfbd137a36ceafefbfbdefbfbd66efbfbd460037efbfbdefbfbd1215efbfbd10efbfbdefbfbdefbfbd385e173eefbfbdefbfbdefbfbdefbfbd1a541fefbfbd47432e2befbfbd61efbfbd20efbfbd27efbfbdefbfbd68efbfbdefbfbd1cefbfbd4eefbfbdefbfbd4a4fefbfbdefbfbd0706efbfbdefbfbd03634aefbfbd05595fefbfbd1b573e29efbfbdefbfbdefbfbd2e2fefbfbd76efbfbd4e745cefbfbd4323efbfbd4defbfbdefbfbdefbfbdefbfbdefbfbd41037defbfbd733e0aefbfbd29efbfbd27efbfbd6b1fefbfbdefbfbd3fefbfbdefbfbd30efbfbd72efbfbd3146efbfbd0377efbfbd3eefbfbdefbfbd72efbfbd7befbfbdc28cefbfbdefbfbdefbfbd42efbfbd46efbfbd30efbfbdefbfbd61efbfbdefbfbd2aefbfbd21efbfbdefbfbd441aefbfbd3460efbfbdefbfbdefbfbd3a6eefbfbd134c6e7befbfbdefbfbd14efbfbd55efbfbdc2963119efbfbd69efbfbd65efbfbdefbfbd24efbfbd06dd8cefbfbdefbfbd7eefbfbd516aefbfbd2befbfbdefbfbd0311efbfbd14efbfbdddb55cefbfbd475fefbfbdefbfbdefbfbdefbfbd5befbfbd26efbfbd6cefbfbdefbfbd70efbfbdefbfbd7cefbfbdefbfbd2f1bd9835f6befbfbd287b07efbfbde2a99defbfbd16efbfbd4725efbfbdefbfbd5aefbfbd5eefbfbdefbfbdefbfbdefbfbd2a16efbfbd676cefbfbd4eefbfbd5aefbfbdefbfbd1b20efbfbd70efbfbdefbfbd145e5e6cefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd06463defbfbd592d3d5643efbfbdcc8f21efbfbd2e41efbfbd73efbfbdefbfbd42efbfbdefbfbd4defbfbd06efbfbd4640efbfbd774030efbfbd5eefbfbd6cefbfbdefbfbdefbfbd4d2e14efbfbdefbfbd76efbfbd00efbfbd0fefbfbd4fefbfbd473cefbfbd711befbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd3eefbfbd5bd7bcd483efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd39efbfbdefbfbdd2a95865567f660d35efbfbdefbfbd161cefbfbd66776befbfbdefbfbdefbfbdefbfbdefbfbd33efbfbdefbfbdefbfbdefbfbd49efbfbd0aefbfbd44efbfbd392d603eefbfbd750d51efbfbdefbfbd7eefbfbd48efbfbdefbfbdefbfbdefbfbdefbfbd1d5b506cefbfbd514276731cefbfbdefbfbdefbfbd411d2c60074320efbfbd1defbfbd0972efbfbd26efbfbdefbfbd6d5fefbfbd1ce98b9a1e77efbfbd3dd8906befbfbd48efbfbd7defbfbdefbfbd67efbfbdefbfbdefbfbd59efbfbd5453efbfbd5955efbfbdefbfbd3eefbfbdefbfbdefbfbd3e2f76efbfbd093aefbfbd304e1f7820efbfbd480b35efbfbd223a44efbfbdefbfbdefbfbdefbfbd42efbfbd6917efbfbd701945126aefbfbdefbfbd00efbfbd5e05efbfbd03efbfbd0c2cefbfbd2d7608efbfbdefbfbdefbfbd2cefbfbd5c42efbfbd2640efbfbdefbfbd7eefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd4043efbfbdefbfbd09efbfbd73d988efbfbd24efbfbdefbfbdefbfbd1f215a34efbfbd222befbfbd732550efbfbd5230efbfbdd481efbfbdefbfbdefbfbdc4b1efbfbd59efbfbd23efbfbd7defbfbd16efbfbd4fefbfbd5aefbfbd6663efbfbd4cefbfbd4befbfbd29efbfbd18720b744205efbfbdefbfbdefbfbdefbfbd4cefbfbdefbfbdefbfbd0cefbfbdefbfbd1edfbbefbfbd6228efbfbd4d7a561217efbfbd3aefbfbdefbfbd0d4cefbfbd5b6cefbfbdefbfbd4a0aefbfbdefbfbdefbfbd74efbfbdefbfbdefbfbd78efbfbdefbfbdefbfbd3420efbfbd022befbfbd747908efbfbdd190efbfbdefbfbdefbfbdc4810327efbfbdefbfbd7e0e34efbfbd0061efbfbd5aefbfbdefbfbdefbfbd09efbfbd543aefbfbdefbfbdefbfbdefbfbdefbfbd7befbfbd14efbfbd73efbfbd54efbfbdefbfbd082a00efbfbdc88cefbfbd0aefbfbd267befbfbdefbfbd3c132867efbfbdefbfbd78efbfbd78015cefbfbdefbfbd28efbfbdefbfbd5dd387727c5fefbfbd4771c2a7efbfbdefbfbdefbfbddca7efbfbdefbfbdefbfbdefbfbd3b2939efbfbdefbfbd4aefbfbd7d290c65efbfbdefbfbd6a402636efbfbd0befbfbd304befbfbd0b6de991b1efbfbd583027efbfbd08efbfbdefbfbd0228efbfbd77efbfbdefbfbdefbfbdefbfbd011cefbfbd312e02efbfbdefbfbdefbfbd7eefbfbd30710f5f1945cbabefbfbd581f3aefbfbd524656efbfbd2177efbfbdefbfbdefbfbd034defbfbdefbfbd377636efbfbdefbfbdefbfbddcb6efbfbd2cefbfbdcdadefbfbd4b75efbfbdefbfbdefbfbd74366739efbfbdefbfbd6d234eefbfbd262aefbfbd45efbfbd2e557e52d5bb4defbfbd734672efbfbd64efbfbd05efbfbd5cefbfbd43efbfbd501eefbfbdefbfbdefbfbdefbfbdefbfbd01efbfbdefbfbdefbfbd73efbfbd1948454025efbfbd10efbfbd19efbfbdefbfbdefbfbd3defbfbd5ac9ae595defbfbd1e0a01efbfbd6aefbfbdefbfbd68efbfbdefbfbdefbfbd7d1334601c16efbfbd09380defbfbd64efbfbdefbfbdefbfbdefbfbd50efbfbd5fefbfbdefbfbd655934efbfbdefbfbd146eefbfbd7a3defbfbdefbfbd0553efbfbd6635243b4f73efbfbdefbfbd2cefbfbd2149d69438efbfbd22efbfbdefbfbd7214efbfbde5a384efbfbdefbfbdefbfbd0befbfbdca9befbfbd2defbfbd18efbfbd6c53efbfbd59efbfbdefbfbdefbfbdefbfbdefbfbdd085efbfbd670523efbfbdefbfbd1aefbfbdefbfbd16efbfbd3cefbfbd6befbfbd2855476cefbfbd79efbfbd1b46efbfbdefbfbdefbfbdefbfbdefbfbdefbfbd14efbfbddca408efbfbdefbfbdefbfbdefbfbd7a64efbfbd6f312aefbfbd234565efbfbdefbfbd15efbfbdefbfbdd9aaefbfbd24efbfbdd285efbfbd2e6f002656093fefbfbd24efbfbd46efbfbd684befbfbd3906c4b4efbfbdefbfbdcd97efbfbd755befbfbd5d5cefbfbdefbfbd44efbfbd3012481aefbfbdefbfbd70efbfbd3869efbfbd50efbfbd7fefbfbdefbfbdefbfbdefbfbd732f6151efbfbd3aefbfbd0befbfbdefbfbdefbfbd6c6befbfbd6b59515befbfbd27205f45efbfbdefbfbd5defbfbd4d06efbfbd42d491efbfbd79efbfbd60313befbfbd6fefbfbdefbfbd2779efbfbd67efbfbd633eefbfbd62efbfbd3bc482113d7eefbfbdefbfbd522fefbfbd7d12efbfbdefbfbdc8b542efbfbd21efbfbd184a15efbfbd64efbfbd35efbfbd765a071770efbfbdefbfbd40efbfbd614c372f040a3a297eefbfbdefbfbd2d6b306cefbfbdefbfbd55c79fefbfbdefbfbd67efbfbdefbfbd53efbfbdc7bfefbfbd38705068efbfbd05efbfbdefbfbdefbfbd23efbfbdefbfbd08efbfbd191f08efbfbdeb92b3efbfbd10efbfbdefbfbdefbfbd13efbfbd454d2a7b201b4067efbfbd4cefbfbdefbfbdefbfbdcb925d310d0f19efbfbdefbfbd293b3fefbfbd6e0270d7be3cefbfbd2e2befbfbdefbfbd66efbfbdefbfbdefbfbd4b12efbfbdefbfbd3fefbfbd757e19efbfbd796f16efbfbdefbfbd3674efbfbdebb48befbfbdefbfbdefbfbd5befbfbde5ad9924efbfbdefbfbdefbfbd7bd1ae1befbfbd766951efbfbd2f04efbfbd55efbfbdefbfbdefbfbdd8adefbfbd55efbfbd6629efbfbdefbfbd214aefbfbd50d791efbfbdefbfbd7eefbfbd79efbfbd1f08287b504eefbfbdefbfbd6fc8a848efbfbdefbfbdefbfbdefbfbd76efbfbdefbfbd76efbfbd7e14efbfbd44efbfbd047216772f323eefbfbd07efbfbd67efbfbd79426279efbfbd62efbfbd39efbfbdefbfbd4d0d491d07efbfbd33efbfbd2030efbfbdefbfbd6befbfbd07517c3cefbfbd4139efbfbdefbfbd451cefbfbd6d3aefbfbd6eefbfbdefbfbdefbfbd17247d5fefbfbdefbfbdefbfbdefbfbdcc90efbfbd264450efbfbdefbfbd73efbfbd73efbfbdefbfbdefbfbd2befbfbdd28047efbfbdefbfbdefbfbd67efbfbd2defbfbdefbfbdefbfbdefbfbdefbfbd1939efbfbdefbfbdefbfbdd78eefbfbdefbfbd095e2e36efbfbdefbfbd1d451d7eefbfbd0fefbfbd3c6f59efbfbd607befbfbdefbfbdefbfbd25efbfbd03541d427cefbfbdefbfbd00efbfbd6d43efbfbdefbfbdeaae9677efbfbdefbfbd29ef918a3aefbfbdefbfbd0e0aefbfbdefbfbdefbfbd3c440108efbfbd7ac6a8efbfbd49efbfbd2d76536b74efbfbdefbfbdee83b36eefbfbd17efbfbdefbfbd00513aefbfbdefbfbd7f7aefbfbd44efbfbd2c2cefbfbdefbfbdefbfbd0746efbfbd18efbfbd42efbfbd68efbfbd2ecfafefbfbdefbfbd522befbfbdefbfbd1e37efbfbd0d3542d2bd2d24efbfbdefbfbdefbfbdefbfbd20efbfbdefbfbdefbfbdefbfbdefbfbd730f49efbfbdefbfbd74efbfbd726eefbfbdefbfbd435defbfbdefbfbdefbfbd14efbfbd3b08efbfbdefbfbd67d7a31376efbfbd14efbfbd4cefbfbd7a3b48efbfbd647967efbfbdefbfbd3377efbfbdefbfbd246eefbfbdefbfbd1c4714efbfbdefbfbd3a42efbfbd7fefbfbdefbfbdefbfbd4311efbfbdefbfbdcba2efbfbd3b53efbfbd42efbfbdefbfbdefbfbd57efbfbd3231efbfbd62efbfbd07efbfbdefbfbd40efbfbd09792e10d893efbfbd4a3a43efbfbd7aefbfbd4cefbfbdefbfbdefbfbd57efbfbdefbfbd034fefbfbd5e6ddbbf77efbfbd3cefbfbd0befbfbd4615efbfbde18baa65efbfbdefbfbd347aefbfbd695d7757efbfbdefbfbd2052efbfbd28efbfbd24efbfbdefbfbd41efbfbdefbfbdefbfbdefbfbdefbfbdca85efbfbdefbfbd7001efbfbd53efbfbd6a3b4b1befbfbdefbfbdefbfbdefbfbd1f6eefbfbdefbfbd5defbfbd7eefbfbd12efbfbd3258752b4531efbfbd07efbfbdefbfbd35efbfbdefbfbdefbfbd4aefbfbd2defbfbd69efbfbdc6b5c694efbfbd582a10727aefbfbdefbfbdcd99efbfbdefbfbd23efbfbdefbfbdefbfbdc5b7efbfbd2fefbfbdefbfbdefbfbdefbfbd1bde9f7f69752453efbfbd6e28695718efbfbdefbfbdefbfbd0370efbfbd3defbfbdefbfbd6f7c09efbfbd49efbfbd3f65efbfbdefbfbd783d2a0f595cefbfbd35efbfbd6cefbfbd177d4777efbfbdefbfbd13efbfbd46efbfbd744fefbfbd7cefbfbd29efbfbdefbfbd3e6cefbfbd04efbfbdefbfbdefbfbdefbfbdefbfbd221f77dc95cba9efbfbd55efbfbd2526efbfbdefbfbd462fefbfbdefbfbd79efbfbd2befbfbdefbfbd7defbfbdefbfbd79efbfbdefbfbd2278efbfbd7aefbfbd7b67efbfbd1d484fefbfbdefbfbdefbfbdefbfbdefbfbd070b60efbfbdefbfbdefbfbd28317defbfbdefbfbdefbfbdefbfbd16efbfbd5fefbfbdefbfbdefbfbd0e68efbfbdefbfbd62efbfbddbadefbfbd6d002c0befbfbd32efbfbd6f36efbfbdefbfbd5f6befbfbd01784befbfbdefbfbdefbfbdefbfbd1d1764634b3965600900084aefbfbdefbfbd0eefbfbdefbfbdefbfbd51644e51efbfbd76582c7907ccb1efbfbd41553defbfbd6eefbfbdefbfbdca96105fefbfbd02efbfbdefbfbd0875efbfbd561003efbfbd734aefbfbd7b27efbfbd5befbfbd1defbfbd7d3e3540efbfbdefbfbdefbfbdefbfbd775f2873efbfbd6d585512efbfbdefbfbdefbfbd4c09dabe3e252eefbfbdefbfbd4cefbfbd5bd4b7efbfbd18096749efbfbdefbfbdefbfbdefbfbd57efbfbd464dcd95efbfbd01efbfbd2e49efbfbd6455efbfbdefbfbd04efbfbd0a364befbfbd2aefbfbd6a6defbfbd61efbfbdefbfbd1fefbfbdefbfbdefbfbdefbfbd1b4aefbfbdefbfbd18efbfbdefbfbd3fefbfbdefbfbd105c1e5aefbfbd10efbfbdefbfbd20efbfbdefbfbd79efbfbd66efbfbdc286efbfbd592025efbfbdefbfbd7f1d51efbfbd704a5befbfbd43efbfbd603cefbfbdefbfbdd08e1eefbfbdefbfbdefbfbd0373efbfbd79efbfbd6defbfbdefbfbdefbfbd1022db9516efbfbd705050efbfbd2239efbfbd2eefbfbd690defbfbd65533d16efbfbd3aefbfbdefbfbdefbfbd06efbfbdefbfbd200fefbfbdefbfbdefbfbd5b5befbfbd007a64efbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd10641fefbfbdefbfbd6253efbfbd034352efbfbdefbfbd44efbfbdefbfbd5a36571439efbfbd10efbfbd13efbfbdefbfbd17efbfbd390038efbfbdefbfbd1c510aefbfbd422845efbfbd55efbfbdefbfbd582bd49f5c5cefbfbdefbfbdefbfbdefbfbd42efbfbdefbfbd74efbfbdefbfbdefbfbdefbfbd32efbfbd68efbfbdefbfbd26efbfbd42efbfbd25efbfbd1befbfbd173befbfbd3aefbfbd1c6cefbfbdefbfbd01c2b01befbfbdefbfbd0b25efbfbd5239efbfbdefbfbd06343628efbfbd6f1eefbfbd20efbfbdefbfbd1befbfbd63217befbfbdefbfbd2242efbfbd7cc5bc683eefbfbdefbfbd6e4cefbfbd7befbfbd55efbfbd0e77743e36efbfbd10efbfbd14efbfbdefbfbdefbfbd41efbfbd6d77efbfbdefbfbdefbfbdefbfbdefbfbd5cefbfbdefbfbd513befbfbdefbfbd59efbfbdefbfbd4aefbfbd620cefbfbd35efbfbd414f0169efbfbdefbfbdefbfbd21efbfbd25efbfbd2fefbfbd53047d3fefbfbd49efbfbd51efbfbd54efbfbdefbfbd1c6cefbfbdefbfbd3a54efbfbd05efbfbdefbfbdefbfbd2c3eefbfbdefbfbd68efbfbd02dca4efbfbd254fefbfbdefbfbdefbfbd01efbfbd57d9ae29ec9389efbfbdefbfbd25efbfbd39efbfbdefbfbdefbfbd0d36efbfbd724850efbfbd3dce94efbfbdefbfbd3d6c626975efbfbdefbfbdefbfbd1aefbfbd4a65efbfbd26715c35efbfbdefbfbd55efbfbdefbfbd1a2befbfbdefbfbd34efbfbd2e4eefbfbd33efbfbd093eefbfbd1cefbfbd0aefbfbd51efbfbd73efbfbd6010efbfbdefbfbd17efbfbd7b44efbfbdefbfbd0befbfbd28d1a9efbfbdefbfbd10efbfbd00efbfbd080f65efbfbdefbfbd2defbfbdefbfbd48efbfbdefbfbdefbfbd22efbfbdefbfbd7c10efbfbdefbfbd32efbfbdefbfbd7759efbfbdca9d48efbfbdefbfbddea65e4957efbfbd21ddb1efbfbdefbfbdefbfbdefbfbd0befbfbdefbfbdda89efbfbd0d44efbfbdefbfbdefbfbd42efbfbdefbfbd18efbfbd19efbfbdefbfbdefbfbd7aefbfbdefbfbd7c1255efbfbd24efbfbd6aefbfbd7b0b30efbfbd0eefbfbd2429efbfbd443109efbfbdc39c17efbfbdefbfbd633befbfbd6d41efbfbdefbfbd48efbfbd2e1943efbfbdefbfbdefbfbdefbfbd3e74efbfbd02087cefbfbd520629681638efbfbd5058615cefbfbd6b3c73356f241654efbfbd4502efbfbdefbfbd2defbfbd117cefbfbd0eefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd0e7a65efbfbd75efbfbd71efbfbdefbfbdefbfbdefbfbd3d2c3defbfbdefbfbdd4afefbfbdefbfbd7b2cefbfbdefbfbd4eefbfbdefbfbd783d1513efbfbd75efbfbd035f080305efbfbdefbfbdefbfbd1528efbfbdefbfbdca85efbfbd52efbfbdefbfbd033828efbfbd3070efbfbd04efbfbdefbfbd1cefbfbd23efbfbdefbfbdefbfbd79644133c4aa61efbfbdefbfbd0fefbfbdefbfbd7aefbfbd41383b79efbfbdefbfbd08005b16d2a907efbfbdefbfbd336fd2a7434e0befbfbd4fefbfbd17'
de_crawl_data(linsong,'Bj6xsFkqbHj4d24uWOLFog==')

console.log(crawl_data('Lsp8AqQB9QQK32tB/KQeJw=='))
console.log(crawl_data('Lsp8AqQB9QQK32tB/KQeJw==').buffer)
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

url = '/wxa-qbase/container_service?token=58_VXHuH36y1hauf8pM4B27gCgI2kzhUzVxjAPZYqepCeWXXeKyyalwbm6TJbq7kvbJKfIDWN0NKD_tsMM1'
key = 'VQYiecdq7TaXbMOeYMyP7w=='
TIMESTAMP = '1656999036098'
// request_post(url,key,TIMESTAMP,R)
// request_post(crawl_data('6pIrsLDUX/uWDHoBv/MDlg=='),R)
// R(request_post(crawl_data('Qc2LyiG3HQcWRW9371N1lg==')),x,void 0,x)
// console.log(new Uint8Array(base64ToArrayBuffer(key)))