import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

export const selectContacts = (state) => state.contacts.items;
