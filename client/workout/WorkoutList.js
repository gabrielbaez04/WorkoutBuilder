import React from 'react';
import Workout from './Workout';
import ExerciseList from '../exercise/ExerciseList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import auth from './../auth/auth-helper'
import WorkoutListItem from './WorkoutListItem';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import {selectRoutine, selectWorkout, deleteWorkout, requestRoutines, updateRoutine} from '../../redux/actions/routines'
import { update } from '../routine/api-routine'

const styles = theme => ({
    cardGrid: {
        padding: `${theme.spacing.unit * 3}px 0`,
      },
    workoutsContainer: {
        display: 'flex',
        justifyContent: 'center',
      },
      layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
      },
      justify:{
        justifyContent: 'center'
      },
      buttonContainer:{
          display:'flex',
          justifyContent: 'center',
          marginBottom: '10px'
      },
      button:{
          backgroundColor:theme.palette.primary.main, 
          color:'white',
      },

  });

const mapStateToProps = state => {
    return {
        routine: state.routines.data.find(routine=>
            routine._id == state.routines.SelectedRoutine
        ),
        SelectedRoutine : state.routines.SelectedRoutine,
        SelectedWorkout : state.routines.SelectedWorkout,
    }
}

class WorkoutList extends React.Component {
    state = {
        error: '',
        saved: false,
        run: false
    }

    handleGoClick = (workoutId) =>{
        this.setState({run: true});
        this.props.dispatch(selectWorkout(workoutId));
    }
    handleEditClick = (workout) =>{
        this.setState({editWorkout: workout, isNew : false});
    }
    handleAddClick = () =>{
        this.props.dispatch(selectWorkout([]));
    }
    handleReturn = () =>{
        this.props.dispatch(selectWorkout(null));   
        this.setState({run: false});     
    }
    handleSave = () => {
        const jwt = auth.isAuthenticated();
        update({
            routineId: this.props.routine._id
            }, {
            t: jwt.token
            }, this.props.routine).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({saved: true})
                this.props.dispatch(updateRoutine(data));
            }
        })/*.then(
            this.props.SelectedRoutine.length == 0 &&
            this.props.dispatch(selectLastRoutine())
        )*/
    };

    render() {
        const {classes, routine} = this.props
        return (
            <div>
                {!this.props.SelectedWorkout && 
                    <div>
                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={40} className={classes.justify}>
                                {routine.workouts.length>0 && routine.workouts.map(workout => (
                                    <WorkoutListItem
                                        key={workout._id} 
                                        workout={workout}
                                        handleGoClick={this.handleGoClick}
                                        handleSave={this.handleSave}
                                        />
                                ))}
                            </Grid>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button size="small" onClick={this.handleReturn}>
                                <KeyboardReturn />
                                Return
                            </Button>
                            <Button variant="contained" 
                                    onClick={this.handleAddClick}
                                    className={classes.button}>
                                Add Workout
                            </Button>
                        </div>
                    </div>
                    
                }
                {this.state.run && this.props.SelectedWorkout 
                    && <Workout 
                            handleBackClick={this.handleBackClick}
                            handleReturn = {this.handleReturn}
                        />
                }
                {!this.state.run && this.props.SelectedWorkout 
                    && <ExerciseList 
                            handleBackClick={this.handleBackClick}
                        />
                }
            </div>
        );
    }
}
export default connect(mapStateToProps)(withStyles(styles)(WorkoutList));
