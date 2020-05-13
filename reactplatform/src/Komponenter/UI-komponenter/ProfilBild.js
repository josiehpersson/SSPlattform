
import React from 'react';

function ProfilBild(props) {
  const styles={
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right
  }
  return (
    <div className="ProfilBild" style={styles}>
      <img src={props.img} alt={props.alt} className="Logotypeboll" />
    </div>
  );
}

export default ProfilBild;
