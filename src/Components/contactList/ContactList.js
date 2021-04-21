import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contact-operations';
import style from './ContactList.module.css';
import { getVisibleContacts } from '../../redux/contacts-selectors';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.itemContact}>
        {name}: {number}
        <button
          className={style.itemContactBtn}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

// const getVisibleContacts = (allContacts, filter) => {
//   const normolizedFilter = filter.toLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normolizedFilter),
//   );
// };

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
