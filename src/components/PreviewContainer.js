import React from 'react';
import ImageContainer from './ImageContainer';

class PreviewContainer extends React.Component {
    getWorkoutImages(workoutData){
        var images=[];
        workoutData.exercises.forEach((exercise)=>{
            exercise.images.forEach((image)=>{
                images.push(image); 
            })          
        })
        return images.length <= 2? images : images.slice(0,3);
    }
    onPlayClick = () =>{
        this.props.handleWorkoutClick(this.props.workoutData);
    }
    render() {
        return (
            <div className="previewContainer">
                <h3 className="ui top centered attached header">
                    {this.props.name}  {this.props.sets>0 && ' - ' + this.props.sets + ' Sets'}
                </h3>
                <div className='ui secondary segment attached previewContainer'>
                    <div className='preview'>
                        <ImageContainer
                            images={this.getWorkoutImages(this.props.workoutData)}/>
                    </div> 
                </div>
                <div className="ui three bottom attached buttons">
                    <div className="ui button"> <i className="pencil orange alternate icon large link circular inverted"></i></div>
                    <div className="ui button"><i className="trash red alternate icon large link circular inverted"></i></div>
                    <div className="ui button" onClick={this.onPlayClick}><i className="play green alternate icon large link circular inverted"></i></div>
                </div>
                {false&&this.props.isWorkout && <div><button className="ui fluid bottom attached green button">RUN</button></div>}
            </div>
        );
    }
}

export default PreviewContainer;