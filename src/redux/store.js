import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import reducer from './reducer'

/*const myLogger = (store) => (next) => (action) => {
	console.log("Logged action: ", action)
	next(action)
}*/

export default createStore(
	combineReducers({reducer}), 
	{},
	applyMiddleware(logger())
)