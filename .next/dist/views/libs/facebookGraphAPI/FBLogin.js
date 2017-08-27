'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/****************************************************************
 * add Valid OAuth redirect URIs : "[http://localhost/] [http://localhost:3000/signin-facebook]" 
 *to avoid blocking redirect URI
 ****************************************************************/

var FBLogin = function FBLogin(appId, loggedIn, notLoggedIn) {
    var _this = this;

    (0, _classCallCheck3.default)(this, FBLogin);

    this._updateStatus = function (response) {
        console.log('updateStatus', response, _this.loginType);

        _this.status = response.status;
        _this.authResponse = response.authResponse;
        if (response && response.authResponse) {
            _this.loggedIn();
        } else {
            _this.notLoggedIn();
        }
    };

    this.login = function () {
        _this.loginType = FBLogin.CLICK_LOGIN;
        // this.FB.login( this._updateStatus, {scope:'user_posts'} )
        _this.FB.logout(function () {
            console.log('logout');
        });
    };

    this.relogin = function () {
        _this.FB.getLoginStatus(_this._updateStatus);
    };

    this.status = FBLogin.NOT_AUTHORIZED;
    this.appId = appId;
    this.authResponse = null;
    this.loggedIn = loggedIn;
    this.notLoggedIn = notLoggedIn;
    this.loginType = FBLogin.NOT_LOGIN;

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
        _this.type = FBLogin.AUTO_LOGIN;
        _this.relogin();
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

FBLogin.CONNECTED = 'connected';
FBLogin.NOT_AUTHORIZED = 'not_authorized';
FBLogin.NOT_LOGIN = 'auto_login';
FBLogin.AUTO_LOGIN = 'auto_login';
FBLogin.CLICK_LOGIN = 'click_login';
exports.default = FBLogin;