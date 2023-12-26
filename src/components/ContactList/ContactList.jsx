import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';

import { getConstacts, getFilter } from '../../redux/selectors';

import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const unfilterContacts = useSelector(getConstacts);
  const filter = useSelector(getFilter);
  const contacts = unfilterContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} id={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            className={css.deleteBtn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
