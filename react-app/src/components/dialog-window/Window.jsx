import React from 'react';
import styled from 'styled-components';

const DIV = styled.div
  `
  width: 300px;
  height: 200px;
  background: #E7E7E7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
`
const BTNdiv = styled.div
`
  display: flex;
  justify-content: space-between;
  width: 275;
  margin: 50px 0;
`

const BTN = styled.button
`
  width: 100px;
  height: 35px;
  background: #833AE0;
  border: none;
  boder-radius: 0;
  color: white;
  font-weight: normal;
`

class Window extends React.Component {
  render() {
    return (
      <DIV>
        <h3>Вы уверены что хотите удалить "{this.props.value}"</h3>
        <BTNdiv>
          <BTN onClick={this.props.ok}>OK</BTN>
          <BTN onClick={this.props.cancel}>Отмена</BTN>
        </BTNdiv>
      </DIV>
    );
  }
}

export default Window;