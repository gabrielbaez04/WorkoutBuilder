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
import {remove} from './api-routine'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {deleteRoutine} from '../../redux/actions/routines'

const styles= theme => ({
  button:{
    width: '100%',
    backgroundColor:'rgb(234, 234, 234)',  
    color:'rgb(130, 124, 124)',
    padding: 0,
    boxShadow:'none'
},
});

class DeleteRoutine extends Component {
  state = {
    open: false
  }
  clickButton = () => {
    this.setState({open: true})
  }
  handleDelete = () => {
    const jwt = auth.isAuthenticated()
    remove({
      routineId: this.props.RoutineId
    }, {t: jwt.token}).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.handleRequestClose();
        this.props.dispatch(deleteRoutine(this.props.RoutineId))
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
        <DialogTitle>{"Delete Routine"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Confirm to delete this Routine.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleRequestClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleDelete} color="secondary" autoFocus="autoFocus">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
  }
}
DeleteRoutine.propTypes = {
  RoutineId: PropTypes.any.isRequired
}
export default  connect()(withStyles(styles, { withTheme: true })(DeleteRoutine))