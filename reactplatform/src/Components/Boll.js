import React from 'react';
import './components.css';

function Boll(props) {
  const styles = {
    position: 'absolute',
    borderRadius: '50%',
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right,
}
  return <div className={props.className} style={styles}></div>;
}

export default Boll;
