import React from 'react';
import PopUp from './PopUp';
import styled from 'styled-components';

const SECT = styled.section
`
	position: relative;
`

class Confirm extends React.Component {
	state = {
		show: false
	}
	show = () => {
		this.setState({ show: true });
	}
	hide = () => {
		this.setState({ show: false });
	}
	render() {
		return (
			<>
				<SECT>
					<label htmlFor="payment-amount">Please enter amount: </label>
					<input type="text" name="_payment-amount" id="payment-amount" />
					<button onClick={this.show} id="confirm">Send</button>
				</SECT>
				{this.state.show ? <PopUp hide={this.hide} /> : null}
			</>
		);
	}
}

export default Confirm;