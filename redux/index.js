import { combineReducers } from 'redux'
import {routines} from './reducers/routines'

const rootReducer = combineReducers({
    routines
})

export default rootReducer