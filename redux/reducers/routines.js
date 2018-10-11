import { combineReducers } from 'redux'
import {
    REQUEST_ROUTINES,
    RECEIVE_ROUTINES, 
    SELECT_ROUTINE,
    SELECT_WORKOUT,
    UPDATE_WORKOUT,
    SELECT_EXERCISE,
    CREATE_EXERCISE,
    UPDATE_EXERCISE,
    DELETE_EXERCISE

} from '../actions/routines'

const initialState = {
  data: [],
  SelectedRoutine: null,
  SelectedWorkout: null,
  SelectedExercise: null
  
}
const getWorkout = (newData) =>{
  return newData.data.find(routine=>
    routine._id == newData.SelectedRoutine
  ).workouts.find(workout=>
    workout._id == newData.SelectedWorkout
  )
}

const routines = ( state=initialState , action) => {
  let newData, workout;
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
      newData = Object.assign({},state);
      getWorkout(newData).exercises.push(action.exercise);
      return Object.assign({}, state, {data:newData.data})

    case UPDATE_EXERCISE: 
      newData = Object.assign({},state);
      workout = getWorkout(newData);
      workout.exercises = workout.exercises.map((exercise)=>{
        return exercise._id == newData.SelectedExercise ? action.exercise : exercise
      });
      return Object.assign({}, state, {data:newData.data})
      
    case DELETE_EXERCISE: 
      newData = Object.assign({},state);
      workout = getWorkout(newData);
      workout.exercises = workout.exercises.filter((exercise)=>{
        return exercise._id != action.exerciseId
      });
      return Object.assign({}, state, {data:newData.data})
    
      case UPDATE_WORKOUT:
        newData = Object.assign({},state);
        workout = getWorkout(newData);
        workout.name = action.workoutName;
        return Object.assign({}, state, {data:newData.data})

    default:
      return state
  }
}

export {routines}
