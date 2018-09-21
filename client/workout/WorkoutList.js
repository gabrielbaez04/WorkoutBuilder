import React from 'react';
import PreviewContainer from './PreviewContainer';
import Workout from './Workout';
import ExerciseList from './ExerciseList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        
    },
    workoutsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
    icon: {
      margin: theme.spacing.unit * 2,
      fontSize: theme.spacing.unit * 8,
      display: 'block'
    },
    header: {

      display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
  });

class WorkoutList extends React.Component {
    state = {
        selectedWorkout: null,
        editWorkout:null,
        workouts : []     
    }
    handleWorkoutClick = (workout) =>{
        this.setState({selectedWorkout: workout});
    }
    handleBackClick = () =>{
        this.setState({selectedWorkout: null, editWorkout:null});
    }
    handleWorkoutEdit = (workout) =>{
        this.setState({editWorkout: workout});
    }
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <div className={classes.header}> 
                    <Typography variant="display3" >
                        Workout List
                    </Typography>
                    <Icon className={classes.icon} color="action" fontSize="small">
                        fitness_center
                    </Icon>
                </div>
                <div className={classes.workoutsContainer}>
                <Icon className={classes.icon} color="action" fontSize="small">
                    fitness_center
                </Icon>
                <Icon className={classes.icon} color="action" fontSize="small">
                    fitness_center
                </Icon>
                <Icon className={classes.icon} color="action" fontSize="small">
                    fitness_center
                </Icon>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(WorkoutList)
/*
{!this.state.selectedWorkout && !this.state.editWorkout &&
                    <div>
                        <h2 className="ui center aligned icon header">
                        <i className="circular hand rock icon"></i>
                        Workout List
                        </h2>
                        <div className='ui segment compact workoutsContainer'>
                            {this.state.workouts.map((workout,index)=>{
                                return (<PreviewContainer
                                    key = {workout.id}
                                    name={workout.name}
                                    isWorkout="true"
                                    data={workout}
                                    handleWorkoutClick={this.handleWorkoutClick}
                                    handleEdit={this.handleWorkoutEdit}
                                />)
                            })}
                        </div>
                        <button className="ui button blue fluid addButton">
                            <i className="plus alternate icon big link"></i>
                        </button>
                    </div>
                }
                {this.state.selectedWorkout 
                    && <Workout 
                            exercises={this.state.selectedWorkout.exercises}
                            handleBackClick={this.handleBackClick}
                        />
                }
                {this.state.editWorkout 
                    && <ExerciseList
                            exercises={this.state.editWorkout.exercises}
                            handleBackClick={this.handleBackClick}
                        />
                }
*/