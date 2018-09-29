import React from 'react';
import Workout from './Workout';
import ExerciseList from '../exercise/ExerciseList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {list} from './api-workout'
import auth from './../auth/auth-helper'
import WorkoutListItem from './WorkoutListItem';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

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

class WorkoutList extends React.Component {
    state = {
        selectedWorkout: null,
        editWorkout:null,
        workouts : [],
        error:'',
        isNew: false
    }
    handleGoClick = (workout) =>{
        this.setState({selectedWorkout: workout});
    }
    handleBackClick = () =>{
        this.setState({selectedWorkout: null, editWorkout:null});
    }
    handleEditClick = (workout) =>{
        this.setState({editWorkout: workout});
    }
    handleAddClick = () =>{
        this.setState({editWorkout: [], isNew : true});
    }
    handleReturnClick = () =>{
        this.setState({selectedWorkout: null, editWorkout: null});
        this.fetchWorkouts();
    }
    fetchWorkouts = () =>{
        const jwt = auth.isAuthenticated()
        list({
        userId: jwt.user._id
        }, {t: jwt.token}).then((data) => {
        if (data.error) {
            this.setState({error: 'Couldnt read workouts'})
        } else {
            this.setState({workouts: data.length>0 ? data : []})
        }
        })
    }
    componentDidMount = () =>{
        this.fetchWorkouts();
    }
    render() {
        const {classes} = this.props
        return (
            <div>
                {!this.state.selectedWorkout && !this.state.editWorkout && 
                    <div>
                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={40} className={classes.justify}>
                                {this.state.workouts.length>0 && this.state.workouts.map(workout => (
                                    <WorkoutListItem
                                        key={workout._id} 
                                        workout={workout}
                                        handleGoClick={this.handleGoClick}
                                        handleEditClick={this.handleEditClick}
                                        handleReturn = {this.handleReturnClick}/>
                                ))}
                            </Grid>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button variant="contained" 
                                    onClick={this.handleAddClick}
                                    className={classes.button}>
                                Add Workout
                            </Button>
                        </div>
                    </div>
                    
                }
                {this.state.selectedWorkout 
                    && <Workout 
                            workout={this.state.selectedWorkout}
                            handleBackClick={this.handleBackClick}
                            handleReturn = {this.handleReturnClick}
                        />
                }
                {this.state.editWorkout 
                    && <ExerciseList 
                            workout={this.state.editWorkout}
                            handleBackClick={this.handleBackClick}
                            handleReturn = {this.handleReturnClick}
                            isNew = {this.state.isNew}
                        />
                }
            </div>
        );
    }
}
export default withStyles(styles)(WorkoutList)
