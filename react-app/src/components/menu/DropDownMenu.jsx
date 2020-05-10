import React from 'react';
import styled from 'styled-components';

const DIV = styled.div
`
  position: absolute;
`

class DropDownMenu extends React.Component {
  render() {
    return (
      <DIV>
        <p>Here</p>
        <p>The</p>
        <p>Menu</p>
        <p>You</p>
        <p>Have</p>
        <p>Requested</p>
      </DIV>
    );
  }
}

export default DropDownMenu;