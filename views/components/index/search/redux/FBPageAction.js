export const LOADING_FB_PAGES = 'loading_fb_pages'
export const LOAD_FAIL_FB_PAGES = 'load_fail_fb_pages'
export const ADD_FB_PAGES = 'add_fb_pages'

export const LoadFBPageAction = (searchWords) => {
    return dispatch => {
        console.log('searchWords',searchWords)
        dispatch({type: LOADING_FB_PAGES, payload: searchWords})
        return new Promise((resolve, reject) => {
                window['FB'].api(
                    '/search',
                    'GET',
                    {"q":searchWords,"type":"page","fields":"picture,name"},
                    function(response) {
                        if(response && response.data && !response.error){
                            resolve(response)
                        }else{
                            reject(response)
                        }
                    }
                )
            })
            .then(response => {
                dispatch({ type: ADD_FB_PAGES, payload:response.data })
            })
            .catch(response => {
                console.log('LOAD FAIL ....',response)
                dispatch({
                    type: LOAD_FAIL_FB_PAGES,
                })
            })
    }
}