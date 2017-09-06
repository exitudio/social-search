import * as FBPostAction from './fbPostAction'

const initialState = {
    posts: [],
    sharedPosts: [],
}

const fbPostReducer = (state=initialState, action)=>{
    switch(action.type){
        case FBPostAction.LOADING_POSTS:{
            return {...state, posts: [], sharedPosts:{} }
        }
        case FBPostAction.ADD_POSTS:{
            return {
                ...state, 
                posts: state.posts.concat(action.payload.posts),
                sharedPosts: {...state.sharedPosts, ...action.payload.sharedPosts},
            }
        }
        default:
            return {...state}
    }
}
export default fbPostReducer