import React from 'react';

class UserId extends React.Component {
  validator(e) {
    if (e.target.value.length !== 12) {
      alert('Ошибка ввода');
    }
  }
  render() {
    return (
      <section className="user-id-container">
        <label htmlFor="user-id">Please enter your ID: </label>
        <input onBlur={this.validator} type="text" name="_user-id" id="user-id" />
      </section>
    );
  }
}

export default UserId;