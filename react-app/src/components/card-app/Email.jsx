import React from "react";

class Email extends React.Component {
    render() {
        return (
            <div>
                <p>Email: {this.props.variable}</p>
            </div>
        );
    }
}

export default Email;
