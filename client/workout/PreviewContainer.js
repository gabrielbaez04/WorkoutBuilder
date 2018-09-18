import React from 'react';
import ImageContainer from './ImageContainer';

class PreviewContainer extends React.Component {
    getWorkoutImages(data){
        var images=[];
        data.exercises.forEach((exercise)=>{
            exercise.images.forEach((image)=>{
                images.push(image); 
            })          
        })
        return images.length <= 2? images : images.slice(0,3);
    }
    onPlayClick = () =>{
        this.props.handleWorkoutClick(this.props.data);
    }
    onEditClick = () =>{
        this.props.handleEdit(this.props.data);
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
                            images={this.props.isWorkout ? this.getWorkoutImages(this.props.data): this.props.images}/>
                    </div> 
                </div>
                <div className="ui three bottom attached buttons">
                    <div className="ui button" onClick={this.onEditClick}> <i className="pencil orange alternate icon large link circular inverted"></i></div>
                    <div className="ui button"><i className="trash red alternate icon large link circular inverted"></i></div>
                    {this.props.isWorkout && <div className="ui button " onClick={this.onPlayClick}><i className="play green alternate icon large link circular inverted"></i></div>}
                </div>
            </div>
        );
    }
}

export default PreviewContainer;