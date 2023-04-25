import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors/getContacts';
import { useEffect } from 'react';

export const contacts = useSelector(getContacts);
useEffect(() => {
  if (contacts !== []) {
    localStorage.setItem('CONTACTS', JSON.stringify(contacts));
  }
}, [contacts]);
