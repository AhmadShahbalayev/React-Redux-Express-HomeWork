import React from "react";

class Name extends React.Component {
    render() {
        return (
            <div>
                <p>Full name: {this.props.variable}</p>
            </div>
        );
    }
}

export default Name;
