import React from 'react';
import Logo from './maskotbild.png';
import './components.css';

function MaskotBoll (props) {
    const styles = {
        position: 'absolute',
        borderRadius: '50%',
        width: props.width,
        height: props.height,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
    }
    return (
        <div className="MaskotBoll">
            <img src={Logo} alt="Shaya Solutions Logotype" className="Logotype" style={styles} />
        </div>
    )
}

export default MaskotBoll