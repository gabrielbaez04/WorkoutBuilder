import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    width: '100%',
    backgroundColor: 'rgb(234, 234, 234)',
    color: 'rgb(130, 124, 124)',
    padding: 0,
    boxShadow: 'none',
  },
});

class DeleteExercise extends Component {
  state = {
    redirect: false,
    open: false,
  }

  clickButton = () => {
    this.setState({ open: true });
  }

  deleteExercise = () => {
    this.props.handleExerciseDelete();
    this.setState({ open: false });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  render() {
    const redirect = this.state.redirect;
    const { classes } = this.props;
    if (redirect) {
      return <Redirect to="/workout" />;
    }
    return (
      <div className={classes.button}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={this.clickButton}
        >
          <DeleteOutlinedIcon className={classes.icon} />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleRequestClose}>
          <DialogTitle>Delete Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Confirm to delete this Exercise.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteExercise} color="secondary" autoFocus="autoFocus">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
DeleteExercise.propTypes = {
  handleExerciseDelete: PropTypes.func.isRequired,
};
export default withStyles(styles)(DeleteExercise);
