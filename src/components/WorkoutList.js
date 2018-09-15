import React from 'react';
import PreviewContainer from './PreviewContainer';
import {workoutsData} from '../workoutsTestingData';
import Workout from './Workout';

class WorkoutList extends React.Component {
    state = {
        selectedWorkout: null,
        workouts : workoutsData()       
    }
    handleWorkoutClick = (workout) =>{
        console.log(workout.exercises)
        this.setState({selectedWorkout: workout});
    }
    handleBackClick = () =>{
        this.setState({selectedWorkout: null});
    }
    render() {
        return (
            <div>
                {!this.state.selectedWorkout &&
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
                                    workoutData={workout}
                                    handleWorkoutClick={this.handleWorkoutClick}
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
            </div>
        );
    }
}

export default WorkoutList;