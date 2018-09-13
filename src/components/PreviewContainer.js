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
                        {this.props.isWorkout && <ButtonsContainer
                        run='1'/>}
                    </div> 
                </div>
            </div>
        );
    }
}

export default PreviewContainer;