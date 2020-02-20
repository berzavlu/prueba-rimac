import { combineReducers } from 'redux'
/**
 * Reducers
 */
import userReducer from './reducers/user'

export default combineReducers({ user: userReducer })
