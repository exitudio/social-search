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
        //https://developers.facebook.com/tools/explorer/145634995501895/?method=GET&path=547822084%2Flikes%3Ffields%3Ddescription%2Ccreated_time%2Clink%2Cusername%2Cglobal_brand_page_name%2Cname%2Cpicture%26after%3DOTA4NzIxNDY5MTUxMDI2%26limit%3D100%26pretty%3D0&version=v2.10
        /* this.fbLogin.FB.api('/me/likes?fields=description,created_time,link,global_brand_page_name,picture&limit=100','get', response=>{
            if(!response.error){
                console.log(response)
                //response.data
                //response.paging
            }else{
                console.log('error...',response)
            }
        }) */
        _this.fbLogin.FB.api('/me/feed?fields=description,created_time,link,full_picture,story,message,target&limit=100', 'get', function (response) {
            console.log(response);
        });

        /* this.fbLogin.FB.api(
            '/search',
            'GET',
            {"q":"ดราม่า","type":"page"},
            function(response) {
                // Insert your code here
            }
          ) */
    };

    this.fbLogin = fbLogin;
    this.errorNoPermission = errorNoPermission;
};

exports.default = FBFeed;