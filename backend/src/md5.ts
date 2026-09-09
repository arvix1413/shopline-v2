/** Minimal MD5 (hex) for ECPay CheckMacValue — Cloudflare Workers lack SubtleCrypto MD5. */

export function md5(str: string): string {
  const utf8 = unescape(encodeURIComponent(str))
  const msg: number[] = []
  for (let i = 0; i < utf8.length; i++) msg.push(utf8.charCodeAt(i))

  const l = msg.length
  msg.push(0x80)
  while (msg.length % 64 !== 56) msg.push(0)
  const bits = l * 8
  for (let i = 0; i < 8; i++) msg.push((bits >>> (i * 8)) & 0xff)

  let a = 0x67452301
  let b = 0xefcdab89
  let c = 0x98badcfe
  let d = 0x10325476

  const add = (x: number, y: number) => (x + y) >>> 0
  const rol = (x: number, n: number) => (x << n) | (x >>> (32 - n))

  const F = (x: number, y: number, z: number) => (x & y) | (~x & z)
  const G = (x: number, y: number, z: number) => (x & z) | (y & ~z)
  const H = (x: number, y: number, z: number) => x ^ y ^ z
  const I = (x: number, y: number, z: number) => y ^ (x | ~z)

  const cmn = (q: number, a0: number, b0: number, x: number, s: number, t: number) =>
    add(rol(add(add(a0, q), add(x, t)), s), b0)

  const ff = (a0: number, b0: number, c0: number, d0: number, x: number, s: number, t: number) =>
    cmn(F(b0, c0, d0), a0, b0, x, s, t)
  const gg = (a0: number, b0: number, c0: number, d0: number, x: number, s: number, t: number) =>
    cmn(G(b0, c0, d0), a0, b0, x, s, t)
  const hh = (a0: number, b0: number, c0: number, d0: number, x: number, s: number, t: number) =>
    cmn(H(b0, c0, d0), a0, b0, x, s, t)
  const ii = (a0: number, b0: number, c0: number, d0: number, x: number, s: number, t: number) =>
    cmn(I(b0, c0, d0), a0, b0, x, s, t)

  for (let i = 0; i < msg.length; i += 64) {
    const w: number[] = []
    for (let j = 0; j < 16; j++) {
      const k = i + j * 4
      w[j] = msg[k] | (msg[k + 1] << 8) | (msg[k + 2] << 16) | (msg[k + 3] << 24)
    }
    let aa = a
    let bb = b
    let cc = c
    let dd = d

    aa = ff(aa, bb, cc, dd, w[0], 7, 0xd76aa478)
    dd = ff(dd, aa, bb, cc, w[1], 12, 0xe8c7b756)
    cc = ff(cc, dd, aa, bb, w[2], 17, 0x242070db)
    bb = ff(bb, cc, dd, aa, w[3], 22, 0xc1bdceee)
    aa = ff(aa, bb, cc, dd, w[4], 7, 0xf57c0faf)
    dd = ff(dd, aa, bb, cc, w[5], 12, 0x4787c62a)
    cc = ff(cc, dd, aa, bb, w[6], 17, 0xa8304613)
    bb = ff(bb, cc, dd, aa, w[7], 22, 0xfd469501)
    aa = ff(aa, bb, cc, dd, w[8], 7, 0x698098d8)
    dd = ff(dd, aa, bb, cc, w[9], 12, 0x8b44f7af)
    cc = ff(cc, dd, aa, bb, w[10], 17, 0xffff5bb1)
    bb = ff(bb, cc, dd, aa, w[11], 22, 0x895cd7be)
    aa = ff(aa, bb, cc, dd, w[12], 7, 0x6b901122)
    dd = ff(dd, aa, bb, cc, w[13], 12, 0xfd987193)
    cc = ff(cc, dd, aa, bb, w[14], 17, 0xa679438e)
    bb = ff(bb, cc, dd, aa, w[15], 22, 0x49b40821)

    aa = gg(aa, bb, cc, dd, w[1], 5, 0xf61e2562)
    dd = gg(dd, aa, bb, cc, w[6], 9, 0xc040b340)
    cc = gg(cc, dd, aa, bb, w[11], 14, 0x265e5a51)
    bb = gg(bb, cc, dd, aa, w[0], 20, 0xe9b6c7aa)
    aa = gg(aa, bb, cc, dd, w[5], 5, 0xd62f105d)
    dd = gg(dd, aa, bb, cc, w[10], 9, 0x02441453)
    cc = gg(cc, dd, aa, bb, w[15], 14, 0xd8a1e681)
    bb = gg(bb, cc, dd, aa, w[4], 20, 0xe7d3fbc8)
    aa = gg(aa, bb, cc, dd, w[9], 5, 0x21e1cde6)
    dd = gg(dd, aa, bb, cc, w[14], 9, 0xc33707d6)
    cc = gg(cc, dd, aa, bb, w[3], 14, 0xf4d50d87)
    bb = gg(bb, cc, dd, aa, w[8], 20, 0x455a14ed)
    aa = gg(aa, bb, cc, dd, w[13], 5, 0xa9e3e905)
    dd = gg(dd, aa, bb, cc, w[2], 9, 0xfcefa3f8)
    cc = gg(cc, dd, aa, bb, w[7], 14, 0x676f02d9)
    bb = gg(bb, cc, dd, aa, w[12], 20, 0x8d2a4c8a)

    aa = hh(aa, bb, cc, dd, w[5], 4, 0xfffa3942)
    dd = hh(dd, aa, bb, cc, w[8], 11, 0x8771f681)
    cc = hh(cc, dd, aa, bb, w[11], 16, 0x6d9d6122)
    bb = hh(bb, cc, dd, aa, w[14], 23, 0xfde5380c)
    aa = hh(aa, bb, cc, dd, w[1], 4, 0xa4beea44)
    dd = hh(dd, aa, bb, cc, w[4], 11, 0x4bdecfa9)
    cc = hh(cc, dd, aa, bb, w[7], 16, 0xf6bb4b60)
    bb = hh(bb, cc, dd, aa, w[10], 23, 0xbebfbc70)
    aa = hh(aa, bb, cc, dd, w[13], 4, 0x289b7ec6)
    dd = hh(dd, aa, bb, cc, w[0], 11, 0xeaa127fa)
    cc = hh(cc, dd, aa, bb, w[3], 16, 0xd4ef3085)
    bb = hh(bb, cc, dd, aa, w[6], 23, 0x04881d05)
    aa = hh(aa, bb, cc, dd, w[9], 4, 0xd9d4d039)
    dd = hh(dd, aa, bb, cc, w[12], 11, 0xe6db99e5)
    cc = hh(cc, dd, aa, bb, w[15], 16, 0x1fa27cf8)
    bb = hh(bb, cc, dd, aa, w[2], 23, 0xc4ac5665)

    aa = ii(aa, bb, cc, dd, w[0], 6, 0xf4292244)
    dd = ii(dd, aa, bb, cc, w[7], 10, 0x432aff97)
    cc = ii(cc, dd, aa, bb, w[14], 15, 0xab9423a7)
    bb = ii(bb, cc, dd, aa, w[5], 21, 0xfc93a039)
    aa = ii(aa, bb, cc, dd, w[12], 6, 0x655b59c3)
    dd = ii(dd, aa, bb, cc, w[3], 10, 0x8f0ccc92)
    cc = ii(cc, dd, aa, bb, w[10], 15, 0xffeff47d)
    bb = ii(bb, cc, dd, aa, w[1], 21, 0x85845dd1)
    aa = ii(aa, bb, cc, dd, w[8], 6, 0x6fa87e4f)
    dd = ii(dd, aa, bb, cc, w[15], 10, 0xfe2ce6e0)
    cc = ii(cc, dd, aa, bb, w[6], 15, 0xa3014314)
    bb = ii(bb, cc, dd, aa, w[13], 21, 0x4e0811a1)
    aa = ii(aa, bb, cc, dd, w[4], 6, 0xf7537e82)
    dd = ii(dd, aa, bb, cc, w[11], 10, 0xbd3af235)
    cc = ii(cc, dd, aa, bb, w[2], 15, 0x2ad7d2bb)
    bb = ii(bb, cc, dd, aa, w[9], 21, 0xeb86d391)

    a = add(a, aa)
    b = add(b, bb)
    c = add(c, cc)
    d = add(d, dd)
  }

  const toHex = (n: number) => {
    let s = ''
    for (let i = 0; i < 4; i++) s += ((n >>> (i * 8)) & 0xff).toString(16).padStart(2, '0')
    return s
  }
  return toHex(a) + toHex(b) + toHex(c) + toHex(d)
}
