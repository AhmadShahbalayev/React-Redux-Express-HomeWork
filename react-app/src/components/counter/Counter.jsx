import React from 'react';
import styled from 'styled-components';

const SECT = styled.section
  `
  display: flex;
  justify-content: center;
  align-items: center;
`

class Counter extends React.Component {
  state = {
    num: 0
  }

  componentDidMount() {
    window.addEventListener('keypress', this.keyPress);
  }

  keyPress = (e) => {
    if (e.keyCode === 38) {
      this.increase();
    } else if (e.keyCode === 40) {
      this.decrease();
    }
  }

  increase = () => {
    (this.state.num > 0) ? this.setState({ num: this.state.num - 1 }) : this.setState({ num: 0 })
  }

  decrease = () => {
    (this.state.num < 20) ? this.setState({ num: this.state.num + 1 }) : this.setState({ num: 20 })
  }

  render() {
    return (
      <SECT>
        <button onClick={this.increase}>-</button>
        <p>{this.state.num}</p>
        <button onClick={this.decrease}>+</button>
      </SECT>
    );
  }
}

export default Counter;