import React from 'react';
import ExerciseDetails from './ExerciseDetails';

class ExerciseContainer extends React.Component {
    render() {
        return (
            <div>
                <button className="ui left floated icon button compact blue big backButton" onClick={this.props.handleBackClick}>
                    <i className="icon undo customSmallButton"></i>
                </button>
                <h2 className="ui center aligned icon header">
                <i className="circular plus icon"></i>
                Add/Edit Exercise
                </h2>
                <div className='ui segment workoutsContainer'>
                    <div className='ui list'>
                        <div className='item'>
                            <div className="ui search">
                                <div className="ui icon input searchIcon">
                                    <input className="prompt" type="text" placeholder="Search Exercise..."/>
                                    <i className="search icon"></i>
                                </div>
                                <div className="results"></div>
                            </div>
                        </div>
                        <div className='item'>
                        <ExerciseDetails
                                    exercise={this.props.exercise}
                                    />
                        </div>
                    </div>
                </div>
                <div className="exerciseContainerButtons">
                    <button className="ui button blue fluid exerciseContainerButton" onClick={this.props.handleBackClick}>
                        <i className="cancel red alternate icon big link circular inverted"></i>
                    </button>
                    <button className="ui button blue fluid exerciseContainerButton">
                        <i className="save green alternate icon big link circular inverted"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default ExerciseContainer;