var socket = require('socket.io');

var player_movement = {
  up: false,
  down: false,
  left: false,
  right: false
}

var direction = null;
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37: // left
      dir = 'cc';
      break;
    case 39: // right
      dir = 'c';
      break;
    case 65: // A
      movement.left = true;
      break;
    case 87: // W
      movement.up = true;
      break;
    case 68: // D
      movement.right = true;
      break;
    case 74:
      dir = 'cc';
      break;
    case 76:
      dir = 'c';
      break;
    case 83: // S
      movement.down = true;
      break;
  }
});
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 37: // Left arrow
      dir = null;
      break;
    case 39: // Right arrow
      dir = null;
      break;
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
  }
});
socket.emit('new player');

// This function will send the state of the player 60 times a second to the server.
setInterval(function() {
  sockit.emit('player_movement', player_movement);
}, (1000 / 60))
