export const REQUEST_ROUTINES = 'REQUEST_ROUTINES'
export const RECEIVE_ROUTINES = 'RECEIVE_ROUTINES'
export const CREATE_ROUTINE = 'CREATE_ROUTINE'
export const DELETE_ROUTINE = 'DELETE_ROUTINE'
export const UPDATE_ROUTINE = 'UPDATE_ROUTINE'
export const SELECT_ROUTINE = 'SELECT_ROUTINE'

export const CREATE_WORKOUT = 'CREATE_WORKOUT'
export const DELETE_WORKOUT = 'DELETE_WORKOUT'
export const UPDATE_WORKOUT = 'UPDATE_WORKOUT'
export const SELECT_WORKOUT = 'SELECT_WORKOUT'

export const CREATE_EXERCISE = 'CREATE_EXERCISE'
export const DELETE_EXERCISE = 'DELETE_EXERCISE'
export const UPDATE_EXERCISE = 'UPDATE_EXERCISE'
export const SELECT_EXERCISE = 'SELECT_EXERCISE'

export const requestRoutines = (userId, token) =>{
    return dispatch => {
        return fetch('/api/routines/'+userId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }).then(response => response.json())
        .then(data => {
            dispatch(receiveRoutines(data))
        }).catch((err) => console.log(err))
    }
}

export const receiveRoutines = (routines) =>{
    return {
      type: RECEIVE_ROUTINES,
      routines: routines
    }
  }