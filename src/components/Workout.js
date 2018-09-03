import React from 'react';
import ExerciseDetails from './ExerciseDetails';
import Helper from '../utils/helper'

class Workout extends React.Component {
    state = {
        exercises:[
            {
                name: 'Biceps Curls With Dumbbell',
                description: "Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly. Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).",
                extra: 'Fluid movements with no pauses at the top or the bottom',
                images: ['https://wger.de/media/exercise-images/81/Biceps-curl-2.png.200x200_q85.png',
                                    'https://wger.de/media/exercise-images/129/Standing-biceps-curl-2.png']
            },
            {
                name: 'Biceps Curls',
                description: "Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly. Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).",
                extra: 'Fluid movements with no pauses at the top or the bottom',
                images: ['https://wger.de/media/exercise-images/81/Biceps-curl-2.png.200x200_q85.png',
                                    'https://wger.de/media/exercise-images/129/Standing-biceps-curl-2.png']
            },
            {
                name: 'Biceps Curls With Dumbbell',
                description: "Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly. Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).",
                extra: 'Fluid movements with no pauses at the top or the bottom',
                images: ['https://wger.de/media/exercise-images/81/Biceps-curl-2.png.200x200_q85.png',
                                    'https://wger.de/media/exercise-images/129/Standing-biceps-curl-2.png']
            }
        ]
    }
    render() {
        return (
            <div>
                <h2 className="ui center aligned icon header">
                <i className="circular child icon"></i>
                Runing Workout
                </h2>
                <div className='ui segment workoutsContainer'>
                    <div className="ui shape">
                        <div className="sides">
                            {this.state.exercises && this.state.exercises.map((exercise, index) =>{
                                var activeSide = index==0 ? 'active' : '';
                                    return <div className={activeSide + " side"}  key={index}>
                                                <ExerciseDetails
                                                    name={exercise.name}
                                                    description={exercise.description}
                                                    extra={exercise.extra}
                                                    images={exercise.images}
                                                    />                            
                                            </div>
                            })}
                        </div>
                    </div>
                    <div className="ui clearing segment workoutButtons ">
                        <h2 className="ui right floated header ">
                            <button className="ui right icon button compact blue">
                                <i className="icon step forward customSmallButton"></i>
                            </button>
                        </h2>
                        <h2 className="ui left floated header">
                            <button className="ui compact icon button blue">
                                <i className="icon step backward customSmallButton"></i>  
                            </button>  
                        </h2>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Workout;