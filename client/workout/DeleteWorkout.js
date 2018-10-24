import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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

class DeleteWorkout extends Component {
  state = {
    open: false,
  }

  clickButton = () => {
    this.setState({ open: true });
  }

  handleWorkoutDelete = () => {
    const { handleWorkoutDelete } = this.props;
    handleWorkoutDelete();
    this.setState({ open: false });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.button}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={this.clickButton}
        >
          <DeleteOutlinedIcon className={classes.icon} />

        </Button>
        <Dialog open={open} onClose={this.handleRequestClose}>
          <DialogTitle>Delete Workout</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Confirm to delete this Workout.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
            Cancel
            </Button>
            <Button onClick={this.handleWorkoutDelete} color="secondary" autoFocus="autoFocus">
            Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
DeleteWorkout.propTypes = {
  classes: PropTypes.object.isRequired,
  handleWorkoutDelete: PropTypes.func.isRequired,
};
export default withStyles(styles, { withTheme: true })(DeleteWorkout);
