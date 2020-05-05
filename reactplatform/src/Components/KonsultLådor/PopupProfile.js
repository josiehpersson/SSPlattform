import React from 'react';
import './Lådor.css';
import ProfilePic from './profile.jpg';

function PopupProfile (props) {
    return(
        <div className="popup-profile-container">
    <div class="profile-button">
	<a href="#myModal" class="trigger-btn" data-toggle="modal"><i class="fas fa-id-badge"></i> Profil</a>
</div>
<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="icon-box">
					<img src={ProfilePic} alt="User profile picture" className="popup-profile-picture"/>
                    <h3 className="popup-username">Josephine</h3>
				</div>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body text-center">
				<h4>Great!</h4>	
				<p>Your account has been created successfully.</p>
				<button class="btn btn-success" data-dismiss="modal"><span>Start Exploring</span> <i class="material-icons">&#xE5C8;</i></button>
			</div>
		</div>
	</div>
</div>    
        </div>
    )
}

export default PopupProfile