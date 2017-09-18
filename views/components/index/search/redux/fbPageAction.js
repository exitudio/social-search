export const LOADING_FB_PAGES = 'loading_fb_pages'
export const LOAD_FAIL_FB_PAGES = 'load_fail_fb_pages'
export const CLEAR_SEARCH = 'clear_search'
export const ADD_FB_PAGES = 'add_fb_pages'



export default class LoadPages{
    constructor(){
        this.active = true
    }
    
    getPromise = (searchWords)=>{
        return new Promise((resolve, reject) => {
                window['FB'].api(
                    '/search',
                    'GET',
                    { "q": searchWords, "type": "page", "fields": "picture,name", "limit": 5 },
                    response => {
                        if(this.active){
                            if (response && response.data && !response.error) {
                                resolve(response)
                            } else {
                                reject(response)
                            }
                        }
                    }
                )
        })
    }
}


export const loadFBPageAction = (searchWords) => {
    return (dispatch, getState) => {
        console.log('searchWords', searchWords)
        let loadPages = getState().fbPageReducer.loadPages
        if(loadPages) loadPages.active = false
            
        if (searchWords !== '') {
            loadPages = new LoadPages()
            dispatch({ 
                type: LOADING_FB_PAGES, 
                payload: {
                    searchWords,
                    loadPages,
                }})
            return loadPages.getPromise(searchWords)
                .then(response => {
                    dispatch({ type: ADD_FB_PAGES, payload: response.data })
                })
                .catch(response => {
                    console.log('LOAD PAGE FAIL ....', response)
                    dispatch({ type: LOAD_FAIL_FB_PAGES, })
                })
        } else {
            console.log('_____ clear _____')
            const loginState = getState().loginReducer
            dispatch({ type: CLEAR_SEARCH, 
                payload: [{
                 id:loginState.userID,
                 name: loginState.name,
                 picture:{ data:{url:`http://graph.facebook.com/${loginState.userID}/picture?type=square`}}
                }] })
        }
    }
}