import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import withRedux from 'next-redux-wrapper'

import reducer from './reducer'
import FBPageReducer from '../components/index/search/redux/FBPageReducer'


const logger = createLogger({
    timestamp:true,
    duration:true
})

const allReducers = combineReducers({reducer, FBPageReducer})

export const initStore = (initialState = {}) => {
    return createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))
}

export const reduxPage = (comp) => withRedux(initStore)(comp)