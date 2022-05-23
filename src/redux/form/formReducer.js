import { nanoid } from 'nanoid';
import { addContact, delContact } from './formActions';
import { createReducer } from '@reduxjs/toolkit';

const initialContactsList = ()=>{
    const contactsInLocalStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsInLocalStorage);
    if (parsedContacts) {
        return parsedContacts;
      }  return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
};

const formReducer = createReducer(initialContactsList, {
  [addContact]: (state, action) => {
    const newState = [...state].concat(action.payload);
    action.payload.id = nanoid();
                localStorage.setItem('contacts', JSON.stringify(newState));
                return ( newState);
  },
  [delContact]: (state, action)=>{
          const neWState = [...state].filter(e => e.id !== action.payload.id);
            localStorage.setItem('contacts', JSON.stringify([...state].filter(e => e.id !== action.payload.id)));
          return (neWState);
  }
})

export default formReducer;

