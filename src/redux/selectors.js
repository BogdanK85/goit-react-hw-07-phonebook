import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactData.contacts.items;

export const selectFilter = state => state.contactData.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
