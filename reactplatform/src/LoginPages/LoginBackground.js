import React from 'react';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import LogIn from './LogIn';

class LoginBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            forgot: false,
            register: false,
            login: true
        };
    }

    changeView = view => {
        if(view === 'register') {
            this.setState({
                forgot: false,
                login: false,
                register: true,
            });
        }
        if(view === 'forgot') {
            this.setState({
                forgot: true,
                login: false,
                register: false,
            });
        }
        if(view === 'login') {
            this.setState({
                forgot: false,
                login: true,
                register: false,
            });
        }
    }

    render() {
        const {forgot, login, register } = this.state;
        let view;

        if(forgot) {
            view = <ForgotPassword changeView={this.changeView} />
        } else if (register) {
            view = <Register changeView={this.changeView} />
        } else {
            view = <LogIn changeView={this.changeView} />
        }

        return <section className="Background-container">{view}</section>
    }
}

export default LoginBackground