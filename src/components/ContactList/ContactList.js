import PropTypes from 'prop-types';

const ContactList = ({ contactList, contactListRender }) => {
  console.log(contactListRender);
  return (
    <ul>
      {contactListRender &&
        contactListRender.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button">Delete</button>
          </li>
        ))}
    </ul>
    // <ul>
    //   {contactList &&
    //     contactList.map(contact => (
    //       <li key={contact.id}>
    //         {contact.name}: {contact.number}
    //       </li>
    //     ))}
    // </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array,
};

export default ContactList;
