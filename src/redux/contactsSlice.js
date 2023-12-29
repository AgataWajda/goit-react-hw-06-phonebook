import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contacts = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state, action.payload));
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            name,
            number,
          },
        };
      },
    },

    fetchContacts() {
      return JSON.parse(localStorage.getItem('contacts')) || [];
    },

    deleteContact(state, action) {
      const newState = state.filter(item => item.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, fetchContacts } =
  contactsSlice.actions;
