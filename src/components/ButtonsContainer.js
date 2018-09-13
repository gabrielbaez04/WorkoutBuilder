import React from 'react';

class ButtonsContainer extends React.Component {
    render() {
        return (
            <div className='ui list horizontal No-Break centralize'>
                {this.props.edit == '1' && <div className='item'>
                    <i className="pencil orange alternate icon big link circular inverted"></i>
                </div>}
                {this.props.delete == '1' && <div className='item'>
                    <i className="trash red alternate icon big link circular inverted"></i>
                </div>}
                {this.props.run == '1' && <div className='item'>
                    <i className="play green alternate icon big link circular inverted"></i>
                </div>}
                {this.props.cancel == '1' && <div className='item'>
                    <i className="cancel red alternate icon big link circular inverted"></i>
                </div>}
                {this.props.save == '1' && <div className='item'>
                    <i className="save green alternate icon big link circular inverted"></i>
                </div>}
                
            </div>
        );
    }
}

export default ButtonsContainer;