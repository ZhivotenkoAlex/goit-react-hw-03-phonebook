  
import React from 'react';
import s from './ContactList.module.css';



const ContactList = ({ contacts, onDeleteContact }) => (
  <ul >
    {contacts.map(({ id, name,phone }) => (
      <li className={ s.container} key={id} >
        <p className={ s.name}>{name}</p>
        <p className={ s.name}>{phone}</p>
        <button className={ s.button} type="button" onClick={() => onDeleteContact(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default ContactList;