import _ from 'lodash';
import User from '../models/user.model';
import errorHandler from '../helpers/dbErrorHandler';
/* eslint consistent-return: 0 */
const create = (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.status(200).json({
      message: 'Successfully signed up!',
    });
  });
};

const list = (res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(users);
  }).select('name email updated created');
};

const userByID = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status('400').json({
        error: 'User not found',
      });
    }
    req.profile = user;
    next();
  });
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const update = (req, res) => {
  let user = req.profile;
  user = _.extend(user, req.body);
  user.updated = Date.now();
  user.save((err) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    // removing the sensitive data, before sending the user object
    // in the response to the requesting client.
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  });
};

const remove = (req, res) => {
  const user = req.profile;
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    const newDeletedUser = deletedUser;
    newDeletedUser.hashed_password = undefined;
    newDeletedUser.salt = undefined;
    res.json(newDeletedUser);
  });
};
/* eslint consistent-return: 1 */
export default {
  create, userByID, read, list, remove, update,
};
