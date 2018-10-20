var socket = io();

socket.on('message', function(data) {
  console.log(data);
});

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth="6";
ctx.strokeStyle="red";
ctx.rect(5,5,10,10); 
ctx.stroke();