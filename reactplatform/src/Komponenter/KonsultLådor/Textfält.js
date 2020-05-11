import React from 'react';
import './Lådor.css';

class Textfält extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  render(props) {
    return (
      <div className="title-box">
        <p className="title-text">{this.props.titel}</p>
        <div className="content-box">
          <p className="content-text">{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Textfält;
