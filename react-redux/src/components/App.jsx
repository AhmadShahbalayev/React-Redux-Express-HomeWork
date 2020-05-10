import React from 'react';
import { connect } from 'react-redux';
import { storeValue, resetValue } from '../actions';

class App extends React.Component {
  render() {
    return (
      <main>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id='name'
          value={this.props.value}
          onChange={(e) => this.props.storeValue(e.target.value)}
        />
        <button onClick={() => this.props.resetValue()}>Reset</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value,
  }
}
export default connect(mapStateToProps, { storeValue, resetValue })(App);