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
    let defaultContent = 'Lorem Ipsum';
    if (
      this.state.content === undefined ||
      this.state.content === null ||
      this.state.content === ''
    ) {
      this.setState = {
        content: defaultContent,
      };
    }
    return (
      <div className="title-box">
        <p className="title-text">{this.props.titel}</p>
        <div className="content-box">
          <p className="content-text">{this.state.content} Lorem ipsum</p>
        </div>
      </div>
    );
  }
}

export default Textfält;
