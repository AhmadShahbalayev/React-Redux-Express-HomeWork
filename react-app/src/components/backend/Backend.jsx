import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import styled from 'styled-components';

const GRID = styled.div
  `
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  align-items: center;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
`
const DIV = styled.div
  `
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  align-items: center;
`

class Backend extends React.Component {
  state = {
    data: [],
    id: 0,
    interfaceId: 0,
    name: '',
    email: '',
    age: 0,
    loadings: []
  }
  enterLoading = index => {
    const newLoadings = [...this.state.loadings];
    newLoadings[index] = true;
    this.setState({
      loadings: newLoadings,
    });
    setTimeout(() => {
      newLoadings[index] = false;
      this.setState({ loadings: newLoadings });
    }, 1000);
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
  }
  sendData = () => {
    this.enterLoading(1);
    fetch(
      'http://localhost:5000/users',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          interfaceId: this.state.interfaceId,
          name: this.state.name,
          email: this.state.email,
          age: this.state.age
        })
      }
    ).then(this.getData())
  }
  deleteData = (e) => {
    let id = parseInt(e.target.value);
    this.enterLoading(2);
    fetch(
      `http://localhost:5000/users/${id}`,
      {
        method: 'DELETE'
      }
    ).finally(this.getData())
  }
  getValue = (val, e) => {
    this.setState({ [val]: e });
  }
  drawUsers = () => {
    this.getData();
    return this.state.data.map(item => {
      const { id, interfaceId, name, email, age } = item;
      return (
        <DIV key={id}>
          <div><Input value={interfaceId} type='number' placeholder='Enter id' /></div>
          <div><Input value={name} type='text' placeholder='Enter name' /></div>
          <div><Input value={email} type='email' placeholder='Enter email' /></div>
          <div><Input value={age} type='number' placeholder='Enter age' /></div>
          <div><Button value={id} loading={this.state.loadings[2]} danger onClick={this.deleteData}>Delete user</Button></div>
        </DIV>
      )
    })
  }
  render() {
    return (
      <section>
        <GRID>
          <div><Input onChange={(e) => { this.getValue('interfaceId', e.target.value) }} type='number' placeholder='Enter id' /></div>
          <div><Input onChange={(e) => { this.getValue('name', e.target.value) }} type='text' placeholder='Enter name' /></div>
          <div><Input onChange={(e) => { this.getValue('email', e.target.value) }} type='email' placeholder='Enter email' /></div>
          <div><Input onChange={(e) => { this.getValue('age', e.target.value) }} type='number' placeholder='Enter age' /></div>
          <div><Button onClick={this.sendData} loading={this.state.loadings[1]} type='primary'>Create user</Button></div>
        </GRID>
        {this.drawUsers()}
      </section>
    );
  }
}

export default Backend;