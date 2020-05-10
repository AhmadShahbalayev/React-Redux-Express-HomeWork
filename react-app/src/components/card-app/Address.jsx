import React from "react";

class Address extends React.Component {
    render() {
        return (
            <div>
                <p>Address: {this.props.variable}</p>
            </div>
        );
    }
}

export default Address;
