'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LOAD_FAIL_STATUS = exports.LOADING_STATUS = exports.NO_LOAD_STAUTS = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _fbPageAction = require('./fbPageAction');

var FBPageAction = _interopRequireWildcard(_fbPageAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NO_LOAD_STAUTS = exports.NO_LOAD_STAUTS = 'no_load';
var LOADING_STATUS = exports.LOADING_STATUS = 'loading';
var LOAD_FAIL_STATUS = exports.LOAD_FAIL_STATUS = 'loading';

var defaultState = {
    loadStatus: NO_LOAD_STAUTS,
    pages: [],
    searchWords: ''
};
var FBPageReducer = function FBPageReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case FBPageAction.LOADING_FB_PAGES:
            {
                return (0, _extends3.default)({}, state, {
                    loadStatus: LOADING_STATUS,
                    searchWords: action.payload
                });
            }
        case FBPageAction.LOAD_FAIL_FB_PAGES:
            {
                return (0, _extends3.default)({}, state, {
                    loadStatus: LOAD_FAIL_STATUS
                });
            }
        case FBPageAction.ADD_FB_PAGES:
            {
                return (0, _extends3.default)({}, state, {
                    loadStatus: NO_LOAD_STAUTS,
                    pages: action.payload
                });
            }
        case FBPageAction.CLEAR_SEARCH:
            {
                return (0, _extends3.default)({}, state, {
                    loadStatus: NO_LOAD_STAUTS,
                    pages: action.payload
                });
            }
        default:
            {
                return (0, _extends3.default)({}, state);
            }
    }
};
exports.default = FBPageReducer;