import React from 'react';
import './ContactList.css';
const ContactList = (props) => {
  console.log(props.contacts); 
  return (
    <>
      <ul>
        {props.contacts.map((item, index) => (
          <div className="list-content">
            <li className={item.status ? 'completed' : null} key={item.id}>
              {/* <input type="checkbox" onChange={() => props.changeStatus(item.id)} /> */}
              {item.name} <br/> {item.surname} <br/> {item.number} <br/>
              <div className="buttons">
              <button className="delete-btn" onClick={() => props.handleDelete(item.id)}>Delete</button>
              <button className="edit-btn" onClick={() => props.handleEditIndex(index)}>Edit</button>
              </div>
            </li>
          </div>
        ))} 
      </ul>
    </>
  );
}; 

export default ContactList;
