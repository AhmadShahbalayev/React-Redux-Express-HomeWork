import React from "react";
import PropTypes from "prop-types";
import Name from "./Name";
import Email from "./Email";
import Card from "./Card";
import Address from "./Address";

class Profile extends React.Component {
    static propTypes = {
        data: PropTypes.object
    };
    static defaultProps = {
        data: {
            name: "Not specified",
            email: "Not specified",
            card: "Not specified",
            address: "Not specified"
        }
    };
    render() {
        const { name, email, card, address } = this.props.data;
        return (
            <div>
                <Name variable={name} />
                <Email variable={email} />
                <Card variable={card} />
                <Address variable={address} />
            </div>
        );
    }
}

export default Profile;
