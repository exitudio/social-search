'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduxPage = exports.initStore = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _loginReducer = require('../components/index/redux/loginReducer');

var _loginReducer2 = _interopRequireDefault(_loginReducer);

var _fbPageReducer = require('../components/index/search/redux/fbPageReducer');

var _fbPageReducer2 = _interopRequireDefault(_fbPageReducer);

var _fbPostReducer = require('../components/index/search/redux/fbPostReducer');

var _fbPostReducer2 = _interopRequireDefault(_fbPostReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger.createLogger)({
    timestamp: true,
    duration: true
});

var allReducers = (0, _redux.combineReducers)({
    fbPageReducer: _fbPageReducer2.default,
    loginReducer: _loginReducer2.default,
    fbPostReducer: _fbPostReducer2.default
});

var initStore = exports.initStore = function initStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _redux.createStore)(allReducers, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default, logger)));
};

var reduxPage = exports.reduxPage = function reduxPage(comp) {
    return (0, _nextReduxWrapper2.default)(initStore)(comp);
};