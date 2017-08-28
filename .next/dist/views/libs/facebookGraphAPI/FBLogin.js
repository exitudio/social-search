'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/****************************************************************
 * add Valid OAuth redirect URIs : "[http://localhost:3000/]
 *to avoid blocking redirect URI
 ****************************************************************/

var FBLogin = function FBLogin(appId, onFBStatusChanged) {
    var _this = this;

    (0, _classCallCheck3.default)(this, FBLogin);

    this._changeStatus = function (status) {
        _this.status = status;
        _this.onFBStatusChanged(status);
    };

    this._updateStatus = function (response) {
        console.log('updateStatus', response);

        _this.authResponse = response.authResponse;
        if (response && response.authResponse && response.status === 'connected') {
            _this._changeStatus(FBLogin.CONNECTED);
        } else {
            _this._changeStatus(FBLogin.NOT_AUTHORIZED);
        }
    };

    this.login = function () {
        _this.FB.login(_this._updateStatus, { scope: 'user_posts, user_likes, user_friends' });
    };

    this.logout = function () {
        _this.FB.logout(_this._updateStatus);
    };

    this.getStatus = function () {
        _this._changeStatus(FBLogin.CHECKING);
        _this.FB.getLoginStatus(_this._updateStatus);
    };

    this.status = FBLogin.CHECKING;
    this.appId = appId;
    this.authResponse = null;
    this.onFBStatusChanged = onFBStatusChanged;

    //callback when facekbook sdk loaded
    window.fbAsyncInit = function () {
        _this.FB = window['FB'];
        _this.FB.init({
            appId: appId,
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v2.10'
        });
        _this.FB.AppEvents.logPageView();

        //get status
        //not login : {authResponse: undefined, status: "not_authorized"}
        _this.getStatus();
    }

    //facebook sdk
    ;(function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
}

//call me by button clicking
;

FBLogin.CHECKING = 'checking';
FBLogin.CONNECTED = 'connected';
FBLogin.NOT_AUTHORIZED = 'not_authorized';
exports.default = FBLogin;