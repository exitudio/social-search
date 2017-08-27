'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initStore = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger.createLogger)({
    timestamp: true,
    duration: true
});

var allReducers = (0, _redux.combineReducers)({ reducer: _reducer2.default });

var initStore = exports.initStore = function initStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _redux.createStore)(allReducers, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default, logger)));
};