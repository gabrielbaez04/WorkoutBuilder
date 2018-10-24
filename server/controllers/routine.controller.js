import _ from 'lodash';
import Routine from '../models/routine.model';
import errorHandler from '../helpers/dbErrorHandler';
/* eslint consistent-return: 0 */
const create = (req, res) => {
  const routine = new Routine(req.body);
  routine.save((err) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(routine);
  });
};

const list = (req, res, userId) => {
  Routine.find({ userId }, (err, routine) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(routine);
  });
};

const routineByID = (req, res, next, id) => {
  Routine.findById(id).exec((err, routine) => {
    if (err || !routine) {
      return res.status('400').json({
        error: 'routine not found',
      });
    }
    req.routine = routine;
    next();
  });
};

const read = (req, res) => res.json(req.routine);

const update = (req, res) => {
  let routine = req.routine;
  routine = _.extend(routine, req.body);
  routine.updated = Date.now();
  routine.save((err) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(routine);
  });
};

const remove = (req, res) => {
  const { routine } = req;
  routine.remove((err, deletedroutine) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(deletedroutine);
  });
};
/* eslint consistent-return: 1 */
export default {
  create, routineByID, read, list, remove, update,
};
