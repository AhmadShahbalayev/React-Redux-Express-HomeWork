import React from "react";
import PropTypes from "prop-types";

class MyBankCard extends React.Component {
    static propTypes = {
        data: PropTypes.object
    };
    static defaultProps = {
        data: {
            fname: "Not specified",
            number: "Not specified",
            expireDate: "Not specified",
            bankName: "Not specified",
            type: "Not specified",
            pin: "Not specified",
            cvv: "Not specified"
        }
    };
    render() {
        const {
            fname,
            number,
            expireDate,
            bankName,
            type,
            pin,
            cvv
        } = this.props.data;
        return (
            <div>
                <p>{fname}</p>
                <p>{number}</p>
                <p>{expireDate}</p>
                <p>{bankName}</p>
                <p>{type}</p>
                <p>{pin}</p>
                <p>{cvv}</p>
            </div>
        );
    }
}

export default MyBankCard;
