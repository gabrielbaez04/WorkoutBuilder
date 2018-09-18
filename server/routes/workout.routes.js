import express from 'express'
import workoutCtrl from '../controllers/workout.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/workouts')
  .get(authCtrl.requireSignin,workoutCtrl.list)
  .post(workoutCtrl.create)

router.route('/api/workouts/:workoutId')
  .get(authCtrl.requireSignin, workoutCtrl.read)
  .put(authCtrl.requireSignin,workoutCtrl.update)
  .delete(authCtrl.requireSignin,workoutCtrl.remove)

router.param('workoutId', workoutCtrl.workoutByID)

export default router