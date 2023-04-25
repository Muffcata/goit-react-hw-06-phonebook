import { React } from 'react';
import { getContacts, getFilterContacts } from 'redux/selectors';
import style from '../Contacts/Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const getVisibleContacts = (filterData, contacts) => {
  const normalizedFilter = filterData.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterData = useSelector(getFilterContacts);
  const visibleContacts = getVisibleContacts(filterData, contacts);
  const dispatch = useDispatch();

  return (
    <ul className={style.wrapper}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={style.list} key={id}>
          <div className={style.text}>
            <p className={style.name}>
              {name}: {number}
            </p>

            <button
              className={style.button}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
