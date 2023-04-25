import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  useEffect(() => {
    if (contacts !== []) {
      localStorage.setItem('CONTACTS', JSON.stringify(contacts));
    }
  }, [contacts]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts:</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default App;
