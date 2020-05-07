import React from 'react';
import '../KonsultLådor/Lådor.css';
import ProfilePic from '../KonsultLådor/profile.jpg';
import Textfält from '../KonsultLådor/Textfält';
import './Lådor.css';
import ProfilePic from './profile.jpg';
import Textfält from './Textfält';

function PopupProfile(props) {
  return (
    <div className="popup-profile-container">

      <div class="primärknapp" id="infoBtn">
      <div class="PrimaryButton">
        <a href="#myModal" class="trigger-btn" data-toggle="modal">
          <i class="fas fa-id-badge"></i> Info
        </a>
      </div>
      <div id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
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
              <Textfält titel="Administratör" />
              <Textfält titel="Organisationsnr." />
              <Textfält titel="Adress" />
              <Textfält titel="Bransch" />
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
