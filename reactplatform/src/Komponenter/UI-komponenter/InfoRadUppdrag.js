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
          <p className="inforad-rubrik">FÖRETAG</p>
          <p className="inforad-uppgifter">{props.namn}</p>
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
          <p className="inforad-uppgifter">{props.pris}</p>
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

export default InfoRad;
