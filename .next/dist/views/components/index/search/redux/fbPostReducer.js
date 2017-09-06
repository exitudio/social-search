'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _fbPostAction = require('./fbPostAction');

var FBPostAction = _interopRequireWildcard(_fbPostAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    posts: [],
    sharedPosts: []
};

var fbPostReducer = function fbPostReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case FBPostAction.LOADING_POSTS:
            {
                return (0, _extends3.default)({}, state, { posts: [], sharedPosts: {} });
            }
        case FBPostAction.ADD_POSTS:
            {
                return (0, _extends3.default)({}, state, {
                    posts: state.posts.concat(action.payload.posts),
                    sharedPosts: (0, _extends3.default)({}, state.sharedPosts, action.payload.sharedPosts)
                });
            }
        default:
            return (0, _extends3.default)({}, state);
    }
};
exports.default = fbPostReducer;