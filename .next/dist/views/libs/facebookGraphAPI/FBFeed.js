'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FBFeed = function FBFeed(fbLogin, errorNoPermission) {
    var _this = this;

    (0, _classCallCheck3.default)(this, FBFeed);

    this.getPostBy = function (who) {
        // this.fbLogin.authResponse.accessToken
        var body = 'Reading JS SDK documentation';
        window['FB'].api('/me/feed', 'post', { message: body }, function (response) {
            console.log(response);
            if (!response || response.error) {
                if (response.error.code === 200) {
                    this.errorNoPermission();
                }
                alert('Error occured');
            } else {
                alert('Post ID: ' + response.id);
            }
        });
    };

    this.test = function () {
        // https://graph.facebook.com/cocacola/posts?access_token=YOUR_ACCESS_TOKEN
        //https://graph.facebook.com/v2.2/PAGE_ID/feed?access_tkoen=YOUR_ACCESS_TOKEN

        _this.fbLogin.FB.api('/me/feed?fields=description,created_time,link,full_picture,story,message,target&limit=100', 'get', function (response) {
            console.log(response);
        });
    };

    this.fbLogin = fbLogin;
    this.errorNoPermission = errorNoPermission;
};

exports.default = FBFeed;