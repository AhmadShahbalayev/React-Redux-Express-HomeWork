import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const FORM = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
`
const BUTTON = styled.button
`
  grid-column: 1 / -1;
  margin: 5px 0;
`

class Coins extends React.Component {
  state = {
    data: [],
    page: 1,
    id: '',
    name: '',
    price: 0,
    rarity: '',
    year: 0
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch(`http://localhost:3001/coin?count=15&offset=${this.state.page}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
  }
  getValue = (e) => {
    this.setState({ page: e.target.value }, this.getData);
  }
  getAntValue = (val, value) => {
    this.setState({[val]: value})
  }
  postData = () => {
    fetch(
      `http://localhost:3001/coin/`, 
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        method: 'POST',
        body: JSON.stringify(
          {
            name: this.state.name,
            year: this.state.year,
            price: this.state.price,
            rarity: this.state.rarity 
          }
        )
      }
    )
    this.getData()
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
    const { page, name, price, rarity, year } = this.state;
    return (
      <FORM onSubmit={(e) => e.preventDefault()}>
        <input style={{width: "100px"}} onChange={this.getValue} value={page} type="number" />
        <Input onChange={(e) => this.getAntValue('name', e.target.value)} value={name} type="text" placeholder={'Coin name'} />
        <Input onChange={(e) => this.getAntValue('price', e.target.value)} value={price} type="number" placeholder={'Coin price'} />
        <Input onChange={(e) => this.getAntValue('rarity', e.target.value)} value={rarity} type="text" placeholder={'Coin rarity'} />
        <Input onChange={(e) => this.getAntValue('year', e.target.value)} value={year} type="number" placeholder={'Coin year'} />
        <BUTTON onClick={this.postData} >Send</BUTTON>
        {this.drawData()}
      </FORM>
    );
  }
}

export default Coins;