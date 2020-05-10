import React from 'react';
import styled from 'styled-components';

const SECT = styled.section
  `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 30%;
  height: 25%;
  border: 1px solid #413c69;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const DIV = styled.div
`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

class PopUp extends React.Component {
  render() {
    return (
      <SECT>
        <p>Are you sure?</p>
        <DIV>
          <button style={{background: 'green'}} onClick={() => { this.props.hide(); alert('Sent!') }} id="yes">Yes</button>
          <button style={{background: 'red'}} onClick={() => { this.props.hide(); alert('Canceled!') }} id="no">No</button>
        </DIV>
      </SECT>
    );
  }
}

export default PopUp;