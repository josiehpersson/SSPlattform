import React from 'react';
import './LoginPages.css';
import Inputfält from '../Components/InputfältText';
import PrimaryButton from '../Components/PrimaryButton';
import SecondaryButton from '../Components/SecondaryButton';
import FrostatGlas from '../Components/Frostatglas';
import Boll from '../Components/Boll';
import MaskotBoll from '../Components/maskotboll';
import {
  SSMailValidator,
  SSPasswordValidator,
  SSCombinedValidator,
} from '../Components/Validators';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.mailValidator = new SSMailValidator();
    this.passwordValidator = new SSPasswordValidator();
    this.formValidator = new SSCombinedValidator(
      this.mailValidator,
      this.passwordValidator
    );
  }

  onMailChange = (e) => {
    const mail = e.target.value;
    this.mailValidator.validate(mail);
    this.setState({
      mail: mail,
    });
  };

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.passwordValidator.validate(password);
    this.setState({
      password: password,
    });
  };

  onForgotClick = () => {
    console.log('glömt lösenord klickat');
  }

  onRegisterClick = () => {
    console.log('registrera klickat!');
  }
  handleSubmit = () => {
    const data = {
      mail: this.state.mail,
      password: this.state.password,
    };
  };
  render() {
    return (
      <div className="login-container">
        <FrostatGlas id="login-glas"/>

        <form className="signin-form" onSubmit={this.handleSubmit}>
          <h3 className="headline">Logga in</h3>

          <Inputfält
            type="text"
            labeltext="E-mail"
            name="mail"
            value={this.state.mail}
            onChange={this.onMailChange}
            error={this.mailValidator.invalid}
            id="login-mailinput"
          />

          <Inputfält
            type="password"
            className="login-input"
            labeltext="Password"
            name="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
            error={this.passwordValidator.invalid}
            id="login-passinput"
          />

          <PrimaryButton
            text="Logga in"
            onClick={this.handleSubmit}
            isDisabled={this.formValidator.invalid}
            id="login-primbutton"
          />

          <SecondaryButton 
          text="Registrera" 
          onClick={this.onRegisterClick}
          isDisabled={false} 
          id="login-secbutton"/>
        </form>
        <a className="forgot-link" onClick={this.onForgotClick}>Glömt lösenord?</a>

      <MaskotBoll width="150px" height="150px" top="50px" left="350px" />
      <Boll className="gulboll" height="100px" width="100px" left="5px" top="-7px"/>
      <Boll className="grönboll" height="200px" width="200px" bottom="-115px" left="100px"/>
      <Boll className="blåboll" height="150px" width="150px" right="150px" top="5px"/>
      <Boll className="grönboll" height="75px" width="75px" left="250px"/>
      </div>

    );
  }
}
export default LoginForm;
