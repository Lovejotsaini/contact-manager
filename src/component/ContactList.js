import React from 'react'
import ContactCard from './ContactCard'
import user from '../images/user.png'
import { Link } from 'react-router-dom'

const ContactList = (props) => {
    const { contacts, removeItemHandler } = props
    //console.log("dataa", contacts)
    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add">
            <button className="ui button blue right " >ADD Contact</button>
            </Link>
        <div className="ui celled list">
            {contacts.map((contact) => {
                return (
                   <ContactCard key={contact.id} id={contact.id} name={contact.name} email={contact.email}  removeItemHandler={ removeItemHandler}/>
                )
            })}
        </div>
        </div>
    )
}

export default ContactList