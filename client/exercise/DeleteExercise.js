import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import auth from './../auth/auth-helper'
import {Redirect, Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button:{
    borderRadius:'50%'
},
}

class DeleteExercise extends Component {
  state = {
    redirect: false,
    open: false
  }
  clickButton = () => {
    this.setState({open: true})
  }
  deleteExercise = () => {
    
  }
  handleRequestClose = () => {
    this.setState({open: false})
  }
  render() {
    const redirect = this.state.redirect
    const {classes} = this.props;
    if (redirect) {
      return <Redirect to='/workout'/>
    }
    return (<span>
      <Button variant="contained" className={classes.button} 
                                style={{backgroundColor:'#de0025', color:'white'}}
                                onClick={this.clickButton}>
                            <DeleteOutlinedIcon className={classes.icon}/>
                        </Button>
      <Dialog open={this.state.open} onClose={this.handleRequestClose}>
        <DialogTitle>{"Delete Exercise"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Confirm to delete this Exercise.
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
    </span>)
  }
}

export default  withStyles(styles)(DeleteExercise)