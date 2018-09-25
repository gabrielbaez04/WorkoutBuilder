import React from 'react';
import Workout from './Workout';
import ExerciseList from '../exercise/ExerciseList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import data from './data'
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
      }

  });

class WorkoutList extends React.Component {
    state = {
        selectedWorkout: null,
        editWorkout:null,
        workouts : data.workoutsData()   
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
    handleAddClick = (workout) =>{
        this.setState({editWorkout: []});
    }
    handleReturnClick = () =>{
        this.setState({selectedWorkout: null, editWorkout: null});
    }
    render() {
        const {classes} = this.props
        return (
            <div>
                {!this.state.selectedWorkout && !this.state.editWorkout && 
                    <div>
                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={40} className={classes.justify}>
                                {this.state.workouts.map(workout => (
                                    <WorkoutListItem
                                        key={workout.id} 
                                        workout={workout}
                                        handleGoClick={this.handleGoClick}
                                        handleEditClick={this.handleEditClick}/>
                                ))}
                            </Grid>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button variant="contained" 
                                    style={{backgroundColor:'#333', color:'white'}}
                                    onClick={this.handleAddClick}>
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
                        />
                }
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