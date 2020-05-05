import React from "react";
import ProfilBild from './ProfilBild';
import PrimaryButton from '../PrimaryButton';

function Företagslåda(props){
    return(
        <div>
             
            <div className="boxNav">
                <ProfilBild src={props.img} alt={props.alt}/> 
            </div>
            <div className="boxBody">
                <div className="FöretagsInfo">
                    <h4>{props.företagsNamn}</h4>
                    <h6>{props.stadNamn}</h6>
                    <h5>{props.företagstyp}</h5>
                    <PrimaryButton 
                     text="Info" />
                </div>
            </div>
        </div>
  );
}

export default Företagslåda;
