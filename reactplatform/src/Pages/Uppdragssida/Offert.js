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
          <p className="inforad-rubrik">NAMN</p>
          <p className="inforad-uppgifter">{props.företag}</p>
        </div>

        <div>
          <p className="inforad-rubrik">ANTAL</p>
          <p className="inforad-uppgifter">{props.antal}</p>
        </div>

        <div>
          <p className="inforad-rubrik">UPPDRAG</p>
          <p className="inforad-uppgifter">{props.uppdrag}</p>
        </div>

        <div>
          <p className="inforad-rubrik">START/SLUT</p>
          <p className="inforad-uppgifter">{props.tidsspan}</p>
        </div>

        <div>
          <p className="inforad-rubrik">TIMMAR</p>
          <p className="inforad-uppgifter">{props.timmar}</p>
        </div>

        <div>
          <p className="inforad-rubrik">STATUS</p>
          <StatusPlupp />
        </div>
      </div>
      <div className="bottomRad"></div>
    </div>
  );
}

export default Offert;
