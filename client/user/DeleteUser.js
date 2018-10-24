import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect } from 'react-router-dom';
import auth from '../auth/auth-helper';
import { remove } from './api-user';

class DeleteUser extends Component {
  state = {
    redirect: false,
    open: false,
  }

  clickButton = () => {
    this.setState({ open: true });
  }

  deleteAccount = () => {
    const { userId, updateMenu } = this.props;
    const jwt = auth.isAuthenticated();
    remove({
      userId,
    }, { t: jwt.token }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        auth.signout(() => console.log('deleted'));
        updateMenu();
        this.setState({ redirect: true });
      }
    });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { redirect, open } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <span>
        <IconButton aria-label="Delete" onClick={this.clickButton} color="secondary">
          <DeleteIcon />
        </IconButton>

        <Dialog open={open} onClose={this.handleRequestClose}>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Confirm to delete your account.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
            Cancel
            </Button>
            <Button onClick={this.deleteAccount} color="secondary" autoFocus="autoFocus">
            Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}
DeleteUser.propTypes = {
  userId: PropTypes.string.isRequired,
  updateMenu: PropTypes.func.isRequired,
};
export default DeleteUser;
