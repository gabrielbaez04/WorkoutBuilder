import _ from 'lodash';
import Routine from '../models/routine.model';
import errorHandler from '../helpers/dbErrorHandler';

const create = (req, res, next) => {
  const routine = new Routine(req.body);
  routine.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(routine);
  });
};

const list = (req, res, next, userId) => {
  Routine.find({ userId }, (err, Routine) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(Routine);
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

const update = (req, res, next) => {
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

const remove = (req, res, next) => {
  const routine = req.routine;
  routine.remove((err, deletedroutine) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(deletedroutine);
  });
};
export default {
  create, routineByID, read, list, remove, update,
};
