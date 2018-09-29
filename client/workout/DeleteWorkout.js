import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import auth from './../auth/auth-helper'
import {remove} from './api-workout'
import { withStyles } from '@material-ui/core/styles';

const styles= theme => ({
  button:{
    width: '100%',
    backgroundColor:theme.palette.primary.main, 
    color:'white',
    padding: 0,
    borderRadius: '4px'
},
});

class DeleteWorkout extends Component {
  state = {
    open: false
  }
  clickButton = () => {
    this.setState({open: true})
  }
  deleteWorkout = () => {
    const jwt = auth.isAuthenticated()
    remove({
      workoutId: this.props.workoutId
    }, {t: jwt.token}).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.props.handleReturn();
      }
    })
  }
  handleRequestClose = () => {
    this.setState({open: false})
  }
  render() {
    const {classes} = this.props;
    return (
      <div  className={classes.button}>
        <Button variant="contained" className={classes.button} 
                  onClick={this.clickButton}>
            <DeleteOutlinedIcon className={classes.icon}/>
            
          </Button>
        <Dialog open={this.state.open} onClose={this.handleRequestClose}>
        <DialogTitle>{"Delete Workout"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Confirm to delete this Workout.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleRequestClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.deleteWorkout} color="secondary" autoFocus="autoFocus">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
  }
}
DeleteWorkout.propTypes = {
  workoutId: PropTypes.any.isRequired
}
export default  withStyles(styles, { withTheme: true })(DeleteWorkout)