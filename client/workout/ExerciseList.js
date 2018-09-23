import React from 'react';
import ExerciseContainer from './ExerciseContainer';

class ExerciseList extends React.Component {
    state = {
        editExercise : null
    }
    handleExerciseEdit = (exercise) =>{
        this.setState({editExercise: exercise})
    }
    handleBackClick = () =>{
        this.setState({editExercise: null});
    }
    render() {
       /* return (
            <div>
                 {!this.state.editExercise &&
                    <div>
                        <button className="ui left floated icon button compact blue big backButton" onClick={this.props.handleBackClick}>
                            <i className="icon undo customSmallButton"></i>
                        </button>
                        <h2 className="ui center aligned icon header">
                        <i className="circular child icon"></i>
                        Exercise List
                        </h2>
                        <div className='ui segment compact workoutsContainer'>
                            { this.props.exercises.map((exercise,index)=>(
                                <PreviewContainer
                                key={index}
                                name={exercise.name}
                                sets={exercise.sets}
                                images={exercise.images}
                                data = {exercise}
                                handleEdit={this.handleExerciseEdit}
                               />
                            ))}
                        </div>
                        <button className="ui button blue fluid addButton">
                            <i className="plus alternate icon big link"></i>
                        </button>
                    </div>
                    }
                    
                    {this.state.editExercise && 
                        <ExerciseContainer
                            exercise = {this.state.editExercise}
                            handleBackClick={this.handleBackClick}
                        />
                    }
                
            </div>
        );*/
    }
}

export default ExerciseList;