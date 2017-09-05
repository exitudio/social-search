'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _logInAction = require('./logInAction');

var LoginAction = _interopRequireWildcard(_logInAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
    userID: '',
    name: '',
    accessToken: '',
    status: LoginAction.CHECKING
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case LoginAction.LOGIN_STATUS:
            {
                return (0, _extends3.default)({}, state, {
                    userID: action.payload.userID,
                    name: action.payload.name,
                    accessToken: action.payload.accessToken,
                    status: action.payload.status
                });
            }
        default:
            return (0, _extends3.default)({}, state);
    }
};