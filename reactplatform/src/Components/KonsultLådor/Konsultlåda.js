import React from 'react';
import './Lådor.css';
import ProfilBild from '../FöretagsLådor/ProfilBild';
import PopupCV from './PopupCV.js';
import PopupProfile from './PopupProfile';

function Företagslåda(props) {
  return (
    <div className="FöretagsLådor">
      <div className="konsult-header">
        <ProfilBild />
      </div>
      <div className="konsult-body">
        <div className="konsult-info">
          <div className="btn-holder">
          <PopupProfile />
          <PopupCV />

          </div>
          <h4>Josephine</h4>
          <h6>#354637</h6>
        </div>
      </div>
    </div>
  );
}

export default Företagslåda;