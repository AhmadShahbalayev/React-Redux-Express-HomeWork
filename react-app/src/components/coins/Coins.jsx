import React from 'react';
import styled from 'styled-components';

const FORM = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
`

const DIV = styled.div`
  grid-column: 1 / -1;
  margin: 10px;
`

class Coins extends React.Component {
  state = {
    data: [],
    value: 1,
    id: ''
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch(`http://localhost:3001/coin?count=15&offset=${this.state.value}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
  }
  getValue = (e) => {
    this.setState({ value: e.target.value }, this.getData);
  }
  remove = (e) => {
    this.setState({ id: e.target.value }, this.handleRemove)
  }
  handleRemove() {
    fetch(`http://localhost:3001/coin/${this.state.id}`,
      {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
    this.getData();
  }
  drawData = () => {
    const arr = this.state.data;
    return arr.map(item => {
      const { id, name, price, rarity, year } = item;
      return (
        <div key={id} style={{ border: '1px solid black' }}>
          <p>ID: {id}</p>
          <p>Coin name: {name}</p>
          <p>Coin price: {price}</p>
          <p>Coin rarity: {rarity}</p>
          <p>Coin year: {year}</p>
          <button value={id} onClick={this.remove}>delete</button>
        </div>
      )
    })
  }
  render() {
    return (
      <FORM onSubmit={(e) => e.preventDefault()}>
        <DIV>
          <input style={{ width: '50px' }} onChange={this.getValue} value={this.state.value} type="number" />
        </DIV>
        {this.drawData()}
      </FORM>
    );
  }
}

export default Coins;