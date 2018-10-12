import { combineReducers } from 'redux'
import {
    REQUEST_ROUTINES,
    RECEIVE_ROUTINES, 
    SELECT_ROUTINE,
    SELECT_WORKOUT,
    UPDATE_WORKOUT,
    CREATE_WORKOUT,
    SELECT_EXERCISE,
    CREATE_EXERCISE,
    UPDATE_EXERCISE,
    DELETE_EXERCISE,
    DELETE_WORKOUT,
    UPDATE_ROUTINE,
    CREATE_ROUTINE

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
const getRoutine = (newData) =>{
  return newData.data.find(routine=>
    routine._id == newData.SelectedRoutine
  )
}

const routines = ( state=initialState , action) => {
  let newData, workout,routine;
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

    case CREATE_WORKOUT:
      newData = Object.assign({},state);
      getRoutine(newData).workouts.push({name: action.workoutName});
      return Object.assign({}, state, {data:newData.data})
      
    case DELETE_WORKOUT: 
      newData = Object.assign({},state);
      routine = getRoutine(newData);
      routine.workouts = routine.workouts.filter((workout)=>{
        return workout._id != action.workoutId
      });
      return Object.assign({}, state, {data:newData.data})
  
    case UPDATE_ROUTINE:
      newData = Object.assign({},state);
      newData.data = newData.data.map(routine=>
        routine._id == newData.SelectedRoutine ? Object.assign({},routine,{...action.routine}) : routine
      )
      return Object.assign({}, state, {data:newData.data})

    case CREATE_ROUTINE: 
      newData = Object.assign({},state);
      newData.data.push({...action.routine});
      return Object.assign({}, state, {data:newData.data})

    default:
      return state
  }
}

export {routines}
