import {ADD_TYPE, MINUS_TYPE} from './action'

const defaultState = {value:0}
const mathReducer = (state=defaultState, action)=>{
    switch (action.type){
        case ADD_TYPE:
            return {...state, value: state.value+1}
        case MINUS_TYPE:
            return {...state, value: state.value-1}
        default:
            return state
    }
}
export default mathReducer