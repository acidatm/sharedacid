const socket = io()
const canvas = document.getElementById("canvas")
let joined = false
window.position = {
  x:0,
  y:0
}

window.addEventListener("load",function(){
  let params = new URLSearchParams(document.location.search);
  let xPos = params.get("x") ? 0 : Number(params.get("x"))
  let yPos = params.get("y") ? 0 : Number(params.get("y"))
  window.position = {
    x:xPos,
    y:yPos
  }
  let canvas = document.getElementById("canvas")
  window.resolution = params.get("r") ? Number(params.get("r")) : (Math.min(1,(((window.innerWidth + window.innerHeight) * 0.5) / 2000)) * 0.9 + 0.1) * 0.5
  window.addEventListener("resize",function(){
    window.resolution = params.get("r") ? Number(params.get("r")) : (Math.min(1,(((window.innerWidth + window.innerHeight) * 0.5) / 2000)) * 0.9 + 0.1) * 0.5
  })
  socket.emit('join')
  socket.on('update', function(msg) {
    if(joined){
      window.config = msg
    }
  })
  socket.on('init', function(msg) {
    if(!joined){
      window.config = msg
      joined = true
      new ACID(canvas)
    }
  })
})
