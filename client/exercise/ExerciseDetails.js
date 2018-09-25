import React from 'react';
import ExerciseData from './ExerciseData';

class ExerciseDetails extends React.Component {
    render() {
        return (
            <div>
                <div className='ui segment attached'>
                    <div className="ui items">
                        <div className="item">
                            <div className="image">
                            </div>
                            <div className="content">
                                <span className='header'>{this.props.exercise.name}</span>
                                <div className="meta">
                                    <span>Description</span>
                                </div>
                                <div className="description left aligned">
                                    <p>{this.props.exercise.description}</p>
                                </div>
                                <div className="extra">
                                    {this.props.exercise.extra}
                                </div>
                            </div>
                        </div>  
                        <ExerciseData
                            data={{sets: this.props.exercise.sets,
                                    repetitions:this.props.exercise.reps,
                                    prevRepetitions:this.props.exercise.prevReps,
                                    prevWeight:this.props.exercise.prevWeight}}
                        />                      
                    </div>
                </div>
            </div>
        );
    }
}

export default ExerciseDetails;