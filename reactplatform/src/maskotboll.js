import React from 'react';
import Logo from './logga svart.png';
import './components.css';

function MaskotBoll () {
    return (
        <div className="MaskotBoll">
            <img src={Logo} alt="Shaya Solutions Logotype" className="Logotype" />
        </div>
    )
}

export default MaskotBoll