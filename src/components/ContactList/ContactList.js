import PropTypes from 'prop-types';

const ContactList = ({ contactListRender, deleteContactHandler }) => {
  return (
    <ul>
      {contactListRender &&
        contactListRender.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              id={contact.id}
              onClick={deleteContactHandler}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactListRender: PropTypes.array.isRequired,
  deleteContactHandler: PropTypes.func.isRequired,
};

export default ContactList;
