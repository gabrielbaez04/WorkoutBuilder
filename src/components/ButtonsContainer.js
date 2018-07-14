import React from 'react';

class ButtonsContainer extends React.Component {
    render() {
        return (
            <div className='ui list horizontal No-Break'>
                <div className='item'>
                    <i class="pencil orange alternate icon huge link circular"></i>
                </div>
                <div className='item'>
                    <i class="trash red alternate icon huge link circular"></i>
                </div>
                <div className='item'>
                    <i class="play green alternate icon huge link circular"></i>
                </div>
            </div>
        );
    }
}

export default ButtonsContainer;