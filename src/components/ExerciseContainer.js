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
                                    name={this.props.exercise.name}
                                    description={this.props.exercise.description}
                                    extra={this.props.exercise.extra}
                                    images = {this.props.exercise.images}
                                    />
                        </div>
                    </div>
                </div>
                <button className="ui button blue fluid addButton">
                    <i className="cancel red alternate icon big link circular inverted"></i>
                </button>
                <button className="ui button blue fluid addButton">
                    <i className="save green alternate icon big link circular inverted"></i>
                </button>
            </div>
        );
    }
}

export default ExerciseContainer;