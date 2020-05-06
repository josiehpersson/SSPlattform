import React from 'react';
import './Lådor.css';
import ProfilePic from './profile.jpg';
import Textfält from './Textfält';
import StatusPlupp from './StatusPlupp';


function PopupProfile(props) {
  return (
    <div className="popup-profile-container">
      <div class="profile-button">
        <a href="#myModal" class="trigger-btn" data-toggle="modal">
          <i class="fas fa-id-badge"></i> Profil
        </a>
      </div>
      <div id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <StatusPlupp färg="röd-plupp" />
              <div class="icon-box">
                <img
                  src={ProfilePic}
                  alt="User profile picture"
                  className="popup-profile-picture"
                />
                <h3 className="popup-username">Josephine</h3>
              </div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body popup-profile-body">
              <Textfält titel="Namn" />
              <Textfält titel="#" />
              <Textfält titel="Titel" />
              <Textfält titel="Telefon" />
              <Textfält titel="E-mail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupProfile;
