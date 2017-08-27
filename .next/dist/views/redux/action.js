'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_TYPE = exports.ADD_TYPE = 'add_type';
var MINUS_TYPE = exports.MINUS_TYPE = 'minus_type';

var add = exports.add = function add(value) {
  return { type: ADD_TYPE, value: value };
};
var minus = exports.minus = function minus(value) {
  return { type: ADD_TYPE, value: value };
};