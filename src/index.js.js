import React from 'react'

export  function WasdControl(speed , camera) {
// should I consider "this" for dat.gui
  var LOWSPEED = speed || 1;
  var FASTSPEED = speed * 10;

  var moveForward = 0;
  var moveLeft = 0;
  var moveBackward = 0;
  var moveRight = 0;
  var moveBottom = 0;
  var moveTop = 0;

  var onKeyDown = function(event) {
    switch (event.keyCode) {
      case 38: // up
      case 87: // w
        moveForward = -LOWSPEED;
        break;
      case 37: // left
      case 65: // a
        moveLeft = -LOWSPEED;
        break;
      case 40: // down
      case 83: // s
        moveBackward = LOWSPEED;
        break;
      case 39: // right
      case 68: // d
        moveRight = LOWSPEED;
        break;
      case 81: // q
        moveBottom = -LOWSPEED;
        break;
      case 69: // e
        moveTop = LOWSPEED;
        break;
    }
  };
  var onKeyUp = function(event) {
    switch (event.keyCode) {
      case 38: // up
      case 87: // w
        moveForward = 0;
        break;
      case 37: // left
      case 65: // a
        moveLeft = 0;
        break;
      case 40: // down
      case 83: // s
        moveBackward = 0;
        break;
      case 39: // right
      case 68: // d
        moveRight = 0;
        break;
      case 81: // q
        moveBottom = 0;
        break;
      case 69: // e
        moveTop = 0;
        break;
    }
  };
  document.addEventListener("keydown", onKeyDown, false);
  document.addEventListener("keyup", onKeyUp, false);


  return  function () {
    camera.translateZ(moveForward);
    camera.translateZ(moveBackward);
    camera.translateX(moveRight);
    camera.translateX(moveLeft);
    camera.translateY(moveTop);
    camera.translateY(moveBottom);
  }
}




  
