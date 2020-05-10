import React from 'react';

let id = 0;

class CounterRegister extends React.Component {
  state = {
    value: 0,
    history: []
  }
  calculate = (e) => {
    const copy = [...this.state.history];
    copy.push({ id: id, value: this.state.value + +e.target.value });
    id++;
    this.setState({ value: this.state.value + +e.target.value, history: copy })
  }
  remove = (id) => {
    const history = this.state.history.filter((element) => id !== element.id);
    this.setState({ history: history })
  }
  render() {
    return (
      <div>
        <p>Текушая сумма регистера: {this.state.value}</p>
        <div>
          <button value={-5} onClick={this.calculate}>-5</button>
          <button value={-2} onClick={this.calculate}>-2</button>
          <button value={-1} onClick={this.calculate}>-1</button>
          <button value={+1} onClick={this.calculate}>+1</button>
          <button value={+2} onClick={this.calculate}>+2</button>
          <button value={+5} onClick={this.calculate}>+5</button>
        </div>
        <div>
          <h1>Регистер: </h1>
          {
            this.state.history.map((element) => {
              return <div key={element.id}>
                <div>{element.value}
                  <button onClick={() => (this.remove(element.id))}>remove</button>
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}
export default CounterRegister;