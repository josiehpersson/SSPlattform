import React from 'react';
import './LoginPages.css';
import Logotype from '../../Komponenter/UI-komponenter/LoggaSvart';
import Inputfält from '../../Komponenter/UI-komponenter/InputfältText';
import PrimaryButton from '../../Komponenter/UI-komponenter/PrimaryButton';
import SecondaryButton from '../../Komponenter/UI-komponenter/SecondaryButton';
import FrostatGlas from '../../Komponenter/UI-komponenter/Frostatglas';
import Boll from '../../Komponenter/Bollar/Boll';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';
import {
  SSMailValidator,
  SSPasswordValidator,
  SSCombinedValidator,
} from '../../Komponenter/UI-komponenter/Validators';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
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
  };

  onRegisterClick = () => {
    console.log('registrera klickat!');
  };
  handleSubmit = () => {
    const data = {
      mail: this.state.mail,
      password: this.state.password,
    };
    this.props.changeView('start');
  };
  render() {
    return (
      <div className="window-container">
        <div className="login-container">
          <FrostatGlas id="login-glas" />

          <form className="signin-form" onSubmit={this.handleSubmit}>
            <Logotype />

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
              onClick={() => this.props.changeView('register')}
              isDisabled={false}
              id="login-secbutton"
            />
          </form>
          <a
            className="forgot-link"
            href="/ForgotPassword"
          >
            Glömt lösenord?
          </a>

          <MaskotBoll top="68%" right="1%" />
          <Boll className="grönboll" top="8%" left="5%" />
          <Boll className="gulboll" left="15%" bottom="-20%" />
          <Boll className="blåboll" right="13%" top="-5%" />
        </div>
      </div>
    );
  }
}
export default LoginForm;
