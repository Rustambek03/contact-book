import React, { useState } from 'react';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';
import './App.css'

function App() {
  let [contacts, setContacts] = useState([]);
  let [editItem, setEditItem] = useState([]);
  let [isEdit, setIsEdit] = useState(false)
  let [isOpen, setIsOpen] = useState(true)

  function getContact(contact) { 
    let newContacts = [...contacts]; 
    newContacts.push(contact);
    setContacts(newContacts);
  }

  function changeStatus(id) {
    let newContacts = contacts.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setContacts(newContacts);
  }

  function handleDelete(id) {
    let newContacts = contacts.filter(item => {
      return item.id !== id
    })
    console.log(newContacts)
    setContacts(newContacts)
  }

  function handleEditIndex(index){
    setIsOpen(false)
    setIsEdit(true)
    setEditItem(contacts[index])
  }

  function handleSaveContact(newContact){
    let newContacts = contacts.map(item => {
      if(item.id === newContact.id){
        return newContact
      }
      return item
    })
    setContacts(newContacts)
    setIsOpen(true)
    setIsEdit(false)
  }

  function cancelButton(){
    setIsOpen(true)
    setIsEdit(false)
  }
 
  return (
    <div className="app">
      {isOpen ? <AddContact getContact={getContact} /> : null}
      {isOpen ? <ContactList contacts={contacts} changeStatus={changeStatus} handleDelete={handleDelete} handleEditIndex={handleEditIndex}/> : null}
      {isEdit ? <EditContact editItem={editItem} handleSaveContact={handleSaveContact} cancelButton={cancelButton} /> : null}
    </div>
  );
}

export default App;
