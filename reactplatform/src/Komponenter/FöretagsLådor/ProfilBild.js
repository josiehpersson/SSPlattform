import React from 'react';
import '../KonsultLådor/POPUPCSS.css';

function ProfilBild(props) {
  const styles = {
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right,
  };
  return (
    <div className="profilbild-container" style={styles}>
      <img src={props.img} alt={props.alt} className="ProfilBild" />
    </div>
  );
}
export default ProfilBild;
