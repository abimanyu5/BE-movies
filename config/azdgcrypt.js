// 'use strict';
// const srand = require('seedrandom')
// const crypto = require('crypto');
// const key = '3d11@0s5'

// exports.crypt = (t) => {
//     srand(((Date.now() % 1000) / 1000) * 1000000, { global: true })
//     var randomm = Math.floor((Math.random() * (32000 - 0 + 1)) + 0)
//     var r = crypto.createHash('md5').update(randomm.toString()).digest("hex")
//     var c = 0
//     var v = ""
//     for (let i = 0; i < t.length; i++) {
//         if (c == r.length) {
//             c = 0
//         }
//         v += r.substr(c, 1) + (String.fromCharCode(t.substr(i, 1).charCodeAt(0) ^ r.substr(c, 1).charCodeAt(0)))
//         c++
//     }
//     var ret = Buffer.from(ed(v)).toString('base64').replace(/\//g, 'garing')
//     return ret
// }

// exports.decrypt = (t) => {
//     var a = t.replace(/garing/g, '/')
//     var c = Buffer.from(a, 'base64').toString('ascii')
//     var b = ed(c)
//     var v = ""
//     for (let i = 0; i < t.length; i++) {
//         var md5 = b.substr(i, 1)
//         i++
//         v += String.fromCharCode(b.substr(i, 1).charCodeAt(0) ^ md5.charCodeAt(0))
//     }
//     return v.replace(/[^a-zA-Z0-9!@#$%^&*():\|{};+-_=?/",.~ ]/g, "")
// }

// function ed(t) {
//     var r = crypto.createHash('md5').update(key).digest("hex")
//     var c = 0
//     var v = ""
//     for (let i = 0; i < t.length; i++) {
//         if (c == r.length) {
//             c = 0
//         }
//         var aa = t.substr(i, 1)
//         var bb = r.substr(c, 1)
//         v += String.fromCharCode(aa.charCodeAt(0) ^ bb.charCodeAt(0))
//         c++
//         //console.log(v)
//     }

//     return v
// }