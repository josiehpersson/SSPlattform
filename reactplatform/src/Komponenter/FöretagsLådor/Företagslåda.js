import React from 'react';
import ProfilBild from './ProfilBild';
import PopupCompanyProfile from './PopupCompanyProfile';
import '../KonsultLådor/Lådor.css';
function Företagslåda(props) {
  return (
    <div className="konsultlåda">
      <div className="konsult-header">
        <ProfilBild top="5px" />
      </div>
      <div className="konsult-body">
        <div className="konsult-info">
          <h5>{props.företagsNamn || 'Företagsnamn'}</h5>
          <h6>{props.stadNamn || 'Stad'}</h6>
          <h5>{props.företagstyp || 'Företagstyp'}</h5>
        </div>
        <div className="button-holder">
          <PopupCompanyProfile />
        </div>
      </div>
    </div>
  );
}

export default Företagslåda;
