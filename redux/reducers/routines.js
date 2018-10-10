import { combineReducers } from 'redux'
import {
    REQUEST_ROUTINES,
    RECEIVE_ROUTINES, 
    SELECT_ROUTINE,
    SELECT_WORKOUT,
    SELECT_EXERCISE,
    CREATE_EXERCISE
} from '../actions/routines'

const initialState = {
  data: [],
  SelectedRoutine: null,
  SelectedWorkout: null,
  SelectedExercise: null
  
}

const routines = ( state=initialState , action) => {
    switch (action.type) {     
      case RECEIVE_ROUTINES:
        return Object.assign({}, state, {
          data: action.routines,
        })

      case SELECT_ROUTINE:
        return Object.assign({}, state, {
          SelectedRoutine: action.routineId,
        })
        
      case SELECT_WORKOUT:
        return Object.assign({}, state, {
          SelectedWorkout: action.workoutId,
      })

      case SELECT_EXERCISE:
        return Object.assign({}, state, {
          SelectedExercise: action.exerciseId,
      })

      case CREATE_EXERCISE:
      
      case CREATE_EXERCISE:      
        let newData = Object.assign({},state);
          newData.data.find(routine=>
          routine._id == newData.SelectedRoutine
        ).workouts.find(workout=>
          workout._id == newData.SelectedWorkout
        ).exercises.push(action.exercise);

        return Object.assign({}, state, {newData})

      default:
        return state
    }
    
  }

export {routines}
