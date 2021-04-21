import React from 'react';
import './App.scss';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Section from './section/Section';

const App = () => {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
