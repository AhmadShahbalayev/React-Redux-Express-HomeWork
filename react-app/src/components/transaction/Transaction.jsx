import React from 'react';
import PropTypes from 'prop-types';

class Transaction extends React.Component {
    static defaultProps = {
        id: ' Not specified',
        price: 'Not specified ',
        data: {
          category: 'Not specified',
          venue: 'Not specified'
        },
        date: 'Not specified'
      }
      static propTypes = {
        id: PropTypes.oneOfType([
          PropTypes.number.isRequired,
          PropTypes.string.isRequired
        ]),
        price: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string
        ]),
        data: PropTypes.object.isRequired,
        date: PropTypes.string.isRequired
      }
    render() {
        return (
            <section>
                <p>Transaction #{this.props.id}</p>
                <hr />
                <p>Amount: {this.props.price}$</p>
                <p>Category: {this.props.data.category}</p>
                <p>Venue: {this.props.data.venue}</p>
                <p>Date: {this.props.date}</p>
            </section>
        );
    }
}

export default Transaction;