import React from 'react';
import './Boll.css';

function Boll(props) {
  const styles = {
    position: 'absolute',
    borderRadius: '50%',
    height: props.height,
    width: props.width,
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right,
    zIndex: props.zIndex,
  };
  return <div className={props.className} style={styles}></div>;
}

export default Boll;
