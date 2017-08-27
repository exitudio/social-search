export default class FBFeed {
    constructor(fbLogin, errorNoPermission) {
        this.fbLogin = fbLogin
        this.errorNoPermission = errorNoPermission
    }
    getPostBy = who => {
        // this.fbLogin.authResponse.accessToken
        var body = 'Reading JS SDK documentation'
        window['FB'].api('/me/feed', 'post', { message: body }, function (response) {
            console.log(response)
            if (!response || response.error) {
                if(response.error.code === 200){
                    this.errorNoPermission()
                }
                alert('Error occured')
            } else {
                alert('Post ID: ' + response.id)
            }
        })
    }

    test = ()=>{
        // https://graph.facebook.com/cocacola/posts?access_token=YOUR_ACCESS_TOKEN
        //https://graph.facebook.com/v2.2/PAGE_ID/feed?access_tkoen=YOUR_ACCESS_TOKEN
        
        this.fbLogin.FB.api('/me/feed?fields=description,created_time,link,full_picture,story,message,target&limit=100','get', response=>{
            console.log(response)
        })
    }
}