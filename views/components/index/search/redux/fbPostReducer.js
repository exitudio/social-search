import * as FBPostAction from './fbPostAction'

const initialState = {
    posts: [],
}

const fbPostReducer = (state=initialState, action)=>{
    switch(action.type){
        case FBPostAction.LOADING_POSTS:{
            return {...state, posts: [] }
        }
        case FBPostAction.ADD_POSTS:{
            return {...state, posts: state.posts.concat(action.payload) }
        }
        default:
            return {...state}
    }
}
export default fbPostReducer