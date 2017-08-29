export const LOADING_FB_PAGES = 'loading_fb_pages'
export const LOAD_FAIL_FB_PAGES = 'load_fail_fb_pages'
export const CLEAR_SEARCH = 'clear_search'
export const ADD_FB_PAGES = 'add_fb_pages'



export default class LoadOnce{
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

let lastLoad

export const LoadFBPageAction = (searchWords) => {
    return dispatch => {
        console.log('searchWords', searchWords)
        if (searchWords !== '') {
            dispatch({ type: LOADING_FB_PAGES, payload: searchWords })
            if(lastLoad) lastLoad.active = false
            lastLoad = new LoadOnce()
            return lastLoad.getPromise(searchWords)
                .then(response => {
                    dispatch({ type: ADD_FB_PAGES, payload: response.data })
                })
                .catch(response => {
                    console.log('LOAD FAIL ....', response)
                    dispatch({ type: LOAD_FAIL_FB_PAGES, })
                })
        } else {
            if(lastLoad) lastLoad.active = false
            dispatch({ type: CLEAR_SEARCH, })

        }
    }
}