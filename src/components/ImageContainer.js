import React from 'react';

class ImageContainer extends React.Component {
    render() {
        return (
            <div className='item No-Break'>
                <div className="ui tiny images">
                    {this.props.images && this.props.images.map((element, index) => {
                        return <img className="ui image" src={element} key={index}/>
                    })}
                    
                </div>
            </div>
        );
    }
}

export default ImageContainer;