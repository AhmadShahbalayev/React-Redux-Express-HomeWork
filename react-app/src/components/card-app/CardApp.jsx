import React from "react";
import Profile from "./Profile";
import MyBankCard from "./MyBankCard";

class CardApp extends React.Component {
    render() {
        const obj = {
            name: "Ahmad Shahbalayev",
            email: "ahmedsahbalayev@gmail.com",
            card: "Visa",
            address: "B.Nuriyev 39"
        };
        const card = {
            fname: "AHMAD SHAHBALAYEV",
            number: "3012 1997 1230 9719",
            expireDate: "02/22",
            bankName: "PASHA Bank",
            type: "debit",
            pin: 5543,
            cvv: 524
        };
        return (
            <div>
                <Profile data={{ ...obj }} />
                <hr />
                <MyBankCard data={{ ...card }} />
            </div>
        );
    }
}

export default CardApp;
