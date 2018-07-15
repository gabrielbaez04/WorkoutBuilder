import React from 'react';
import WorkoutImages from './WorkoutImages';
import ButtonsContainer from './ButtonsContainer';

class Workout extends React.Component {
    state = {  }
    render() {
        return (
            <div>
            <h3 class="ui top centered attached header">
            Biceps - 5 Sets
            </h3>
           <div className='ui secondary segment attached'>
                <div className='ui list horizontal'>
                    <div className='item'>
                        <WorkoutImages/>
                    </div>
                    
                    <div className='item middle aligned'>
                        <ButtonsContainer/>
                    </div>
                </div>
           </div> </div>
        );
    }
}

export default Workout;