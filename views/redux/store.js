import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import withRedux from 'next-redux-wrapper'

import loginReducer from '../components/index/redux/loginReducer'
import fbPageReducer from '../components/index/search/redux/fbPageReducer'
import fbPostReducer from '../components/index/search/redux/fbPostReducer'


const logger = createLogger({
    timestamp:true,
    duration:true
})

const allReducers = combineReducers({
    fbPageReducer,
    loginReducer,
    fbPostReducer,
})

export const initStore = (initialState = {}) => {
    return createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))
}

export const reduxPage = (comp) => withRedux(initStore)(comp)