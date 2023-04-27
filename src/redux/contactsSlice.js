import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('CONTACTS'));

const setLocalStorage = contacts => {
  localStorage.setItem('CONTACTS', JSON.stringify(contacts));
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const isContactExist = state.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (isContactExist) {
          alert(`User with name ${action.payload.name} is already in contacts`);
          return;
        }
        const isNumberExist = state.find(
          contact =>
            contact.number.replace(/\D/g, '') ===
            action.payload.number.replace(/\D/g, '')
        );
        if (isNumberExist) {
          alert(`Number ${action.payload.number} is already in contacts`);
          return;
        }

        state.push(action.payload);
        setLocalStorage([...state]);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      setLocalStorage([...state]);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
