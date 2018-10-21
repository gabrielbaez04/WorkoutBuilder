export const REQUEST_ROUTINES = 'REQUEST_ROUTINES';
export const RECEIVE_ROUTINES = 'RECEIVE_ROUTINES';
export const CREATE_ROUTINE = 'CREATE_ROUTINE';
export const DELETE_ROUTINE = 'DELETE_ROUTINE';
export const UPDATE_ROUTINE = 'UPDATE_ROUTINE';
export const UPDATE_ROUTINE_NAME = 'UPDATE_ROUTINE_NAME';
export const SELECT_ROUTINE = 'SELECT_ROUTINE';

export const CREATE_WORKOUT = 'CREATE_WORKOUT';
export const DELETE_WORKOUT = 'DELETE_WORKOUT';
export const UPDATE_WORKOUT = 'UPDATE_WORKOUT';
export const SELECT_WORKOUT = 'SELECT_WORKOUT';
export const UPDATE_WORKOUT_DATA = 'UPDATE_WORKOUT_DATA';

export const CREATE_EXERCISE = 'CREATE_EXERCISE';
export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const UPDATE_EXERCISE = 'UPDATE_EXERCISE';
export const SELECT_EXERCISE = 'SELECT_EXERCISE';

export const requestRoutines = (userId, token) => dispatch => fetch(`/api/routines/${userId}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then(response => response.json())
  .then((data) => {
    dispatch(receiveRoutines(data));
  }).catch(err => console.log(err));

export const receiveRoutines = routines => ({
  type: RECEIVE_ROUTINES,
  routines,
});

export const selectRoutine = routineId => ({
  type: SELECT_ROUTINE,
  routineId,
});

export const selectWorkout = workoutId => ({
  type: SELECT_WORKOUT,
  workoutId,
});

export const selectExercise = exerciseId => ({
  type: SELECT_EXERCISE,
  exerciseId,
});

export const createExercise = exercise => ({
  type: CREATE_EXERCISE,
  exercise,
});

export const updateExercise = exercise => ({
  type: UPDATE_EXERCISE,
  exercise,
});

export const deleteExercise = exerciseId => ({
  type: DELETE_EXERCISE,
  exerciseId,
});

export const updateWorkout = workoutName => ({
  type: UPDATE_WORKOUT,
  workoutName,
});

export const createWorkout = workoutName => ({
  type: CREATE_WORKOUT,
  workoutName,
});

export const deleteWorkout = workoutId => ({
  type: DELETE_WORKOUT,
  workoutId,
});

export const updateRoutine = routine => ({
  type: UPDATE_ROUTINE,
  routine,
});

export const createRoutine = routine => ({
  type: CREATE_ROUTINE,
  routine,
});

export const updateRoutineName = routineName => ({
  type: UPDATE_ROUTINE_NAME,
  routineName,
});

export const deleteRoutine = routineId => ({
  type: DELETE_ROUTINE,
  routineId,
});

export const updateWorkoutData = workout => ({
  type: UPDATE_WORKOUT_DATA,
  workout,
});
