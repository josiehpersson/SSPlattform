import React from 'react';

function Frostatglas() {
  const styles = {
    backgroundColor: '#FFFFFF',
    opacity: '0.5',
    backdropFilter: 'blur(50px)',
    border: '1px solid #a3a3a3',
    boxShadow: 'inset 0px 15px 15px rgba (0,0,0,0.25)',
    height: 100,
    width: 500,
  };

  return <div className="frostatGlas" style={styles}></div>;
}

export default Frostatglas;
