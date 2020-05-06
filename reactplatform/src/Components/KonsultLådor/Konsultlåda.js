import React from 'react';
import ProfilBild from '../FöretagsLådor/ProfilBild';
import PopupCV from './PopupCV';
import StatusPlupp from './StatusPlupp';
import PopupProfile from './PopupProfile';

function Konsultlåda(props) {
  return (
    <div className="KonsultLådor">
      <div className="konsult-header">
        <StatusPlupp />
        <ProfilBild />
      </div>
      <div className="konsult-body">
          <div className="btn-holder">
          <PopupProfile />
          <PopupCV />
            
          </div>
        <div className="konsult-info">
          <h4>{props.namn}</h4>
          <h6>{props.id}</h6>
        </div>
      </div>
    </div>
  );
}

export default Konsultlåda;