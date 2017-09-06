import axios from 'axios'
import * as JsLib from '~/views/libs/JsLib'
export const LOADING_POSTS = 'loading_posts'
export const LOAD_FAIL_POSTS = 'load_fail_posts'
export const ADD_POSTS = 'add_posts'
export const LOAD_POSTS_DONE = 'load_posts_done'

let loadPosts

class LoadPostWithParentShare{
    constructor(ownerID, accessToken, dispatch, getState){
        this.active = true
        this.ownerID = ownerID
        this.accessToken = accessToken
        this.dispatch = dispatch
        this.getState = getState

        this.fieldParam = 'fields=picture,name,caption,created_time,description,feed_targeting,from,icon,link,message,permalink_url,shares,source,status_type,story,type,with_tags,parent_id,full_picture'
        this.baseURL = `${this.ownerID}/posts`
        const defaultURL = `${this.baseURL}?${this.fieldParam}&limit=50` //Batch limitation is 50
        this.getLoad(defaultURL)
    }

    getLoad = (url)=>{
        const params = new URLSearchParams()
        params.append('access_token',this.accessToken)
        params.append('include_headers',false)
        params.append('batch',`[
            { 
                "method":"GET",
                "name":"get-posts", 
                "relative_url":"${url}", 
                "omit_response_on_success":false,
            }, 
            {
                "method":"GET",
                "relative_url":"?ids={result=get-posts:$.data.*.parent_id}&${this.fieldParam}"
            }
        ]`)
        axios.post('https://graph.facebook.com',params)
            .then(response=>{
                // console.log(response)
                if(this.active){
                    if( response && !response.error && response.status === 200){
    
                        const result = JSON.parse(response.data[0].body)
                        const sharedResult = JSON.parse(response.data[1].body)
                        
                        this.dispatch({
                            type: ADD_POSTS,
                            payload:{
                                posts: result.data,
                                sharedPosts: sharedResult.error ? {} : sharedResult
                            }
                        })
                        console.log('result:',result)
                        console.log('sharedResult:',sharedResult)
                        console.log('________________________________________')

                        //check length of posts array
                        const isPostsLessThan4000 = this.getState().fbPostReducer.posts.length < 1

                        if( result.paging && result.paging.next && isPostsLessThan4000 ){
                            // console.log('next',result.paging.next)
    
                            //delete unuse params (access_token)
                            let params = result.paging.next.split('?')[1]
                            // let paramsObj = JsLib.URLParamsToObject(params)
                            // delete paramsObj.access_token
                            // params = JsLib.ObjectToURLParams(paramsObj)
    
                            // console.log('params',params)
                            const url = `${this.baseURL}?${params}`
                            this.getLoad(url)
                        }else{
                            console.log('no next page or reach 4000 posts loaded')
                        }
    
                    }else{
                        this.dispatch({type:LOAD_FAIL_POSTS})
                    }
                }
            })
            .catch(response=>{
                console.log(response)
                this.dispatch({type:LOAD_FAIL_POSTS})
            })
    }

    getResponseAndLoadNextPage = response=>{
    }
}

export const loadPostAction = ownerID=>{
    return (dispatch, getState)=>{

        dispatch({type:LOADING_POSTS})
        if( loadPosts ) loadPosts.active = false
        const accessToken = getState().loginReducer.accessToken
        loadPosts = new LoadPostWithParentShare(ownerID, accessToken, dispatch, getState)
    }
}