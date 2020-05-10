import React from 'react';
import styled from 'styled-components';

const FORM = styled.form`
  display: flex;
  flex-direction: column;
`

class FeedbackFrom extends React.Component {
  render() {
    return (
      <FORM onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Имя</label>
        <input type="text" id='name'/>
        <label htmlFor="surname">Фамилия</label>
        <input type="text" id='surname' />
        <label htmlFor="phone">Телефон</label>
        <input type="number" id='phone' />
        <label htmlFor="email">Email</label>
        <input type="email" id='email' />
        <button onClick={() => alert('Успешно!')} type='submit' style={{marginTop: '10px'}}>Отправить</button>
      </FORM>
    );
  }
}

export default FeedbackFrom;