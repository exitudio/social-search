/****************************************************************
 * add Valid OAuth redirect URIs : "[http://localhost/] [http://localhost:3000/signin-facebook]" 
 *to avoid blocking redirect URI
 ****************************************************************/

export default class FBLogin {
    static CONNECTED = 'connected'
    static NOT_AUTHORIZED = 'not_authorized'
    static NOT_LOGIN = 'auto_login'
    static AUTO_LOGIN = 'auto_login'
    static CLICK_LOGIN = 'click_login'

    constructor(appId, loggedIn, notLoggedIn) {
        this.status = FBLogin.NOT_AUTHORIZED
        this.appId = appId
        this.authResponse = null
        this.loggedIn = loggedIn
        this.notLoggedIn = notLoggedIn
        this.loginType = FBLogin.NOT_LOGIN

        //callback when facekbook sdk loaded
        window.fbAsyncInit = () => {
            this.FB = window['FB']
            this.FB.init({
                appId: appId,
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.10'
            })
            this.FB.AppEvents.logPageView()

            //get status
            //not login : {authResponse: undefined, status: "not_authorized"}
            this.type = FBLogin.AUTO_LOGIN
            this.relogin()
        }

            //facebook sdk
            ; (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) { return }
                js = d.createElement(s); js.id = id
                js.src = "//connect.facebook.net/en_US/sdk.js"
                fjs.parentNode.insertBefore(js, fjs)
            }(document, 'script', 'facebook-jssdk'))
    }

    _updateStatus = response => {
        console.log('updateStatus', response, this.loginType)
        
        this.status = response.status
        this.authResponse = response.authResponse
        if (response && response.authResponse) {
            this.loggedIn()
        } else {
            this.notLoggedIn()
        }
    }

    //call me by button clicking
    login = () => {
        this.loginType = FBLogin.CLICK_LOGIN
        // this.FB.login( this._updateStatus, {scope:'user_posts'} )
        this.FB.logout(function(){
            console.log('logout')
        })
    }

    relogin = () =>{
        this.FB.getLoginStatus( this._updateStatus )
    }
}