import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div>
                <p>Card: {this.props.variable}</p>
            </div>
        );
    }
}

export default Card;
