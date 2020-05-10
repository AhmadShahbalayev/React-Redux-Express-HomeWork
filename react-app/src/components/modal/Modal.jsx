import React from 'react';

class Modal extends React.Component {
  state = {
    isModalOpen: false
  }
  open = () => {
    this.setState({isModalOpen: true})
  }
  close = () => {
    this.setState({isModalOpen: false})
  }
  render() {
    return (
      <section>
        <button onClick={this.open}>Click to open Modal window!</button>
        {this.state.isModalOpen ? <this.props.content hide={this.close} /> : null}
      </section>
    );
  }
}

export default Modal;
