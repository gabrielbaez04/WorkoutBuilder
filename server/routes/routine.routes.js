import express from 'express'
import routineCtrl from '../controllers/routine.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/routine')
  .post(routineCtrl.create)

router.route('/api/routines/:userId')
  .get(authCtrl.requireSignin,routineCtrl.list)

router.route('/api/routine/:routineId')
  .get(authCtrl.requireSignin, routineCtrl.read)
  .put(authCtrl.requireSignin,routineCtrl.update)
  .delete(authCtrl.requireSignin,routineCtrl.remove)

router.param('routineId', routineCtrl.routineByID)
router.param('userId', routineCtrl.list)

export default router