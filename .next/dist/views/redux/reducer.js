'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _action = require('./action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = { value: 0 };
var mathReducer = function mathReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case _action.ADD_TYPE:
            return (0, _extends3.default)({}, state, { value: state.value + 1 });
        case _action.MINUS_TYPE:
            return (0, _extends3.default)({}, state, { value: state.value - 1 });
        default:
            return state;
    }
};
exports.default = mathReducer;