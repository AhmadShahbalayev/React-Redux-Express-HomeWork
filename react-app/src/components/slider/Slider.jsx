import React from 'react';

class Slider extends React.Component {
    state = {
        imgIndex: 0
    }
    imgArr = [
        'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1587605660641-70fb599d57e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1587606605852-014029ebc67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ]
    increment = () => {
        (this.state.imgIndex < 2) ? this.setState({imgIndex: this.state.imgIndex + 1}) : this.setState({imgIndex: 0})
    }
    decrement = () => {
        (this.state.imgIndex > 1) ? this.setState({imgIndex: this.state.imgIndex - 1}) : this.setState({imgIndex: 2})
    }
    render() {
        return (
            <section>
                <div>
                    <button onClick={this.decrement}>&larr;</button>
                    <button onClick={this.increment}>&rarr;</button>
                </div>
                <img src={this.imgArr[this.state.imgIndex]} alt="random" />
            </section>
        );
    }
}

export default Slider;