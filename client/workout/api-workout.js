import auth from './../auth/auth-helper'

const create = (workout) => {
    return fetch('/api/workout', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workout)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }

  const list = (params,credentials) => {
    return fetch('/api/workouts/'+params.userId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
    }).then(response => {
      return response.json()
    }).catch((err) => console.log(err))
  }

  const read = (params, credentials) => {
    return fetch('/api/workout/' + params.workoutId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }

  const update = (params, credentials, workout) => {
    return fetch('/api/workout/' + params.workoutId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify(workout)
    }).then((response) => {
      return response.json()
    }).catch((err) => {
      console.log(err)
    })
  }

  const remove = (params, credentials) => {
    return fetch('/api/workout/' + params.workoutId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => {
      console.log(err)
    }) 
  }

  export { create, list, read, update, remove }