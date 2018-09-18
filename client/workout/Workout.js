import React from 'react';
import ExerciseDetails from './ExerciseDetails';

class Workout extends React.Component {
    state = {
        currentSide:0,
        exercises : this.props.exercises
    }
    
    componentDidMount(){
        initializeCube();
    }
    handleStepForwardClick = () =>{
        this.setState({currentSide: this.state.currentSide+1 >= this.state.exercises.length? this.state.currentSide : this.state.currentSide+1});
        
    }
    handleStepBackwardClick = () =>{
        this.setState({currentSide: this.state.currentSide-1 < 0 ? 0 : this.state.currentSide-1});
      
    }

    render() {
        return (
            <div>
                <button className="ui left floated icon button compact blue big backButton" onClick={this.props.handleBackClick}>
                    <i className="icon undo customSmallButton"></i>
                </button>
                <h2 className="ui center aligned icon header">
                <i className="circular child icon"></i>
                Runing Workout
                </h2>
                <div className='ui segment workoutsContainer'>
                    <div className="ui shape">
                        <div className="sides">
                            {this.state.exercises && this.state.exercises.map((exercise, index) =>{
                                var activeSide = index==0 ? 'active' : '';
                                    return <div className={activeSide + " side"+index+" side"}  key={index}>
                                                <ExerciseDetails
                                                    exercise={exercise}
                                                    />                            
                                            </div>
                            })}
                        </div>
                    </div>
                    <div className="ui clearing segment workoutButtons">
                    
                    {this.state.currentSide!=this.state.exercises.length-1 &&
                            <button className="ui right floated icon button compact blue big" onClick={this.handleStepForwardClick}>
                                <i className="icon step forward customSmallButton"></i>
                            </button>

                    }
                    {this.state.currentSide!=0 &&
                            <button className="ui compact icon button blue big" onClick={this.handleStepBackwardClick}>
                                <i className="icon step backward customSmallButton"></i>  
                            </button>  
                    }
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Workout;