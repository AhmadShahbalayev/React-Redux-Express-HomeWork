import React from 'react';

class Dropdown extends React.Component {
  state = {
    visible: false
  }
  show = (e) => {
    this.setState({ visible: !this.state.visible })
  }
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        <button onClick={this.show}>See more</button>
        {this.state.visible ? <p>{this.props.additionalInfo}</p> : null}
      </section>
    );
  }
}

export default Dropdown;