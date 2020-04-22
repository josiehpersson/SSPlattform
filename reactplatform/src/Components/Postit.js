import React from 'react';
import Badge from './HEADER/Badge';
function PostitRutor(props) {
  return (
    <div className={props.färg}>
      <p className={props.färgText}>{props.text}</p>
      <Badge badge={props.badge} Text={props.Text} />
    </div>
  );
}
export default PostitRutor;
