import React from 'react';
import "./UserName.css"

class UserLogin extends React.Component {
    state = {
        warn: false,
        numbers: false,
        bold: false
    }
    change = (e) => {
        const input = e.target.value;
        const lessThanThree = /\w{3}/;
        lessThanThree.test(input) ? this.setState({ warn: false }) : this.setState({ warn: true });
        const nums = /(\d+)/;
        nums.test(input) ? this.setState({numbers: true}) : this.setState({numbers: false});
        const space = /\s/;
        space.test(input) ? this.setState({bold: true}) : this.setState({bold: false});
    }
    render() {
        const { warn, numbers, bold } = this.state;
        const cName = `${warn ? 'warn' : ''} ${numbers ? 'opacity' : ''} ${bold ? 'bold' : ''}`;
        return (
            <section>
                <label htmlFor="login">Log me in: </label>
                <input onChange={this.change} className={cName} type="text" name="_login" id="login" />
            </section>
        );
    }
}

export default UserLogin;