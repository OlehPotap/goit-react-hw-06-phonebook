import ContactsListItem from './ContactsListItem';
import PropTypes from 'prop-types';

const List = () => {
  return (
    <ol className="list">
      <ContactsListItem />
    </ol>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),

  filteredData: PropTypes.string,
  onClick: PropTypes.func,
};

export default List;
