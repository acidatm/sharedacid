const socket = io()
const canvas = document.getElementById("canvas")
const minMovement = 10
let joined = false
let origin = {
  x:0,
  y:0
}
window.position = {
  x:0,
  y:0
}
let base = {
  x:0,
  y:0
}
let delta = {
  x:0,
  y:0
}
let moving = false
window.addEventListener("load",function(){
  let canvas = document.getElementById("canvas")
  // document.body.addEventListener("click",randomize)
  window.resolution = (Math.min(1,(((window.innerWidth + window.innerHeight) * 0.5) / 2000)) * 0.9 + 0.1) * 0.5
  window.addEventListener("resize",function(){
    window.resolution = (Math.min(1,(((window.innerWidth + window.innerHeight) * 0.5) / 2000)) * 0.9 + 0.1) * 0.5
  })
  window.addEventListener("mousedown",function(e){
    e.preventDefault();
    down(e.clientX,e.clientY)
  })
  window.addEventListener("touchstart",function(e){
    e.preventDefault();
    down(e.targetTouches[0].clientX,e.targetTouches[0].clientY)
  })
  window.addEventListener("mouseup",function(e){
    e.preventDefault();
    up()
  })
  window.addEventListener("touchend",function(e){
    e.preventDefault();
    up()
  })
  window.addEventListener("mousemove",function(e){
    e.preventDefault();
    move(e.clientX,e.clientY)
  })
  window.addEventListener("touchmove",function(e){
    e.preventDefault();
    move(e.targetTouches[0].clientX,e.targetTouches[0].clientY)
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

function randomize(){
  socket.emit('randomize')
}
function move(x,y){

  if(moving){
    hideTutorial()
    delta.x = x - origin.x
    delta.y = y - origin.y
    position.x = base.x + delta.x
    position.y = base.y + delta.y
  }

}
function hideTutorial(){
  document.getElementById("tutorial").classList.add("hidden")
}
function down(x,y){
  origin.x = x
  origin.y = y
  moving = true
}
function up(){
  hideTutorial()
  if(Math.abs(delta.x) < minMovement && Math.abs(delta.y) < minMovement){
    randomize()
  }
  else{
    base.x = base.x + delta.x
    base.y = base.y + delta.y

  }
  delta = {
    x:0,
    y:0
  }
  moving = false
}
