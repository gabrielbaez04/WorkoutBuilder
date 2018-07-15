import React from 'react';
import Workout from './Workout';

class WorkoutList extends React.Component {
    render() {
        return (
            <div>
                <h2 class="ui center aligned icon header">
                <i class="circular hand rock outline icon"></i>
                Workout List
                </h2>
                <div className='ui segment compact workoutscontainer'>
                
                        <Workout/>
                    
                        <Workout/>
                        
                        <Workout/>

                        <Workout/>

                        <Workout/>
                </div>
            </div>
        );
    }
}

export default WorkoutList;