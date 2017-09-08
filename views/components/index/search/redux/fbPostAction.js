import LoadPostWithParentShare from './LoadPostWithParentShare'
export const LOADING_POSTS = 'loading_posts'
export const LOAD_FAIL_POSTS = 'load_fail_posts'
export const ADD_POSTS = 'add_posts'
export const LOAD_POSTS_DONE = 'load_posts_done'
export const SEARCH_POST = 'search_post'

let loadPosts
export const loadPostAction = ownerID=>{
    return (dispatch, getState)=>{

        dispatch({type:LOADING_POSTS})
        if( loadPosts ) loadPosts.active = false
        const accessToken = getState().loginReducer.accessToken
        loadPosts = new LoadPostWithParentShare(ownerID, accessToken, dispatch, getState)
    }
}

const searchEachKey = (obj, keys, search)=>{
    const reg = new RegExp(search)
    for(let i=0; i<keys.length; i++){
        let searchWord = obj[ keys[i] ]
        if( reg.test( searchWord ) ){
            return true
        }
    }
    return false
}

export const searchPostAction = search=>{
    return (dispatch, getState)=>{
        
        const state = getState()
        let foundArray = []
        if(search){
            for(let i=0; i<state.fbPostReducer.posts.length; i++){
                let isFound = searchEachKey( state.fbPostReducer.posts[i], 
                                            ['name', 'caption', 'description', 'link', 'message'],
                                            search)
                if(isFound){
                    foundArray.push( state.fbPostReducer.posts[i] )
                }
            }
        }else{
            foundArray = [...state.fbPostReducer.posts]
        }
        dispatch({
            type: SEARCH_POST,
            payload: foundArray,
        })
    }
}