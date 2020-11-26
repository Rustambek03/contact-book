import React, { useState } from 'react';
import './AddContact.css';


const AddContact = (props) => {
  let [name, setName] = useState(''); 
  let [surname, setSurname] = useState('');
  let [number, setNumber] = useState('');

  function handleClick() {
    let newObj = {
      name: name,
      surname: surname,
      number: number,
      id: Date.now(),
      status: false,
    };
    props.getContact(newObj);
    setName('');
    setSurname('');
    setNumber('');
  }

  return (
    <div className="add-content">
      <h1>Contact Book</h1>
      <input className="add-input" value={name} type="text" onChange={(event) => {return setName(event.target.value)}} placeholder="Name" />
      <input className="add-input" value={surname} type="text" onChange={(event) => {return setSurname(event.target.value)}} placeholder="Surname" ></input>
      <input className="add-input" value={number} type="text" onChange={(event) => {return setNumber(event.target.value)}} placeholder="Number" ></input>
      <button className="add-btn" onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddContact;
