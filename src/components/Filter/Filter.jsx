import React from 'react';
import styles from '../Filter/filter.module.css';
import { connect } from 'react-redux';
import {changeFilterValue} from '../../redux/filter/filterAction.js'

const Filter = ({ filterValue, changeFilterValue}) => {


  const handleChange = event => {
    changeFilterValue(event.target.value)
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

const mapStateToProps = state => {
  return {
    filterValue: state.filterValue,
  }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      changeFilterValue: value=>{dispatch(changeFilterValue(value))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Filter);

