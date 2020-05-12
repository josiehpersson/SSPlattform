import React from 'react';
import ProfilBild from '../../Komponenter/UI-komponenter/ProfilBild';
import StatusPlupp from '../../Komponenter/KonsultLådor/StatusPlupp';

function Offert(props) {
  return (
    <div className="InfoRad">
      <div className="topRad">
        <div className="ProfilePicInfolåda">
          <ProfilBild />
        </div>

        <div>
          <h6>FÖRETAG</h6>
          <h6 className="uppgifter">{props.företag}</h6>
        </div>

        <div>
          <h6>ANTAL</h6>
          <h6 className="uppgifter">{props.antal}</h6>
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
          <h6>TIMMAR</h6>
          <h6 className="uppgifter">{props.timmar}</h6>
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

export default Offert;
