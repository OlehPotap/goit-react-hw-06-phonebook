import Section from './Section';
import Form from './Form';
import Filter from './Filter';
import List from './List';
import { connect } from 'react-redux';


const App = ({contactsNew, filterValue}) => {

  return (
    <Section>
      <h1 className="add-contact-box__heading">Phonebook</h1>
      <Form />
      <h2 className="display-cotnact-box__heading">Contacts</h2>
      <Filter />
      <List contacts={contactsNew} filteredData={filterValue} onClick={()=>{}} />
    </Section>
  );
};

const mapStateToProps = state => {
return {
  filterValue: state.filterValue,
  contactsNew: state.contacts
}
}

// const mapDispatchToProps = dispath => {
//   return {
//     changeFilterValue: ()=>{dispath(actions.changeFilterValue('R'))}
//   }
// }

export default connect(mapStateToProps)(App);