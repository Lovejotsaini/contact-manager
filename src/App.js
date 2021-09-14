import React,{useState} from 'react'
import './App.css';
import Header from './component/Header'
import AddContact from './component/AddContact'
import ContactList from './component/ContactList'
import {Route} from 'react-router-dom'
import ContactDetails from './component/ContactDetails';

function App() {
const [contacts,setContacts]=useState([])
//console.log("con",contacts)

const newData=(data)=>{
  console.log("new",data)
  setContacts([...contacts,data])
}

// delete contact
const removeItemHandler=(id)=>{
  const removedata=contacts.filter((ele)=>{
    return ele.id!==id
  })
  setContacts(removedata)
}

  return (
    <div className="ui container">
      <Header/>
      <Route path="/add"  render={(props)=>{
        return <AddContact {...props} newData={newData}/>
      }}/>
      <Route path="/" exact={true} render={(props)=>{
      return <ContactList {...props} contacts={contacts} removeItemHandler={removeItemHandler}/>   
      }}/>
      <Route path="/contact/:id" render={(props)=>{
        return <ContactDetails {...props}/>
      }}/>
    </div>
  )
}

export default App;
