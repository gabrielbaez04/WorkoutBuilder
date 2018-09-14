import React from 'react';
import PreviewContainer from './PreviewContainer';


class WorkoutList extends React.Component {
    render() {
        return (
            <div>
                <h2 className="ui center aligned icon header">
                <i className="circular hand rock icon"></i>
                Workout List
                </h2>
                <div className='ui segment compact workoutsContainer'>
                    <PreviewContainer
                        name='Biceps'
                        isWorkout="true"
                        images={['https://wger.de/media/exercise-images/81/Biceps-curl-2.png.200x200_q85.png',
                                'https://wger.de/media/exercise-images/129/Standing-biceps-curl-2.png',
                                'https://wger.de/media/exercise-images/3/Standing-biceps-curl-1.png',
                                'https://wger.de/media/exercise-images/3/Standing-biceps-curl-1.png']}
                    />
                    <PreviewContainer
                        name='Triceps'
                        isWorkout="true"
                        images={['https://wger.de/media/exercise-images/81/Biceps-curl-2.png.200x200_q85.png',
                                'https://wger.de/media/exercise-images/129/Standing-biceps-curl-2.png']}
                    />
                        <PreviewContainer
                        name='Biceps'
                        isWorkout="true"
                    images={['https://wger.de/media/exercise-images/81/Biceps-curl-2.png.200x200_q85.png',
                                'https://wger.de/media/exercise-images/3/Standing-biceps-curl-1.png',
                                'https://wger.de/media/exercise-images/3/Standing-biceps-curl-1.png']}
                    />
                    <PreviewContainer
                        name='Triceps'
                        isWorkout="true"
                        images={['https://wger.de/media/exercise-images/81/Biceps-curl-2.png.200x200_q85.png',
                                'https://wger.de/media/exercise-images/129/Standing-biceps-curl-2.png']}
                    />
                </div>
                <button className="ui button blue fluid addButton">
                    <i className="plus alternate icon big link"></i>
                </button>
            </div>
        );
    }
}

export default WorkoutList;