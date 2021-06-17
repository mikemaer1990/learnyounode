const strftime = require('strftime');
const net = require('net')
const port = process.argv[2]

const server = net.createServer(function (socket) {
    let theTime = strftime('%Y-%m-%d %H:%M\n')
    socket.write(theTime)
    socket.end()
})
server.listen(port)