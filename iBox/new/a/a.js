t ='x+aieqbpGbc4tknfHipryVMws/H7dRjX8r4kNfSvBf0iH+TUyhvf8bbJxuGCB4w1x70peXTjplgekpHjETlLFIFo6bMgrsadWd5b1/CvNfVmRBej5wFD6J2BHGcY6aoizIfL1JnKngrREH7rv6slKpNs90kMa/lkRyUpyzepsZk='
for (var e = t.length, n = [], i = 0; i < e; i++)
    n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
console.log(n,e)

ot = function(t) {
    function e(n) {
        var i = t.call(this) || this;
        return n && ("string" == typeof n ? i.parseKey(n) : (e.hasPrivateKeyProperty(n) || e.hasPublicKeyProperty(n)) && i.parsePropertiesFrom(n)),
        i
    }
    return st(e, t),
    e.prototype.parseKey = function(t) {
        try {
            var e = 0
              , n = 0
              , i = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? v(t) : y.unarmor(t)
              , r = _.decode(i);
            if (3 === r.sub.length && (r = r.sub[2].sub[0]),
            9 === r.sub.length) {
                e = r.sub[1].getHexStringValue(),
                this.n = I(e, 16),
                n = r.sub[2].getHexStringValue(),
                this.e = parseInt(n, 16);
                var s = r.sub[3].getHexStringValue();
                this.d = I(s, 16);
                var o = r.sub[4].getHexStringValue();
                this.p = I(o, 16);
                var a = r.sub[5].getHexStringValue();
                this.q = I(a, 16);
                var l = r.sub[6].getHexStringValue();
                this.dmp1 = I(l, 16);
                var c = r.sub[7].getHexStringValue();
                this.dmq1 = I(c, 16);
                var u = r.sub[8].getHexStringValue();
                this.coeff = I(u, 16)
            } else {
                if (2 !== r.sub.length)
                    return !1;
                var d = r.sub[1].sub[0];
                e = d.sub[0].getHexStringValue(),
                this.n = I(e, 16),
                n = d.sub[1].getHexStringValue(),
                this.e = parseInt(n, 16)
            }
            return !0
        } catch (h) {
            return !1
        }
    }
    ,
    e.prototype.getPrivateBaseKey = function() {
        var t = {
            array: [new it.asn1.DERInteger({
                int: 0
            }), new it.asn1.DERInteger({
                bigint: this.n
            }), new it.asn1.DERInteger({
                int: this.e
            }), new it.asn1.DERInteger({
                bigint: this.d
            }), new it.asn1.DERInteger({
                bigint: this.p
            }), new it.asn1.DERInteger({
                bigint: this.q
            }), new it.asn1.DERInteger({
                bigint: this.dmp1
            }), new it.asn1.DERInteger({
                bigint: this.dmq1
            }), new it.asn1.DERInteger({
                bigint: this.coeff
            })]
        };
        return new it.asn1.DERSequence(t).getEncodedHex()
    }
    ,
    e.prototype.getPrivateBaseKeyB64 = function() {
        return f(this.getPrivateBaseKey())
    }
    ,
    e.prototype.getPublicBaseKey = function() {
        var t = new it.asn1.DERSequence({
            array: [new it.asn1.DERObjectIdentifier({
                oid: "1.2.840.113549.1.1.1"
            }), new it.asn1.DERNull]
        })
          , e = new it.asn1.DERSequence({
            array: [new it.asn1.DERInteger({
                bigint: this.n
            }), new it.asn1.DERInteger({
                int: this.e
            })]
        })
          , n = new it.asn1.DERBitString({
            hex: "00" + e.getEncodedHex()
        });
        return new it.asn1.DERSequence({
            array: [t, n]
        }).getEncodedHex()
    }
    ,
    e.prototype.getPublicBaseKeyB64 = function() {
        return f(this.getPublicBaseKey())
    }
    ,
    e.wordwrap = function(t, e) {
        if (!t)
            return t;
        var n = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
        return t.match(RegExp(n, "g")).join("\n")
    }
    ,
    e.prototype.getPrivateKey = function() {
        var t = "-----BEGIN RSA PRIVATE KEY-----\n";
        return t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
        t += "-----END RSA PRIVATE KEY-----"
    }
    ,
    e.prototype.getPublicKey = function() {
        var t = "-----BEGIN PUBLIC KEY-----\n";
        return t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n",
        t += "-----END PUBLIC KEY-----"
    }
    ,
    e.hasPublicKeyProperty = function(t) {
        return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
    }
    ,
    e.hasPrivateKeyProperty = function(t) {
        return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
    }
    ,
    e.prototype.parsePropertiesFrom = function(t) {
        this.n = t.n,
        this.e = t.e,
        t.hasOwnProperty("d") && (this.d = t.d,
        this.p = t.p,
        this.q = t.q,
        this.dmp1 = t.dmp1,
        this.dmq1 = t.dmq1,
        this.coeff = t.coeff)
    }
    ,
    e
}(tt)


// pad
function pad(t, e) {
    for (var n = 4 * e, i = n - t.sigBytes % n, r = i << 24 | i << 16 | i << 8 | i, o = [], a = 0; a < i; a += 4)
        o.push(r);
    var l = s.create(o, i);
    t.concat(l)
}
// lt
lt = function() {
    function t(t) {
        void 0 === t && (t = {}),
        t = t || {},
        this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024,
        this.default_public_exponent = t.default_public_exponent || "010001",
        this.log = t.log || !1,
        this.key = null
    }
    return t.prototype.setKey = function(t) {
        this.log && this.key,
        this.key = new ot(t)
    }
    ,
    t.prototype.setPrivateKey = function(t) {
        this.setKey(t)
    }
    ,
    t.prototype.setPublicKey = function(t) {
        this.setKey(t)
    }
    ,
    t.prototype.decrypt = function(t) {
        try {
            return this.getKey().decrypt(g(t))
        } catch (e) {
            return !1
        }
    }
    ,
    t.prototype.encrypt = function(t) {
        try {
            return f(this.getKey().encrypt(t))
        } catch (e) {
            return !1
        }
    }
    ,
    t.prototype.sign = function(t, e, n) {
        try {
            return f(this.getKey().sign(t, e, n))
        } catch (i) {
            return !1
        }
    }
    ,
    t.prototype.verify = function(t, e, n) {
        try {
            return this.getKey().verify(t, g(e), n)
        } catch (i) {
            return !1
        }
    }
    ,
    t.prototype.getKey = function(t) {
        if (!this.key) {
            if (this.key = new ot,
            t && "[object Function]" === {}.toString.call(t))
                return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
            this.key.generate(this.default_key_size, this.default_public_exponent)
        }
        return this.key
    }
    ,
    t.prototype.getPrivateKey = function() {
        return this.getKey().getPrivateKey()
    }
    ,
    t.prototype.getPrivateKeyB64 = function() {
        return this.getKey().getPrivateBaseKeyB64()
    }
    ,
    t.prototype.getPublicKey = function() {
        return this.getKey().getPublicKey()
    }
    ,
    t.prototype.getPublicKeyB64 = function() {
        return this.getKey().getPublicBaseKeyB64()
    }
    ,
    t.version = at.version,
    t
}();