import React from 'react'
import user from '../images/user.png'
import { Link } from 'react-router-dom'

const ContactCard=(props)=>{
const {id,name,email, removeItemHandler}=props
//console.log("id is",id)
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
            <Link to={{pathname:`/contact/${id}`,state:{contact:{id:id,name:name,email:email}}}}>
            <div className="header">{name}</div>
            <div>{email}</div>
            </Link>
        </div>
        <i className="trash alternate outline icon " style={{color:"red",marginTop:"7px"}}  onClick={()=>{
            removeItemHandler(id)
        }}></i>
        <i class="edit icon" style={{color:"blue",marginTop:"7px"}}></i>
        
    </div>
    )
}

export default ContactCard