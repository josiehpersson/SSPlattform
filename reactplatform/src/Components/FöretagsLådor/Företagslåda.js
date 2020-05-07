import React from 'react';
import ProfilBild from './ProfilBild';
import PopupProfile from './PopupProfile';

function Företagslåda(props) {
  return (
    <div className="FöretagsLådor">
      <div className="boxNav">
        <ProfilBild />
      </div>
      <div className="boxBody">
        <div className="FöretagsInfo">
          <h4>{props.företagsNamn}</h4>
          <h6>{props.stadNamn}</h6>
          <h5>{props.företagstyp}</h5>
          <PopupProfile />
        </div>
      </div>
    </div>
  );
}

export default Företagslåda;
