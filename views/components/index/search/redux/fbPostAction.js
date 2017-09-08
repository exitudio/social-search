import LoadPostWithParentShare from './LoadPostWithParentShare'
export const LOADING_POSTS = 'loading_posts'
export const LOAD_POSTS_FAIL = 'load_posts_fail'
export const LOAD_POSTS_DONE = 'load_posts_done'
export const SEARCH_POST = 'search_post'
export const FOUND_NEW_SEARCH_POST = 'found_new_search_post'


export const loadPostAction = ownerID=>{
    return (dispatch, getState)=>{
        let loadPosts = getState().fbPostReducer.loadPosts
        const accessToken = getState().loginReducer.accessToken

        if( loadPosts ) loadPosts.active = false
        loadPosts = new LoadPostWithParentShare(ownerID, accessToken, loadPostCallback(dispatch, getState))
        loadPosts.load()
        dispatch({type:LOADING_POSTS, payload: loadPosts})
    }
}
const loadPostCallback = (dispatch, getState)=>({type, payload})=>{
    console.log('type:',type,' payload:',payload)
    switch(type){
        case LoadPostWithParentShare.ADD_POSTS:{
            const newPosts = payload
            const search = getState().fbPostReducer.search

            if(newPosts && newPosts.length>0){
                let foundNewPosts = []
                for(let i=0; i<newPosts.length; i++){
                    let isFound = searchEachKey( newPosts[i], 
                                                ['name', 'caption', 'description', 'link', 'message'],
                                                search)
                    if(isFound){
                        foundNewPosts.push( newPosts[i] )
                    }
                }
                if( foundNewPosts.length>0 ){
                    dispatch({
                        type: FOUND_NEW_SEARCH_POST,
                        payload: foundNewPosts
                    })
                }
            }
            break
        }
        default:
            break

    }
}

const searchEachKey = (obj, keys, search)=>{
    const reg = new RegExp(search.toLowerCase())
    for(let i=0; i<keys.length; i++){
        let searchWord = obj[ keys[i] ]
        if( typeof searchWord !== 'undefined' && reg.test( searchWord.toLowerCase() ) ){
            return true
        }
    }
    return false
}

export const searchPostAction = search=>{
    return (dispatch, getState)=>{
        
        const allPosts = getState().fbPostReducer.loadPosts ? 
                                getState().fbPostReducer.loadPosts.allPosts : 
                                []
        let foundPosts = []
        if(search){
            for(let i=0; i<allPosts.length; i++){
                let isFound = searchEachKey( allPosts[i], 
                                            ['name', 'caption', 'description', 'link', 'message'],
                                            search)
                if(isFound){
                    foundPosts.push( allPosts[i] )
                }
            }
        }else{
            foundPosts = [...allPosts]
        }
        dispatch({
            type: SEARCH_POST,
            payload: {foundPosts, search}
        })
    }
}