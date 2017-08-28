export const LOADING_FB_PAGES = 'loading_fb_pages'
export const LOAD_FAIL_FB_PAGEDS = 'load_fail_fb_pages'
export const ADD_FB_PAGES = 'add_fb_pages'

const MAX_LOAD_TIMES = 3
let loadTimes = 0

const loadPages = (resolve, reject) => {

    window['FB'].api('/me/likes?fields=description,created_time,link,global_brand_page_name,picture&limit=100','get', response=>{
        loadTimes++
        if(response && response.data && !response.error){
            console.log(response)
            //response.data
            //response.paging
            resolve(response)
        }else{
            console.log('error...',response)
            if (loadTimes < MAX_LOAD_TIMES) {
                setTimeout(1000,()=>loadPages(resolve, reject))
            } else {
                reject(response)
            }
        }
    })
}
export const LoadFBPageAction = () => {
    loadTimes = 0
    return dispatch => {
        dispatch({type: LOADING_FB_PAGES})
        return new Promise((resolve, reject) => {
                loadPages(resolve, reject)
            })
            .then(response => {
                dispatch({ type: ADD_FB_PAGES, payload:response.data })
            })
            .catch(response => {
                console.log(response)
                dispatch({
                    type: LOAD_FAIL_FB_PAGEDS,
                })
            })
    }
}