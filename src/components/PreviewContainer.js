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
                        <div className='ui list horizontal preview'>
                            <div className='item'>
                                <ImageContainer
                                    images={this.props.images}/>
                            </div>
                            
                            <div className='item middle aligned'>
                                <ButtonsContainer
                                edit='1'
                                delete='1'
                                run='1'/>
                            </div>
                        </div>
                </div> 
            </div>
        );
    }
}

export default PreviewContainer;