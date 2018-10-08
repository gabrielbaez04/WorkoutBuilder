import { combineReducers } from 'redux'
import {
    REQUEST_ROUTINES,
    RECEIVE_ROUTINES 
} from './actions'

const routines = (
    state = {
      routines: []
    },
    action
  ) => {
    switch (action.type) {     
      case RECEIVE_ROUTINES:
        return Object.assign({}, ...state, {
          routines: action.routines,
        })
      default:
        return state
    }
  }

const rootReducer = combineReducers({
    routines
})

export default rootReducer