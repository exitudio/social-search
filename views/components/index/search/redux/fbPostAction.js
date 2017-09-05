import axios from 'axios'
export const LOADING_POSTS = 'loading_posts'
export const LOAD_FAIL_POSTS = 'load_fail_posts'
export const ADD_POSTS = 'add_posts'
export const LOAD_POSTS_DONE = 'load_posts_done'

let loadPosts

class LoadPosts{
    constructor(ownerID, dispatch){
        this.active = true

        window['FB'].api(
            ownerID+'/posts',
            'GET',
            { "fields": "picture,name,caption,created_time,description,feed_targeting,from,icon,link,message,permalink_url,shares,source,status_type,story,type,with_tags,parent_id,full_picture", "limit": 100 },
            response => {
                console.log('post::',response)
                if( this.active ){
                    if(!response.error){
                        this.getResponseAndLoadNextPage(response, dispatch)
                    }else{
                        dispatch({type:LOAD_FAIL_POSTS})
                    }
                }
            }
        )
    }

    getResponseAndLoadNextPage = (response, dispatch)=>{
        dispatch({
            type: ADD_POSTS,
            payload:response.data,
        })
        if( response.paging && response.paging.next ){
            axios.get(response.paging.next)
                .then(response=>{
                    console.log('page...',response)
                    if( this.active ){
                        this.getResponseAndLoadNextPage(response.data, dispatch)
                    }
                })
                .catch(response=>{
                    console.log('page fail...',response)
                    if( this.active ){
                        dispatch({type:LOAD_FAIL_POSTS})
                    }
                })
        }else{
            dispatch({type:LOAD_POSTS_DONE})
        }
    }
}

export const loadPostAction = ownerID=>{
    return (dispatch, getState)=>{
        /* const accessToken = getState().loginReducer.accessToken
        const params = new URLSearchParams()
        params.append('access_token',accessToken)
        params.append('include_headers',false)
        params.append('batch',`[
            { 
                "method":"GET",
                "name":"get-post", 
                "relative_url":"me/posts?fields=picture,name,caption,created_time,description,feed_targeting,from,icon,link,message,permalink_url,shares,source,status_type,story,type,with_tags,parent_id,full_picture", 
                "omit_response_on_success":false,
            }, ]`)
        axios.post('https://graph.facebook.com',params)
            .then(response=>{
                console.log(response)
                if(response.status === 200){
                    const result = JSON.parse(response.data[0].body)
                    console.log('result',result)
                }else{
                    console.log('--- error ----')
                }
            })
            .catch(response=>{
                console.log(response)
            })
        return  */
        dispatch({type:LOADING_POSTS})
        if( loadPosts ) loadPosts.active = false
        loadPosts = new LoadPosts(ownerID, dispatch)
    }
}