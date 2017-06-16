;(function ($) {
  var w = $(document).width()
  var h = $(document).height()

  var canvas = document.querySelector('canvas')
  SaveFrame.init(canvas)

  canvas.width = w
  canvas.height = h
  var ctx = canvas.getContext('2d')

  var arr = []

  var record = false
  function toggle () {
    record = !record
  }

  function start () {
    for (var i = 0; i < 20000; i++) {
      addParticle()
    }
    toggle()
  }

  function addParticle () {
    var ob = {x: w / 2, y: h / 2}
    var fx = Math.random() * w
    var fy = Math.random() * h

    var time = 60 * 3 // 60 frames per second
    var delay = 60 * 1 // 60 frames per second
    TweenMax.to(ob, time, {x: fx, y: fy, delay: Math.random() * delay, useFrames: true, ease: Expo.easeInOut})

    arr.push(ob)
  }

  function loop () {
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, w, h)

    ctx.fillStyle = '#000'
    arr.forEach(function (d, i) {
      ctx.fillRect(d.x, d.y, 3, 3)
    })

    if (record) SaveFrame.save()
    requestAnimationFrame(loop)
  }

  requestAnimationFrame(loop)
})(window.jQuery)
