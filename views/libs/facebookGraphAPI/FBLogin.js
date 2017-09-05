/****************************************************************
 * add Valid OAuth redirect URIs : "[http://localhost:3000/]
 *to avoid blocking redirect URI
 ****************************************************************/

export default class FBLogin {
    static CHECKING = 'checking'
    static CONNECTED = 'connected'
    static NOT_AUTHORIZED = 'not_authorized'

    constructor(appId ) {
        this.appId = appId
        this.authResponse = null
    }

    init(onFBStatusChanged){
        this.onFBStatusChanged = onFBStatusChanged
        this._changeStatus(FBLogin.CHECKING)

        //callback when facekbook sdk loaded
        window.fbAsyncInit = () => {
            this.FB = window['FB']
            this.FB.init({
                appId: this.appId,
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.10'
            })
            this.FB.AppEvents.logPageView()

            //get status
            //not login : {authResponse: undefined, status: "not_authorized"}
            this.getStatus()
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

    _changeStatus = status =>{
        this.status = status
        this.onFBStatusChanged(status)
    }

    _updateStatus = response => {
        this.authResponse = response.authResponse
        if (response && response.authResponse && response.status === 'connected') {
            this._changeStatus(FBLogin.CONNECTED)
        } else {
            this._changeStatus(FBLogin.NOT_AUTHORIZED)
        }
    }

    //call me by button clicking
    login = () => {
        this.FB.login( this._updateStatus, {scope:'user_posts, user_likes, user_friends'} )
    }
    logout = () => {
        this.FB.logout( this._updateStatus)
    }

    getMyInfo = (callback)=>{
        this.FB.api('/me', callback)
        /* response=>{
            if(!response.error){}
            console.log(' my info : ',response)
        } */
    }

    getStatus = () =>{
        this._changeStatus(FBLogin.CHECKING)
        this.FB.getLoginStatus( this._updateStatus )
    }
}