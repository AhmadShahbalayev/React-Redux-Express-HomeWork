import React from 'react';
import Aragorn from './profilePictures/Aragorn.jpg';
import Frodo from './profilePictures/Frodo.png';
import Gandalf from './profilePictures/Gandalf.jpg';
import Legolas from './profilePictures/Legolas.jpeg';
import Sam from './profilePictures/Sam.jpeg';
import styled from 'styled-components';

const IMG = styled.img
`
  width: 128px;
  height: 128px;
  border-radius: 10px;
`
const DIV = styled.div
`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const SECT = styled.section
`
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
`
const INPUT = styled.input
`
  width: 100%;
`
const P = styled.p
`
  width: 100%;
`

class SearchAndFilter extends React.Component {
  state = {
    data: [],
    userInput: '',
    department: ''
  }
  componentDidMount = () => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
  }
  getUserByName = (e) => {
    this.setState({ userInput: e.target.value })
  }
  drawEmployees = () => {
    const data = [...this.state.data].filter(item => {
      if (this.state.userInput) {
        return item.name === (this.state.userInput || item.name)
      } else {
        return item.department === (this.state.department || item.department)
      }
    })

    let drawableData = data.map(user => {
      return (
        <SECT key={user.id}>
          {user.name === 'Aragorn' ? <IMG src={Aragorn} alt='Aragorn' /> : null}
          {user.name === 'Frodo Baggins' ? <IMG src={Frodo} alt='Frodo' /> : null}
          {user.name === 'Gandalf the Gray' ? <IMG src={Gandalf} alt='Gandalf' /> : null}
          {user.name === 'Legolas' ? <IMG src={Legolas} alt='Legolas' /> : null}
          {user.name === 'Samwise Gamgee' ? <IMG src={Sam} alt='Sam' /> : null}
          <p>ID: {user.id}</p>
          <p>{user.name}</p>
          <p>{user.department}</p>
          <p>{user.role}</p>
        </SECT>
      )
    })

    return drawableData;
  }
  departmentIdentifier = (e) => {
    this.setState({ department: e.target.value })
    this.drawEmployees();
  }
  render() {
    return (
      <div>
        <INPUT value={this.state.userInput} onChange={this.getUserByName} type="text" id='search' placeholder='Search by name' />
        <P>
          <button value='Management' onClick={this.departmentIdentifier}>Management</button>
          <button value='Recruitment' onClick={this.departmentIdentifier}>Recruitment</button>
          <button value='Security' onClick={this.departmentIdentifier}>Security</button>
        </P>
        <DIV>
          {this.drawEmployees()}
        </DIV>
      </div>
    )
  }
}

export default SearchAndFilter;