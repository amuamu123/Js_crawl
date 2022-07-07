function m(e) {
    for (var t = [], r = 0; r < e.length; r++) {
        var n = e.charCodeAt(r);
        n < 128 ? t.push(n) : n < 2048 ? t.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (r++,
        n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(r)),
        t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
    }
    return new Uint8Array(t)
}
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
            // if (!_(e))
            //     throw new TypeError("unexpected key type");
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
})()

function I(e, t, n) {
    if (void 0 === e)
        throw new SyntaxError("data required");
    if (void 0 === t)
        throw new SyntaxError("key required");
    r = void 0
    return new w(t,n,r,A,T).encrypt(e).result
}

function R(e, t, n) {
    if (void 0 === e)
        throw new SyntaxError("data required");
    if (void 0 === t)
        throw new SyntaxError("key required");
    r = void 0
    return new w(t,n,r,A,T).decrypt(e).result
}
R(1111111111111111,1111111111111111,1111111111111111)