import express from 'express'
import workoutCtrl from '../controllers/workout.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/workout')
  .post(workoutCtrl.create)

router.route('/api/workouts/:userId')
  .get(authCtrl.requireSignin,workoutCtrl.list)

router.route('/api/workout/:workoutId')
  .get(authCtrl.requireSignin, workoutCtrl.read)
  .put(authCtrl.requireSignin,workoutCtrl.update)
  .delete(authCtrl.requireSignin,workoutCtrl.remove)

router.param('workoutId', workoutCtrl.workoutByID)
router.param('userId', workoutCtrl.list)

export default router