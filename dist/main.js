(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('keydown', playSound);
var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});

function playSound(e) {
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  var key = document.querySelector('div[data-key="' + e.keyCode + '"]');
  audio.play();
  audio.currentTime = 0;
  key.classList.add('playing');
}

function removeTransition(e) {
  this.classList.remove('playing');
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxTQUFuQztBQUNBLElBQU0sT0FBTyxTQUFTLGdCQUFULENBQTBCLE1BQTFCLENBQWI7QUFDQSxLQUFLLE9BQUwsQ0FBYTtBQUFBLFNBQU8sSUFBSSxnQkFBSixDQUFxQixlQUFyQixFQUFzQyxnQkFBdEMsQ0FBUDtBQUFBLENBQWI7O0FBRUEsU0FBUyxTQUFULENBQW1CLENBQW5CLEVBQXFCO0FBQ25CLE1BQU0sUUFBUSxTQUFTLGFBQVQsc0JBQTBDLEVBQUUsT0FBNUMsUUFBZDtBQUNBLE1BQU0sTUFBTSxTQUFTLGFBQVQsb0JBQXdDLEVBQUUsT0FBMUMsUUFBWjtBQUNBLFFBQU0sSUFBTjtBQUNBLFFBQU0sV0FBTixHQUFvQixDQUFwQjtBQUNBLE1BQUksU0FBSixDQUFjLEdBQWQsQ0FBa0IsU0FBbEI7QUFDRDs7QUFFRCxTQUFTLGdCQUFULENBQTBCLENBQTFCLEVBQTZCO0FBQzNCLE9BQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsU0FBdEI7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHBsYXlTb3VuZCk7XG5jb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleScpO1xua2V5cy5mb3JFYWNoKGtleSA9PiBrZXkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHJlbW92ZVRyYW5zaXRpb24pKTtcblxuZnVuY3Rpb24gcGxheVNvdW5kKGUpe1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGF1ZGlvW2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XG4gIGNvbnN0IGtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWtleT1cIiR7ZS5rZXlDb2RlfVwiXWApO1xuICBhdWRpby5wbGF5KCk7XG4gIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAga2V5LmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVHJhbnNpdGlvbihlKSB7XG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xufSJdfQ==
