import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from './reducer'


const logger = createLogger({
    timestamp:true,
    duration:true
})

const allReducers = combineReducers({reducer})

export const initStore = (initialState = {}) => {
    return createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))
}

