
import React from 'react';

function ProfilBild(props) {
  return (
    <div className="ProfilBild">
      <img src={props.img} alt={props.alt} className="Logotypeboll" />
    </div>
  );
}

export default ProfilBild;
