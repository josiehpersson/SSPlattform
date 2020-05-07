import React from 'react';
import './POPUPCSS.css';
import ProfilePic from './profile.jpg';

function PopupCV(props) {
  return (
    <div>
      <div className={props.className}>
        <a href="#myCV" class="trigger-btn" data-toggle="modal">
          <i class="fas fa-file-alt"></i> CV
        </a>
      </div>
      <div id="myCV" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <div className="user-info">
                <img
                  src={ProfilePic}
                  alt="user profile picture"
                  className="user-pic"
                ></img>
                <div className="user-name">
                  <h1>Josephine</h1>
                  <h3>Halkola Persson</h3>
                  <h6>#43567</h6>
                </div>
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
            <div class="modal-body text-center">
              <h4>KONSULTENS CV</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopupCV;
