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
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            ...data,
          },
        };
      },
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact } = contactsSlice.actions;
