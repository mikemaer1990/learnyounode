const http = require('http');
const bl = require('bl')
const urls = process.argv.slice(2)

http.get(urls[0], (res) => {
    res.pipe(bl(function (err, data) {
        if (err) throw err
        console.log(data.toString());
    }))
    res.on('end', () => {
        http.get(urls[1], (res) => {
            res.pipe(bl(function (err, data) {
                if (err) throw err
                console.log(data.toString());
            }))
            res.on('end', () => {
                http.get(urls[2], (res) => {
                    res.pipe(bl(function (err, data) {
                        if (err) throw err
                        console.log(data.toString());
                    }))
                })
            })
        })
    })
})

// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults() {
//     for (let i = 0; i < 3; i++) {
//         console.log(results[i])
//     }
// }

// function httpGet(index) {
//     http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err) {
//                 return console.error(err)
//             }

//             results[index] = data.toString()
//             count++

//             if (count === 3) {
//                 printResults()
//             }
//         }))
//     })
// }

// for (let i = 0; i < 3; i++) {
//     httpGet(i)
// }