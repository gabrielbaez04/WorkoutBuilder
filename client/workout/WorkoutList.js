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
import {selectRoutine, selectWorkout} from '../../redux/actions/routines'

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

    handleGoClick = (workout) =>{
        this.setState({selectedWorkout: workout});
    }
    handleEditClick = (workout) =>{
        this.setState({editWorkout: workout, isNew : false});
    }
    handleAddClick = () =>{
        this.props.dispatch(selectWorkout([]));
    }
    handleReturn = () =>{
        this.props.dispatch(selectRoutine(null));
    }
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
                                        handleGoClick={this.handleGoClick}/>
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
                {false && this.props.SelectedWorkout 
                    && <Workout 
                            handleBackClick={this.handleBackClick}
                            handleReturn = {this.handleReturnClick}
                        />
                }
                {this.props.SelectedWorkout 
                    && <ExerciseList 
                            handleBackClick={this.handleBackClick}
                            handleReturn = {this.handleReturnClick}
                        />
                }
            </div>
        );
    }
}
export default connect(mapStateToProps)(withStyles(styles)(WorkoutList));
