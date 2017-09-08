import * as FBPostAction from './fbPostAction'

const initialState = {
    loadPosts: null,
    foundPosts: [],
    search: '',
}

const fbPostReducer = (state=initialState, action)=>{
    switch(action.type){
        case FBPostAction.LOADING_POSTS:{
            return {
                ...state, 
                loadPosts: action.payload,
                foundPosts:[],
            }
        }
        case FBPostAction.SEARCH_POST:{
            return {
                ...state,
                foundPosts: action.payload.foundPosts,
                search: action.payload.search,
            }
        }
        case FBPostAction.FOUND_NEW_SEARCH_POST:{
            return {
                ...state,
                foundPosts: [...state.foundPosts, ...action.payload]
            }
        }
        default:
            return {...state}
    }
}
export default fbPostReducer