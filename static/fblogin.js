/**
 * Created by exit on 12/24/15.
 */

document.addEventListener('deviceready', fbInitControl, false);

//setTimeout(fbInitControl,2000);

//$(document).ready();

function fbInitControl() {
    var fbConfig = new FbConfig({appId:"742854195849529",scope:"email"}); //appId for browser only
    var fbLogin = new FbLogin(fbConfig);
    fbLogin.getLoginStatus(checkStatus);
    $("#bt").click(function(){
        alert("click");
        fbLogin.login(function(){
            alert("login");
            fbLogin.getEmail(function(_email){
                alert("email:"+_email);
                checkStatus();
            });
        });
    });

    function checkStatus(){
        if( FbLogin.status === FbLogin.CONNECTED){
            alert("FbLogin.uid:"+FbLogin.uid);
            $("#bt").hide();
        }
    }

}


function FbConfig(_obj){
    this.appId = '';
    this.scope = '';
    for( var _id in _obj ){
        this[_id] = _obj[_id];
    }
}

FbLogin.CONNECTED = "connected";
FbLogin.NOT_CONNECTED = "not_connected";

// main constructor
function FbLogin(_config){
    var _fbLogin = this;
    var _isBrowserInit = false; // only for browser.
    FbLogin.config = _config;
    FbLogin.uid = '';
    FbLogin.accessToken = '';
    FbLogin.status = FbLogin.NOT_CONNECTED;

    //public function
    this.getLoginStatus = function(_onComplete,_onError){
        if (window.cordova.platformId == "browser" && !_isBrowserInit) {
            _isBrowserInit = true;
            facebookConnectPlugin.browserInit(FbLogin.config.appId);
        }
        facebookConnectPlugin.getLoginStatus(
            function(_response) {
                if( _response.authResponse ){
                    getInfo(_response);
                }
                _onComplete();
            },
            _onError);
    };

    this.login = function(_onComplete,_onError){

        if (window.cordova.platformId == "browser" && !_isBrowserInit) {
            _isBrowserInit = true;
            facebookConnectPlugin.browserInit(FbLogin.config.appId);
        }

        facebookConnectPlugin.login( FbLogin.config.scope.split(","),
            function (_response) {
                getInfo(_response);
                _onComplete();
            },
            _onError);
    };

    this.getEmail = function(_onComplete,_onError){
        facebookConnectPlugin.api(FbLogin.uid+"/?fields=id,email", ["user_birthday"],
            function (_result) {
                console.log(_result);
                _onComplete(_result.email);
            },
            _onError);
    }

    function getInfo(_response){
        FbLogin.uid = _response.authResponse.userID;
        FbLogin.accessToken = _response.authResponse.accessToken;
        FbLogin.status = FbLogin.CONNECTED;
    }
}