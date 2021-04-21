import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contact-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //   .catch(error => dispatch(fetchContactError(error)));
};

const addContact = contact => async dispatch => {
  const contacts = { contact };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess({ ...data }));
  } catch (error) {
    dispatch(addContactError(error));
  }

  // axios
  //   .post('/contacts', contact)
  //   .then(({ data }) => dispatch(addContactSuccess({ ...data })))
  //   .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }

  // axios
  //   .delete(`/contacts/${contactId}`)
  //   .then(() => dispatch(deleteContactSuccess(contactId)))
  //   .catch(error => dispatch(deleteContactError(error)));
};

export default { fetchContact, addContact, deleteContact };
