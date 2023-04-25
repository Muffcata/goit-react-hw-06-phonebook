import { useDispatch } from 'react-redux';
import React from 'react';
import { addContact } from 'redux/contactsSlice';
import style from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <div className={style.form_wrapper}>
      <form onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="name">
          Name
          <input
            className={style.input_name}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={style.label} htmlFor="number">
          Number
          <input
            className={style.input_number}
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={style.button} type="submit">
            Add Contact
          </button>
        </label>
      </form>
    </div>
  );
};

export default ContactForm;
