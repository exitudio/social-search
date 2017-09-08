import * as FBPostAction from './fbPostAction'

const initialState = {
    posts: [],
    sharedPosts: {}, //hashMap for nested (shared) post
    foundPosts: [],
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
        case FBPostAction.SEARCH_POST:{
            return {
                ...state,
                foundPosts: action.payload,
            }
        }
        default:
            return {...state}
    }
}
export default fbPostReducer