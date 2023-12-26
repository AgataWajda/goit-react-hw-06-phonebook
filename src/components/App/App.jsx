import { useState, useEffect } from 'react';
import css from './App.module.css';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(localContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteContact = id =>
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );

  return (
    <div>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <ContactFilter filter={filter} getFilter={addFilter}></ContactFilter>
      <ContactList
        contacts={filterContacts}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
};
