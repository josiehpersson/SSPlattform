import React from 'react';
import './LoginPages.css';
import Inputfält from '../Components/InputfältText';
import PrimaryButton from '../Components/PrimaryButton';
import SecondaryButton from '../Components/SecondaryButton';
import FrostatGlas from '../Components/Frostatglas';
import Boll from '../Components/Boll';
import MaskotBoll from '../Components/maskotboll';
import { SSMailValidator, SSCombinedValidator } from '../Components/Validators';

class Forgotform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
    };
    this.mailValidator = new SSMailValidator();
    this.formValidator = new SSCombinedValidator(this.mailValidator);
  }

  onMailChange = (e) => {
    const mail = e.target.value;
    this.mailValidator.validate(mail);
    this.setState({
      mail: mail,
    });
  };

  handleSubmit = () => {
    const data = {
      mail: this.state.mail,
    };
  };

  handleCancel = () => {
    this.setState({
      mail: '',
    });
  };

  render() {
    return (
      <div className="forgot-container">
        <FrostatGlas id="forgot-glas" />
        <form className="forgot-form" onSubmit={this.handleSubmit}>
          <h3 className="headline">Ange e-mail</h3>

          <Inputfält
            type="text"
            labeltext="E-mail"
            name="mail"
            value={this.state.mail}
            onChange={this.onMailChange}
            error={this.mailValidator.invalid}
            id="forgot-mailinput"
          />

          <PrimaryButton
            text="Skicka"
            onClick={this.handleSubmit}
            isDisabled={this.formValidator.invalid}
            id="forgot-primbutton"
          />

          <SecondaryButton
            text="Tillbaka"
            onClick={this.handleCancel}
            isDisabled={false}
            id="forgot-secbutton"
          />
        </form>

        <MaskotBoll width="200px" height="200px" left="-300px" top="-100px" />
        <Boll
          className="grönboll"
          width="300px"
          height="300px"
          right="-100px"
          top="25px"
        />
        <Boll
          className="gulboll"
          width="100px"
          height="100px"
          top="10px"
          left="420px"
        />
        <Boll
          className="blåboll"
          width="150px"
          height="150px"
          bottom="-10px"
          left="250px"
        />
      </div>
    );
  }
}

export default Forgotform;
