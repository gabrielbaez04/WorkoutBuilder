import React from 'react';
import ExerciseDetails from './ExerciseDetails';
import ButtonsContainer from './ButtonsContainer';
class ExerciseContainer extends React.Component {
    render() {
        return (
            <div>
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
                                    name='Biceps Curls With Dumbbell'
                                    description="Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly. Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows)."
                                    extra='Fluid movements with no pauses at the top or the bottom'
                                    />
                        </div>
                    </div>
                </div>
                <ButtonsContainer
                save='1'
                cancel='1'/>
            </div>
        );
    }
}

export default ExerciseContainer;