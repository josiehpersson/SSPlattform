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
  SSNameValidator,
  SSPhoneValidator,
} from '../Components/Validators';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            mail : '',
            firstName : '',
            lastName : '',
            phone : '',
            password : '',
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
            this.passwordValidator,
        );
    }

    onMailChange = e => {
        const mail = e.target.value;
        this.mailValidator.validate(mail);
        this.setState({
            mail: mail
        });
    };

    onFirstNameChange = e => {
        const firstName = e.target.value;
        this.firstNameValidator.validate(firstName);
        this.setState({
            firstName: firstName
        });
    };

    onLastNameChange = e => {
        const lastName = e.target.value;
        this.lastNameValidator.validate(lastName);
        this.setState({
            lastName: lastName
        });
    };

    onPhoneChange = e => {
        const phone = e.target.value;
        this.phoneValidator.validate(phone);
        this.setState({
            phone:phone
        });
    };

    onPasswordChange = e => {
        const password = e.target.value;
        this.passwordValidator.validate(password);
        this.setState({
            password:password
        });
    };

    handleSubmit = () => {
        const data = {
            mail: this.state.mail,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            password: this.state.password
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
            this.props.changeView('login');
    };

    render() {
        return(
            <div className="window-container">
            <div className="register-container">
                <FrostatGlas id="register-glas" />

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

                    <PrimaryButton
                    text="Registrera"
                    onClick={this.handleSubmit}
                    isDisabled={this.formValidator.invalid}
                    id="register-primbutton"
                    />

                    <SecondaryButton
                    text="Avbryt"
                    onClick={this.handleCancel}
                    isDisabled={false}
                    id="register-secbutton"
                    />
                </form>

                <MaskotBoll width="300px" height="300px" />
                <Boll className="gulboll" height="200px" width="200px" left="10px" />
                <Boll className="blåboll" height="150px" width="150px" right="10px" top="10px" />
                <Boll className="grönboll" height="100px" width="100px" left="150px" top="20px"/>

            </div>
            </div>
        )
    }
}

export default Register