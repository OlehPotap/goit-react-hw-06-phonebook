import { nanoid } from 'nanoid';

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

const formReducer = (state = initialContactsList(), {type, payload}) => {
    switch(type) {

        case 'form/contactToAddObj':
            const newState = [...state].concat(payload);
            payload.id = nanoid();
            localStorage.setItem('contacts', JSON.stringify(newState));
            return ( newState);

        case 'form/contactToDeleteObj':
          const neWState = [...state].filter(e => e.id !== payload.id);
            localStorage.setItem('contacts', JSON.stringify([...state].filter(e => e.id !== payload.id)));
          return (neWState);
            

        default :return state;
};
}

export default formReducer;

