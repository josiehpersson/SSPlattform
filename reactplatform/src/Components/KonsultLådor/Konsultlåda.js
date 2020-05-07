import React from 'react';
import PopupCV from './PopupCV';
import PopupProfile from './PopupProfile';
import ProfilePic from './profile.jpg';

function Konsultlåda(props) {
    return(
        <div className="konsultlåda">
        <div className="konsult-header">
            <img src={ProfilePic} alt="consult profile picture" className="profile-picture"></img>
        </div>
        <div className="konsult-body">
            <div className="button-holder">
            <PopupCV className="låda-grå" />
            <PopupProfile className="låda-grå" />
            </div>
            <div className="konsult-info">
                <h6>Josephine</h6>
                <p>#392929</p>
            </div>
        </div>

        </div>
    )
}

export default Konsultlåda;