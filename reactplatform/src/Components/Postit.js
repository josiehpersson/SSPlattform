import React from 'react';
import Badge from './Badge';
import './components.css';
function PostitRutor(props) {
  return (
    <div className={props.färg}>
      <p>{props.text}</p>
      <Badge badge={props.badge} number={props.number} />
    </div>
  );
}
export default PostitRutor;
