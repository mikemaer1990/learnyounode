const http = require('http');

const parseTime = (time, type) => {
    if (type === 'parse') {
        return {
            "hour": time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
        }
    } else if (type === 'unix') {
        return {
            "unixtime": time.getTime()
        }
    }
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        // Create our url object by constructing the full url --- hostname and url path
        const myURL = new URL(`https://${req.headers.host}${req.url}`)
        if (myURL.pathname === '/api/parsetime') {
            // Create a date object to work with - constructed from the search params
            const date = new Date(myURL.searchParams.get('iso'))
            // Return stringified json object
            res.write(JSON.stringify(parseTime(date, 'parse')))

        } else if (myURL.pathname === '/api/unixtime') {
            // Create a date object to work with - constructed from the search params
            const date = new Date(myURL.searchParams.get('iso'))
            // Return stringified json object
            res.write(JSON.stringify(parseTime(date, 'unix')))
        }
        res.end()
    }
})
server.listen(process.argv[2])

// 'use strict'
// const http = require('http')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, 'http://example.com')
//   const time = new Date(parsedUrl.searchParams.get('iso'))
//   let result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))