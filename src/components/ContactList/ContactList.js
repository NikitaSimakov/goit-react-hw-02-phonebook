import PropTypes from 'prop-types';

const ContactList = ({ contactList }) => {
  console.log(contactList);
  return (
    <ul>
      {contactList &&
        contactList.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array,
};

export default ContactList;
