import * as LoginAction from './logInAction'
const defaultState = {
    userID:'',
    name:'',
    accessToken:'',
    status: LoginAction.CHECKING,
}
export default (state=defaultState, action)=>{
    switch(action.type){
        case LoginAction.LOGIN_STATUS:{
            return {
                ...state, 
                userID:action.payload.userID, 
                name:action.payload.name, 
                accessToken:action.payload.accessToken, 
                status:action.payload.status, 
            }
        }
        default:
            return {...state}
    }
}