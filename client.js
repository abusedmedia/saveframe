;(function (io) {
  window.SaveFrame = {}
  var url = 'http://localhost:2222'
  var canvas
  var frame = 0
  var socket

  function conf (_canvas) {
    console.log('initSaveFrame url', url)
    canvas = _canvas
    socket = io.connect(url)
  }

  function save (_canvas) {
    var cnv = _canvas || canvas
    if (socket) {
      socket.emit('render-frame', {
        frame: frame++,
        file: cnv.toDataURL()
      })
    }
  }

  window.SaveFrame.init = conf
  window.SaveFrame.save = save
})(window.io)
