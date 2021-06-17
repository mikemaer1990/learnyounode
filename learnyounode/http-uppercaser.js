const http = require('http');
const port = process.argv[2]

const server = http.createServer((req, res) => {
    let results = ''
    req.on('data', (data) => {
        results += data.toString().toUpperCase()
    })
    req.on('end', () => {
        console.log(results);
        res.write(results)
    })

})

server.listen(port)