import React from 'react';
import EmailWarn from './EmailWarn';
import PasswordWarn from './PasswordWarn';

class Login extends React.Component {
    state = {
        emailWarn: false,
        passWarn: false
    }
    warnEmail = () => {
        this.setState({ emailWarn: true })
    }
    warnPass = () => {
        this.setState({ passWarn: true })
    }
    removeWarn = () => {
        this.setState({
            emailWarn: false,
            passWarn: false
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" name="_email" id="email"
                    onFocus={this.warnEmail}
                    onBlur={this.removeWarn}
                />
                {this.state.emailWarn ? <EmailWarn /> : null}

                <label htmlFor="password">Password: </label>
                <input type="password" name="_password" id="password" 
                    onFocus={this.warnPass}
                    onBlur={this.removeWarn}
                />
                {this.state.passWarn ? <PasswordWarn /> : null}

                <button type="submit" onClick={(e) => e.preventDefault()}>Login</button>
            </form>
        );
    }
}

export default Login;