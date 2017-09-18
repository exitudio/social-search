import * as FBPostAction from './fbPostAction'

const initialState = {
    loadPosts: null,
    foundPosts: [],
    search: '',

    //navigator
    currentPage: 0,
    totalPage: 0,
    postPerPage: 10,
    startPostIndex:0,

}

const fbPostReducer = (state=initialState, action)=>{
    switch(action.type){
        case FBPostAction.LOADING_POSTS:{
            return {
                ...state, 
                loadPosts: action.payload,
                foundPosts:[],
                currentPage:0,
            }
        }
        case FBPostAction.SEARCH_POST:{
            const foundPosts = action.payload.foundPosts
            return {
                ...state,
                foundPosts,
                search: action.payload.search,
                totalPage: Math.ceil(foundPosts.length/ state.postPerPage),
                currentPage: 0,
                startPostIndex: 0,
            }
        }
        case FBPostAction.FOUND_NEW_SEARCH_POST:{
            const foundPosts = [...state.foundPosts, ...action.payload]
            return {
                ...state,
                foundPosts,
                totalPage: Math.ceil(foundPosts.length/ state.postPerPage),
            }
        }
        case FBPostAction.GOTO_PAGE: {
            const currentPage = action.payload
            return {
                ...state, 
                currentPage,
                startPostIndex: currentPage * state.postPerPage,
            }
        }
        default:
            return {...state}
    }
}
export default fbPostReducer