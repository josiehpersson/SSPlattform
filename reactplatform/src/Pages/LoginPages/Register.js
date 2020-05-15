import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPages.css';
import Inputfält from '../../Komponenter/UI-komponenter/InputfältText';
import PrimaryButton from '../../Komponenter/UI-komponenter/PrimaryButton';
import SecondaryButton from '../../Komponenter/UI-komponenter/SecondaryButton';
import Boll from '../../Komponenter/Bollar/Boll';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';
import {
  SSMailValidator,
  SSPasswordValidator,
  SSCombinedValidator,
  SSNameValidator,
  SSPhoneValidator,
} from '../../Komponenter/UI-komponenter/Validators';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
      isLoggedIn: false,
    };
    this.firstNameValidator = new SSNameValidator();
    this.lastNameValidator = new SSNameValidator();
    this.mailValidator = new SSMailValidator();
    this.phoneValidator = new SSPhoneValidator();
    this.passwordValidator = new SSPasswordValidator();
    this.formValidator = new SSCombinedValidator(
      this.firstNameValidator,
      this.lastNameValidator,
      this.mailValidator,
      this.phoneValidator,
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

  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.firstNameValidator.validate(firstName);
    this.setState({
      firstName: firstName,
    });
  };

  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.lastNameValidator.validate(lastName);
    this.setState({
      lastName: lastName,
    });
  };

  onPhoneChange = (e) => {
    const phone = e.target.value;
    this.phoneValidator.validate(phone);
    this.setState({
      phone: phone,
    });
  };

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.passwordValidator.validate(password);
    this.setState({
      password: password,
    });
  };

  handleSubmit = () => {
    const data = {
      mail: this.state.mail,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      password: this.state.password,
    };
  };

  handleCancel = () => {
    this.setState({
      mail: '',
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
    });
  };

  render() {
    return (
      <div className="window-container">
        <div className="register-container">
          <div className="frostatGlas">
            <form className="register-form" onSubmit={this.handleSubmit}>
              <h3 className="headline">Registrera nytt konto</h3>

              <Inputfält
                type="text"
                labeltext="Förnamn"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onFirstNameChange}
                error={this.firstNameValidator.invalid}
                id="register-firstNameInput"
              />

              <Inputfält
                type="text"
                labeltext="Efternamn"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onLastNameChange}
                error={this.lastNameValidator.invalid}
                id="register-lastNameInput"
              />

              <Inputfält
                type="text"
                labeltext="E-mail"
                name="mail"
                value={this.state.mail}
                onChange={this.onMailChange}
                id="register-mailInput"
              />

              <Inputfält
                type="text"
                labeltext="Telefon"
                placeholder="xxx-xxx xxx xxx"
                name="phone"
                value={this.state.phone}
                onChange={this.onPhoneChange}
                id="register-phoneInput"
              />

              <Inputfält
                type="password"
                labeltext="Lösenord"
                name="password"
                value={this.state.password}
                onChange={this.onPasswordChange}
                error={this.passwordValidator.invalid}
                id="register-passwordInput"
              />

              <div className="login-btn-holder">
                <Link to="/">
                  <PrimaryButton
                    text="SKICKA"
                    onClick={this.handleSubmit}
                    isDisabled={this.formValidator.invalid}
                    id="register-primbutton"
                  />
                </Link>
                <Link to="/">
                  <SecondaryButton
                    text="AVBRYT"
                    onClick={this.handleCancel}
                    isDisabled={false}
                    id="register-secbutton"
                  />
                </Link>
              </div>
            </form>
            <MaskotBoll top="68%" right="1%" />
            <Boll className="grönboll" top="8%" left="5%" />
            <Boll className="gulboll" left="15%" bottom="-20%" />
            <Boll className="blåboll" right="13%" top="-5%" />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
