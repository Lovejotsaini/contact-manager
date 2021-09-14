import React from "react";
import user from "../images/user.png"
import { Link } from "react-router-dom";

const ContactDetails = (props) => {
console.log(props)
const {name,email}=props.location.state.contact
    return (
        <div className="main">
            <div className="ui card centered">
                <img src={user} alt="user" />
                <div className="image">

                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="des">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetails