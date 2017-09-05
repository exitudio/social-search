'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStatusAction = exports.logoutAction = exports.loginAction = exports.initOnceAction = exports.NOT_AUTHORIZED = exports.CONNECTED = exports.CHECKING = exports.LOGIN_STATUS = undefined;

var _config = require('../../../config.js');

var _FBLogin = require('../../../libs/facebookGraphAPI/FBLogin');

var _FBLogin2 = _interopRequireDefault(_FBLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//reducer type
var LOGIN_STATUS = exports.LOGIN_STATUS = 'login_status';

//status type
var CHECKING = exports.CHECKING = _FBLogin2.default.CHECKING;
var CONNECTED = exports.CONNECTED = _FBLogin2.default.CONNECTED;
var NOT_AUTHORIZED = exports.NOT_AUTHORIZED = _FBLogin2.default.NOT_AUTHORIZED;

var fbLogin = void 0;

//picture 50x50 : http://graph.facebook.com/67563683055/picture?type=square
var initOnceAction = exports.initOnceAction = function initOnceAction() {
    return function (dispatch) {
        if (!fbLogin) {
            fbLogin = new _FBLogin2.default(_config.appId);
            fbLogin.init(function (status) {
                var userID = '';
                var accessToken = '';
                if (fbLogin.authResponse) {
                    userID = fbLogin.authResponse.userID;
                    accessToken = fbLogin.authResponse.accessToken;

                    if (status === CONNECTED) {
                        //status === connected
                        //load name
                        fbLogin.getMyInfo(function (response) {
                            if (response.error) {
                                dispatch({
                                    type: LOGIN_STATUS,
                                    payload: {
                                        userID: userID, accessToken: accessToken, name: '', status: status
                                    }
                                });
                            } else {
                                dispatch({
                                    type: LOGIN_STATUS,
                                    payload: { userID: userID, accessToken: accessToken, name: response.name, status: status }
                                });
                            }
                        });
                    } else {
                        //status === checking || not_authorize
                        dispatch({
                            type: LOGIN_STATUS,
                            payload: { userID: userID, accessToken: accessToken, name: '', status: status }
                        });
                    }
                } else {
                    //status === checking || not_authorize
                    dispatch({
                        type: LOGIN_STATUS,
                        payload: { userID: userID, accessToken: accessToken, name: '', status: status }
                    });
                }
            });
        } else {
            fbLogin.getStatus();
        }
    };
};

var loginAction = exports.loginAction = function loginAction() {
    fbLogin.login();
};
var logoutAction = exports.logoutAction = function logoutAction() {
    fbLogin.logout();
};
var getStatusAction = exports.getStatusAction = function getStatusAction() {
    fbLogin.getStatus();
};