import Workout from '../models/workout.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'

const create = (req, res, next) => {
    const workout = new Workout(req.body)
    workout.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(workout)
    })
  }

const list = (req, res, next, userId) => {
    Workout.find({userId: userId},(err, Workouts) => {
        if (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
        }
        res.json(Workouts)
    })
}

const workoutByID = (req, res, next, id) => {
    Workout.findById(id).exec((err, workout) => {
      if (err || !workout)
        return res.status('400').json({
          error: "workout not found"
        })
      req.workout = workout
      next()
    })
}

const read = (req, res) => {
    return res.json(req.workout)
}

const update = (req, res, next) => {
    let workout = req.workout
    workout = _.extend(workout, req.body)
    workout.updated = Date.now()
    workout.save((err) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(workout)
    })
}

const remove = (req, res, next) => {
    let workout = req.workout
    workout.remove((err, deletedworkout) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(deletedworkout)
    })

}
  export default { create, workoutByID, read, list, remove, update }

