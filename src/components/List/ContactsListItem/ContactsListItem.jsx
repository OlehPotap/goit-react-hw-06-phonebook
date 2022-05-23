import styles from '../ContactsListItem/contacts-list-item.module.css';
import { connect } from 'react-redux';
import { delContact } from 'redux/form/formActions';
import { useSelector, useDispatch } from 'react-redux';

const ContactsList = () => {
  // const deleteItem = event =>{console.log(event)}

  const filterValue = useSelector(state => state.filterValue)
  const contactsNew = useSelector(state => state.contacts)
  const dispatch = useDispatch()

  if (filterValue === '' || filterValue === undefined) {
    return contactsNew.map(el => {
      return (
        <li key={el.id} className={styles.item}>
          <p className={styles.text}>
            {el.name} {el.number}
          </p>
          <button
            onClick={event => {
              dispatch(delContact(el));
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
                dispatch(delContact(el));
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
