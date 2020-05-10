import React from 'react';

class Dice extends React.Component {
    state = {
        num: 0
    }
    componentDidMount() {
        window.addEventListener('keypress', this.keyPress);
    }

    keyPress = (e) => {
        if (e.keyCode === 32) {
            this.random();
        }
    }
    random = () => {
        this.setState({num: Math.floor(1 + Math.random() * 6)});
    }
    render() {
        return (
            <button onClick={this.random}>{this.state.num}</button>
        );
    }
}

export default Dice;