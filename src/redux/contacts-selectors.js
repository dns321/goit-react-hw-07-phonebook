import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

// export const getVisibleContacts = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normolizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normolizedFilter),
//   );
// };

// export const getContactName = state => {
//   const contacts = getAllContacts(state);

//   return contacts.map(({ name }) => name);
// };

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normolizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter),
    );
  },
);

export const getContactName = createSelector([getAllContacts], contacts => {
  return contacts.map(({ name }) => name);
});
