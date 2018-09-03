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
                                <ImageContainer images={this.props.images}/>
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