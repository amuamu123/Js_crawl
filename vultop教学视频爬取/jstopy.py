# e = [102,97,54,56,100,56,101,57,55,54,101,54,98,52,50,48,54,54,53,57]
def vesion3(key):
    e = [ord(i) for i in key]
    t = e
    r = t[0]
    i = chr(r)
    #进制转换
    convertString = "0123456789abcdefghijklmnopqrstuvwxyz"
    a = convertString.index(i)%2
    n = t[a]
    s = chr(n) # a
    o = t[a+1]
    l = chr(o) # 6
    u = (convertString.index(s)*36*1 + convertString.index(l))%3
    if u==2:
        d = t[5]
        c = t[6]
        h = t[9]
        f = t[10]
        g = t[13]
        p = t[14]
        v = t[17]
        m = t[18]
        y = d - 97 + 26 * (int(chr(c)) + 1) - 97
        b = h - 97 + 26 * (int(chr(f)) + 1) - 97
        T = g - 97 + 26 * (int(chr(p)) + 1) - 97
        E = v - 97 + 26 * (int(chr(m)) + 2) - 97
        t =[t[0], t[1], t[2], t[3], t[4], y, t[7], t[8], b, t[11], t[12], T, t[15], t[16], E, t[19]]
    
    elif u==1:
        S = "0-1-2-8-9-10-11-12-18-17-16-15-14-4-5-6".split('-')
        t = [t[int(i)] for i in S]
    else:
        if u!=0:
            return None
        else:
            S =  "0-1-2-3-4-15-16-17-18-10-11-12-13-6-7-8".split('-')
            t = [t[int(i)] for i in S]

    return ''.join([chr(int(i)) for i in t])

print(vesion3('fa68d8e976e6b4206659'))
print(vesion3('a2b2ao67cq44bq647u37'))


