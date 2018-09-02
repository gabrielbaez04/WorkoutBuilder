import React from 'react';
import ImageContainer from './ImageContainer';
import ExerciseData from './ExerciseData';

class ExerciseDetails extends React.Component {
    render() {
        return (
            <div>
                <div className='ui segment attached'>
                    <div className="ui items">
                        <div className="item">
                            <div className="image">
                                <ImageContainer images={['https://wger.de/media/exercise-images/81/Biceps-curl-2.png.200x200_q85.png',
                                    'https://wger.de/media/exercise-images/129/Standing-biceps-curl-2.png']}/>
                            </div>
                            <div className="content">
                                <span className='header'>{this.props.name}</span>
                                <div className="meta">
                                    <span>Description</span>
                                </div>
                                <div className="description left aligned">
                                    <p>{this.props.description}</p>
                                </div>
                                <div className="extra">
                                    {this.props.extra}
                                </div>
                            </div>
                        </div>  
                        <ExerciseData
                            data={{sets: 5,
                                    repetitions:15,
                                    prevRepetitions:12,
                                    prevWeight:25}}
                        />                      
                    </div>
                </div>
            </div>
        );
    }
}

export default ExerciseDetails;