import * as FBPageAction from './FBPageAction'
export const NO_LOAD_STAUTS = 'no_load'
export const LOADING_STATUS = 'loading'
export const LOAD_FAIL_STATUS = 'loading'

const defaultState = {
    loadStatus: NO_LOAD_STAUTS,
    pages: [],
    searchWords: ''
}
const FBPageReducer = (state=defaultState, action)=>{
    switch(action.type){
        case FBPageAction.LOADING_FB_PAGES:{
            return {
                ...state,
                loadStatus: LOADING_STATUS,
                searchWords: action.payload,
            }
        }
        case FBPageAction.LOAD_FAIL_FB_PAGES:{
            return {
                ...state,
                loadStatus: LOAD_FAIL_STATUS,
            }
        }
        case FBPageAction.ADD_FB_PAGES:{
            return {
                ...state,
                loadStatus: NO_LOAD_STAUTS,
                pages: action.payload
            }
        }
        default:{
            return {...state}
        }
    }
}
export default FBPageReducer