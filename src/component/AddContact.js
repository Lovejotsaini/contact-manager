import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddContact=(props=>{
const {newData}=props
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [id ,setId]=useState(uuidv4())
const handleNameChange=(e)=>{
    setName(e.target.value)
}
const handleEmailChange=(e)=>{
    setEmail(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
        id:uuidv4(),
        name:name,
        email:email
    }
    newData(data)
    props.history.push("/")
}
    return(
        <div className="ui main">
            <h2>ADD Contact</h2>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field"> 
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange}/>
                </div>
                <div className="field"> 
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Email"  value={email} onChange={handleEmailChange}/>
                </div>
                <button className="ui button blue">ADD</button>
            </form>

        </div>
    )
})

export default AddContact