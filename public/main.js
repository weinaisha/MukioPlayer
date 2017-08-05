var socket = io(),
    sendBarrage=document.querySelector('.submit'),
    inputBarrage=document.querySelector('.input-barrage'),
    video=document.querySelector('video'),
    barrageContainer=document.querySelector('.show-barrage')

socket.on('message',function(data){
  addMessage(data)
  console.log(data)
})

function addMessage(data){
  var p=document.createElement('p')
  p.innerText=data.content
  p.style.top=Math.random()*150+'px'
  p.classList.add('barrage','moveaction')
  document.querySelector('.show-barrage').appendChild(p)
  setTimeout(function(){
    barrageContainer.removeChild(p)
  },5000)
}

sendBarrage.addEventListener('click',function(){
  var obj={}
  obj.content=inputBarrage.value
  // obj.user=inputUser.value||inputUser.getAttribute('placeholder')
  socket.emit('message',obj)
  inputBarrage.value=''
})

