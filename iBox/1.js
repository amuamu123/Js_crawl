var l = 14, d = new Array(l + 1);
function n(e, t) {
    return 506832829 * e >>> t
}

function i(e, t) {
    return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24)
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
function compressToBuffer(e) {
    var t, r = e, n = r.length, i = 0, o = 0;
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

function compress(e) {
    var t = 1
      , n = !1;
    var i, o, f, d = new Uint8Array(e), h =32 + d.length + Math.floor(d.length  / 6);
    return (i = new Uint8Array(h),
    f = compressToBuffer(i)),
    i.slice(0, f)

}
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
N = compress(b);