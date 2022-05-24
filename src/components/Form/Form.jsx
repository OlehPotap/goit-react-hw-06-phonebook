import React from 'react';
import styles from '../Form/form.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/form/formActions';
import {useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';


const Form = () => {

  const contactList = useSelector(state => state.contacts)

  const dispatch = useDispatch()
  // console.log(addContact)
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const reset = () => {
   setState({
      name: '',
      number: '',
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value,  id: nanoid() });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contactList.every(el => {
        return el.name.toLowerCase() !== state.name.toLowerCase();
      })
    ) {
      dispatch(addContact(state));
      reset();
    
    return
   } else {
    Notiflix.Notify.warning(`Contact ${state.name} is already exist`);
   }
  
  };

  const { name, number } = state;
  return (
    <div className={styles.box}>
      <form
        className={styles.form}
        action="submit"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="number">Number</label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
