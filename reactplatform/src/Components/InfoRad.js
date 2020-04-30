import React from 'react';

function InfoRad(props) {
  return (
    <div className="InfoRad">
      <div className="top">
        <div>
          <h6>{props.rubrik}</h6>
          <h6 className="uppgifter">{props.text}</h6>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default InfoRad;
