import React from 'react';
import PreviewContainer from './PreviewContainer';
import {workoutsData} from '../workoutsTestingData';
import Workout from './Workout';
import ExerciseList from './ExerciseList';

class WorkoutList extends React.Component {
    state = {
        selectedWorkout: null,
        editWorkout:null,
        workouts : workoutsData()       
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
        return (
            <div>
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
            </div>
        );
    }
}

export default WorkoutList;