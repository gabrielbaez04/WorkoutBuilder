import React from 'react';

class ImageContainer extends React.Component {
    render() {
        return (
            <div className='item No-Break'>
                <div className="ui tiny images">
                    {this.props.images && this.props.images.map(element => {
                        return <img className="ui image" src={element}/>
                    })}
                    
                </div>
            </div>
        );
    }
}

export default ImageContainer;