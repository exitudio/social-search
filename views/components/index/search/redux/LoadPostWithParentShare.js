import axios from 'axios'

export default class LoadPostWithParentShare{
    static ADD_POSTS = 'add_posts'
    static LOAD_POSTS_FAIL = 'load_posts_fail'
    static LOAD_POSTS_DONE = 'load_posts_done'

    constructor(ownerID, accessToken, callback){
        this.ownerID = ownerID
        this.accessToken = accessToken
        this._callback = callback
        
        this.active = true
        this.fieldParam = 'fields=picture,name,caption,created_time,description,feed_targeting,from,icon,link,message,permalink_url,shares,source,status_type,story,type,with_tags,parent_id,full_picture'
        this.baseURL = `${this.ownerID}/feed`

        this.allPosts = []
        this.sharedPosts = {}
    }
    
    load = ()=>{
        this.allPosts = []
        this.sharedPosts = {}
        const defaultURL = `${this.baseURL}?${this.fieldParam}&limit=50` //Batch limitation is 50
        this._getLoad(defaultURL)
    }
    _addPostData = (posts, sharedPosts)=>{
        this.allPosts = this.allPosts.concat(posts)
        this.sharedPosts = {...this.sharedPosts, ...sharedPosts}
    }

    _getLoad = (url)=>{
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
                        
                        this._addPostData(result.data, sharedResult.error ? {} : sharedResult)
                        this._callback({
                            type: LoadPostWithParentShare.ADD_POSTS,
                            payload: result.data,
                        })

                        console.log('result:',result)
                        console.log('sharedResult:',sharedResult)
                        console.log('________________________________________')

                        //check length of posts array
                        const isPostsLessThan4000 = this.allPosts.length < 100

                        if( result.paging && result.paging.next && isPostsLessThan4000 ){
                            // console.log('next',result.paging.next)
    
                            let params = result.paging.next.split('?')[1]
                            //delete unuse params (access_token)
                            // let paramsObj = JsLib.URLParamsToObject(params)
                            // delete paramsObj.access_token
                            // params = JsLib.ObjectToURLParams(paramsObj)
    
                            // console.log('params',params)
                            const url = `${this.baseURL}?${params}`
                            this._getLoad(url)
                        }else{
                            console.log('no next page or reach 4000 posts loaded')
                            this._callback({type: LoadPostWithParentShare.LOAD_POSTS_DONE})
                        }
    
                    }else{
                        this._callback({type: LoadPostWithParentShare.LOAD_POSTS_FAIL})
                    }
                }
            })
            .catch(response=>{
                console.log(response)
                this._callback({type: LoadPostWithParentShare.LOAD_POSTS_FAIL})
            })
    }
}