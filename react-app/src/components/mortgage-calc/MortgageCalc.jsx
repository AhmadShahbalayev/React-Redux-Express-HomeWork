import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  display: flex;
  flex-direction: column;
`

class MortgageCalc extends React.Component {
  state = {
    amount: '',
    rate: '',
    time: '',
    topUp: 0
  }
  amountInputHandler = (e) => {
    this.setState({ amount: e.target.value })
    this.calculateTopUpAmount()
  }
  rateInputHandler = (e) => {
    this.setState({ rate: e.target.value })
    this.calculateTopUpAmount()
  }
  timeInputHandler = (e) => {
    this.setState({ time: e.target.value })
    this.calculateTopUpAmount()
  }
  calculateTopUpAmount = () => {
    let tmp = (1 + this.state.rate / 100 / 12) ** (this.state.time * 12);
    let topUpAmount = this.state.amount * this.state.rate / 100 / 12 * tmp / (tmp - 1);
    this.setState({ topUp: topUpAmount })
  }
  render() {
    const { amount, rate, time, topUp } = this.state;
    return (
      <DIV>
        <label htmlFor="amount">Сумма: </label>
        <div>
          <input onChange={this.amountInputHandler} value={amount} type="number" name="_amount" id="amount" /><span> $</span>
        </div>
        <label htmlFor="rate">Ставка: </label>
        <div>
          <input onChange={this.rateInputHandler} value={rate} type="number" name="_rate" id="rate" /><span> %</span>
        </div>
        <label htmlFor="time">Срок: </label>
        <div>
          <input onChange={this.timeInputHandler} value={time} type="number" name="_time" id="time" /><span> лет</span>
        </div>
        <p>Ежемесячный платёж: {topUp}</p>
      </DIV>
    );
  }
}

export default MortgageCalc;