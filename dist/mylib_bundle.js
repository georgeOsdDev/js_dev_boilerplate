(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.JSONKey = require("./lib/mylib");
},{"./lib/mylib":2}],2:[function(require,module,exports){
/*
 * MyLib
 * https://github.com/georgeosddev/mylib
 *
 * license   The MIT License (MIT)
 * copyright Copyright (c) 2014 Takeharu Oshida <georgeosddev@gmail.com>
 */
(function() {
  "use strict";
  module.exports = function(){
    console.log("mylib");
  };
})();
},{}]},{},[1])