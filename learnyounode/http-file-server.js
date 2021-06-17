const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const filePath = process.argv[3]

const server = http.createServer(function (req, res) {
    const reader = fs.createReadStream(filePath)
    reader.pipe(res)
})

server.listen(port)