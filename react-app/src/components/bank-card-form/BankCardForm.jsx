import React from 'react';
import styled from 'styled-components';

const FORM = styled.form
  `
  display: flex;
  flex-direction: column;
`
const DIV = styled.div
  `
  display: flex;
  justify-content: space-between;
  margin: 5px;
`
class BankCardForm extends React.Component {
  state = {
    name: '',
    surname: '',
    phone: '',
    ccv: '',
  }
  nameChangeHandler = (e) => this.setState({ name: e.target.value })
  surnameChangeHandler = (e) => this.setState({ surname: e.target.value })
  phoneChangeHandler = (e) => this.setState({ phone: e.target.value })
  ccvChangeHandler = (e) => this.setState({ ccv: e.target.value })
  activate = () => {
    const { name, surname, phone } = this.state;
    if (name.length !== 0 && surname.length !== 0 && phone.length !== 0) {
      return false;
    } else {
      return true;
    }
  }
  activateSumbit = () => {
    const { name, surname, phone, ccv } = this.state;
    if (ccv.length !== 0 && name.length !== 0 && surname.length !== 0 && phone.length !== 0) {
      return false
    } else {
      return true
    }
  }
  render() {
    const { name, surname, phone, ccv } = this.state;
    const isBlocked = this.activate();
    const isBlockedSubmit = this.activateSumbit();
    return (
      <FORM onChange={this.activate} onSubmit={(e) => e.preventDefault()}>
        <DIV>
          <label htmlFor="name">Имя: </label>
          <input onChange={this.nameChangeHandler} value={name} type="text" id='name' />
        </DIV>
        <DIV>
          <label htmlFor="surname">Фамилия: </label>
          <input onChange={this.surnameChangeHandler} value={surname} type="text" id='surname' />
        </DIV>
        <DIV>
          <label htmlFor="phone">Телефон: </label>
          <input onChange={this.phoneChangeHandler} value={phone} type="number" id='phone' />
        </DIV>
        <DIV>
          <label htmlFor="email">CCV: </label>
          <input disabled={isBlocked} onChange={this.ccvChangeHandler} value={ccv} type="number" id='ccv' />
        </DIV>
        <button disabled={isBlockedSubmit} type='submit' style={{ marginTop: '10px' }}>Создать електронный карт!</button>
      </FORM>
    );
  }
}

export default BankCardForm;