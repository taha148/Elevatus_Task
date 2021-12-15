import { combineReducers } from 'redux'
import jobReducer from './jobReducer'
import jobDetailsReducer from '../jobDetailsReducer'
//it will be in store 
export default combineReducers({
    jobsResponse: jobReducer,
    jobsDetails: jobDetailsReducer
})