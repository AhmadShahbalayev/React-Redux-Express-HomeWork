import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <section>
        <button onClick={this.props.hide} id='close-btn'>X</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        A id mollitia at illo error aut amet quae, maxime nemo
        accusantium sapiente quo. Tempora soluta cumque cum,
        necessitatibus culpa minus ad!</p>
      </section>
    );
  }
}

export default Content;