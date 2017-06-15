var app = require('express')(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  fs = require('fs')

server.listen(2222)

io.sockets.on('connection', function (socket) {
  socket.on('render-frame', function (data) {
    data.file = data.file.split(',')[1] // Get rid of the data:image/png;base64 at the beginning of the file data
    var buffer = new Buffer(data.file, 'base64')
    fs.writeFile(__dirname + '/tmp/frame-' + data.frame + '.png', buffer.toString('binary'), 'binary')
  })
})

console.log('server listening at port', 2222)
