// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

// const addContact = data => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     ...data,
//   },
// });

// const addContact = createAction('contact/add', data => ({
//   payload: {
//     id: uuidv4(),
//     ...data,
//   },
// }));

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const deleteContact = createAction('contact/delete');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

// const filterContact = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export const filterContact = createAction('contact/changeFilter');
