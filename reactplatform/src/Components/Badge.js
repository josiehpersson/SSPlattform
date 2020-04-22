import React from 'react';
function Badge(props) {
  return (
    <div className={props.badge}>
      <p>{props.Text}</p>
    </div>
  );
}
export default Badge;
