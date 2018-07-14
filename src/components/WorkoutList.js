import React from 'react';
import Workout from './Workout';

class WorkoutList extends React.Component {
    render() {
        return (
            <div className='ui grid'>
                <div className='twelve wide column floated centered'>
                    <Workout/>
                </div>
                <div className='twelve wide column floated centered'>
                    <Workout/>
                </div>
                <div className='twelve wide column floated centered'>
                    <Workout/>
                </div>
            </div>
        );
    }
}

export default WorkoutList;