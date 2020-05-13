import React from 'react';
import PopupCV from './PopupCV';
import PopupProfile from './PopupProfile';
import ProfilBild from '../FöretagsLådor/ProfilBild';
import './Lådor.css';
import './POPUPCSS.css';

function Konsultlåda(props) {
  return (
    <div className="konsultlåda">
      <div className="konsult-header">
        <ProfilBild top="45px" right="20px" />
      </div>
      <div className="konsult-body">
        <div className="button-holder">
          <PopupCV className="låda-grå" />
          <PopupProfile className="låda-grå" />
        </div>
        <div className="konsult-info">
          <h6>{props.konsultnamn || 'konsultnamn'}</h6>
          <p>{props.konsultid || '#ID'}</p>
        </div>
      </div>
    </div>
  );
}

export default Konsultlåda;
