import React from 'react';
import styles from '../Filter/filter.module.css';
import {changeFilterValue} from '../../redux/filter/filterAction.js';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {

  const filterValue = useSelector(state => state.filterValue)
  const dispatch = useDispatch()


  const handleChange = event => {
    dispatch(changeFilterValue(event.target.value))
  }

    return (
      <div className={styles.box}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          className={styles.filter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filterValue}
          onChange={handleChange}
        />
      </div>
    );
}
  export default Filter;

