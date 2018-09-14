import React from 'react';
import ImageContainer from './ImageContainer';
import ButtonsContainer from './ButtonsContainer';

class PreviewContainer extends React.Component {
    render() {
        return (
            <div className="previewContainer">
                <h3 className="ui top centered attached header">
                    {this.props.name}  {this.props.sets>0 && ' - ' + this.props.sets + ' Sets'}
                </h3>
                <div className='ui secondary segment attached previewContainer'>
                    <div className='preview'>
                        <ImageContainer
                            images={this.props.images}/>
                        
                    </div> 

                </div>
                <div class="ui three bottom attached buttons">
                    <div class="ui button"> <i className="pencil orange alternate icon large link circular inverted"></i></div>
                    <div class="ui button"><i className="trash red alternate icon large link circular inverted"></i></div>
                    <div class="ui button"><i className="play green alternate icon large link circular inverted"></i></div>
                </div>
                {false&&this.props.isWorkout && <div><button class="ui fluid bottom attached green button">RUN</button></div>}
            </div>
        );
    }
}

export default PreviewContainer;