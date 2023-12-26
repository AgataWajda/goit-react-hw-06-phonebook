import { useDispatch } from 'react-redux';

import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';
export const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    dispatch(addContact(name, number));

    event.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label>
        <h3 className={css.subtitle}>Name</h3>
        <input
          type="text"
          name="name"
          className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <h3 className={css.subtitle}>Number</h3>
        <input
          type="tel"
          name="number"
          className={css.input}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};
