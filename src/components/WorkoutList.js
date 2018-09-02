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
                
                        <PreviewContainer/>
                    
                        <PreviewContainer/>
                        
                        <PreviewContainer/>

                        <PreviewContainer/>

                        <PreviewContainer/>
                </div>
            </div>
        );
    }
}

export default WorkoutList;