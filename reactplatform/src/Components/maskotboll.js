import React from 'react';
import Logo from './maskotbild.png';
import './components.css';

function MaskotBoll (props) {
    const styles = {
        position: 'absolute',
        borderRadius: '50%',
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
    }
    return (
        <div className="MaskotBoll" style={styles}>
            <img src={Logo} alt="Shaya Solutions Logotype" className="Logotypeboll" />
        </div>
    )
}

export default MaskotBoll