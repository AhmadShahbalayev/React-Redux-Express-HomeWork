import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease, updateValue } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <main>
        <button onClick={() => this.props.decrease()}>-</button>
        <span> {this.props.count} </span>
        <button onClick={() => this.props.increase()}>+</button>
        <input type="text" onChange={this.props.updateValue} value={this.props.value} />
        <input type="text" value={this.props.value} readOnly/>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    count: state.count
  }
}

const mapDispatchToProps = {
  increase,
  decrease,
  updateValue
}

export default connect(mapStateToProps, mapDispatchToProps)(App);