import styles from '../ContactsListItem/contacts-list-item.module.css';
import { connect } from 'react-redux';
import { delContact } from 'redux/form/formActions';

const ContactsList = ({ filterValue, contactsNew, delContact } = {}) => {
  // const deleteItem = event =>{console.log(event)}

  if (filterValue === '' || filterValue === undefined) {
    return contactsNew.map(el => {
      return (
        <li key={el.id} className={styles.item}>
          <p className={styles.text}>
            {el.name} {el.number}
          </p>
          <button
            onClick={event => {
              delContact(el);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }  else {
    return contactsNew
      .filter(el => {
        return el.name.toLowerCase().includes(filterValue.toLowerCase());
      })
      .map(el => {
        return (
          <li key={el.id} className={styles.item}>
            <p className={styles.text}>
              {el.name} {el.number}
            </p>
            <button
              onClick={event => {
                delContact(el);
              }}
            >
              Delete
            </button>
          </li>
        );
      });
  }
};

const mapStateToProps = state => {
  return {
    filterValue: state.filterValue,
    contactsNew: state.contacts
  }
  }

  const mapDispatchToProps = dispatch => {
    return {
      delContact: el=>{dispatch(delContact(el))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
