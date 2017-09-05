import {appId} from '~/views/config.js'
import FBLogin from '~/views/libs/facebookGraphAPI/FBLogin'

//reducer type
export const LOGIN_STATUS = 'login_status'

//status type
export const CHECKING = FBLogin.CHECKING
export const CONNECTED = FBLogin.CONNECTED
export const NOT_AUTHORIZED = FBLogin.NOT_AUTHORIZED

let fbLogin

//picture 50x50 : http://graph.facebook.com/67563683055/picture?type=square
export const initOnceAction = ()=>{
    return dispatch => {
        if( !fbLogin ){
            fbLogin = new FBLogin(appId)
            fbLogin.init(status=>{
                let userID = ''
                let accessToken = ''
                if( fbLogin.authResponse ){
                    userID = fbLogin.authResponse.userID
                    accessToken = fbLogin.authResponse.accessToken

                    if(status===CONNECTED){
                        //status === connected
                        //load name
                        fbLogin.getMyInfo( response=>{
                            if(response.error){
                                dispatch( {
                                    type: LOGIN_STATUS,
                                    payload:{
                                        userID, accessToken, name:'', status
                                    }
                                })
                            }else{
                                dispatch( {
                                    type: LOGIN_STATUS,
                                    payload:{ userID, accessToken, name: response.name, status }
                                })
                            }
                        })
                    }else{
                        //status === checking || not_authorize
                        dispatch( {
                            type: LOGIN_STATUS,
                            payload:{ userID, accessToken, name:'', status }
                        })
                    }
                }else{
                    //status === checking || not_authorize
                    dispatch( {
                        type: LOGIN_STATUS,
                        payload:{ userID, accessToken, name:'', status }
                    })
                }
            })
        }else{
            fbLogin.getStatus()
        }
    }
}

export const loginAction = ()=>{
    fbLogin.login()
}
export const logoutAction = ()=>{
    fbLogin.logout()
}
export const getStatusAction = ()=>{
    fbLogin.getStatus()
}