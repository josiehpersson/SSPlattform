import React from 'react';
import './LoginPages.css';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import LogIn from './LogIn';
import StartPage from '../StartPage/StartPage.js';

class LoginBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            forgot: false,
            register: false,
            login: true,
            start: false,
            isLoggedIn: false,
        };
    }

    changeView = view => {
        if(view === 'register') {
            this.setState({
                forgot: false,
                login: false,
                register: true,
                start: false,
                isLoggedIn: false,
            });
        }
        if(view === 'forgot') {
            this.setState({
                forgot: true,
                login: false,
                register: false,
                start: false,
                isLoggedIn: false,
            });
        }
        if(view === 'login') {
            this.setState({
                forgot: false,
                login: true,
                register: false,
                start: false,
                isLoggedIn: false,
            });
        }
        if(view === 'start') {
            this.setState({
                forgot: false,
                login: false,
                register: false,
                start: true,
                isLoggedIn: true,
            })
        }
    }

    render() {
        const {forgot, login, register } = this.state;
        let view;

        if(forgot) {
            view = <ForgotPassword changeView={this.changeView} />
        } else if (register) {
            view = <Register changeView={this.changeView} />
        } else if (login) {
            view = <LogIn changeView={this.changeView} />
        } else {
            view = <StartPage changeView={this.changeView} />
        }

        return <section className="background-container">{view}</section>
    }
}

export default LoginBackground