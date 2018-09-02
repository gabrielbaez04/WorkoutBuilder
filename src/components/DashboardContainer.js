import React from 'react';
import ExerciseContainer from './ExerciseContainer';
import ButtonsContainer from './ButtonsContainer';

class DashboardContainer extends React.Component {
    render() {
        return (
            <div>
                <ExerciseContainer/>
                <ButtonsContainer
                save='1'
                cancel='1'/>
            </div>
        );
    }
}

export default DashboardContainer;