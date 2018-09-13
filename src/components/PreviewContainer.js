import React from 'react';
import ImageContainer from './ImageContainer';
import ButtonsContainer from './ButtonsContainer';

class PreviewContainer extends React.Component {
    render() {
        return (
            <div>
                <h3 className="ui top centered attached header">
                    {this.props.name}  {this.props.sets>0 && ' - ' + this.props.sets + ' Sets'}
                </h3>
                <div className='ui secondary segment attached previewContainer'>
                    <div className='preview'>
                        <ImageContainer
                            images={this.props.images}/>
                        {this.props.isWorkout && <div><button class="ui fluid green button">RUN</button></div>}
                    </div> 
                </div>
            </div>
        );
    }
}

export default PreviewContainer;