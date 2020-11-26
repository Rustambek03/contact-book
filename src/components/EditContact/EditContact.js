import React, { useState } from 'react';
import './EditContact.css'

const EditContact = (props) => {

    let [editItem, setEditItem] = useState(props.editItem)

    return (
        <div className="edit-content">
            <h1>Change contact</h1>
            <input className="edit-inp" value={editItem.name} onChange={(e) => {
                let newObj = {...editItem}
                newObj.name = e.target.value
                setEditItem(newObj)
            }} type="text"/>
            <input className="edit-inp" value={editItem.surname} onChange={(e) => {
                let newObj = {...editItem}
                newObj.surname = e.target.value
                setEditItem(newObj)
            }} type="text"/>
            <input className="edit-inp" value={editItem.number} onChange={(e) => {
                let newObj = {...editItem}
                newObj.number = e.target.value
                setEditItem(newObj)
            }} type="text"/>
            <button className="save-btn" onClick={() => props.handleSaveContact(editItem)} >Save</button>
            <button className="cancel-btn" onClick={() => props.cancelButton()} >Cancel</button>
        </div>
    );
};

export default EditContact;