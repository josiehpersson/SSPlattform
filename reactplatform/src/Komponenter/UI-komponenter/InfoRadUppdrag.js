import React from 'react';
import ProfilBild from '../../Komponenter/UI-komponenter/ProfilBild';
import StatusPlupp from '../KonsultLådor/StatusPlupp';

function InfoRad(props) {
  return (
    <div className="InfoRad">
      <div className="topRad">
        <div className="ProfilePicInfolåda">
          <ProfilBild />
        </div>

        <div>
          <h6>NAMN</h6>
          <h6 className="uppgifter">{props.namn}</h6>
        </div>

        <div>
          <h6>UPPDRAG</h6>
          <h6 className="uppgifter">{props.uppdrag}</h6>
        </div>

        <div>
          <h6>START/SLUT</h6>
          <h6 className="uppgifter">{props.tidsspan}</h6>
        </div>

        <div>
          <h6>PRIS/H</h6>
          <h6 className="uppgifter">{props.pris}</h6>
        </div>

        <div>
          <h6>STATUS</h6>
          <StatusPlupp />
        </div>
      </div>
      <div className="bottomRad"></div>
    </div>
  );
}

export default InfoRad;
