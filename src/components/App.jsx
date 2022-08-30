import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { filterContacts } from 'helpers/filterContacts';
import { Box } from './Box/Box';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  handleAddContact = contact => {
    if (this.state.contacts.some(cont => cont.name === contact.name)) {
      alert('Contact alredy exist');
      return;
    }
    this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
  };

  setFilterValue = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = filterContacts(
      this.state.contacts,
      this.state.filter
    );
    return (
      <>
        <Box p={20}>
          <Box as="h2">Phonebook</Box>
          <ContactForm onAddContact={this.handleAddContact} />
        </Box>
        <Box p={20}>
          <h2>Contacts</h2>
          <Filter handleSetFilterValue={this.setFilterValue} />
          <ContactList
            contacts={filteredContacts}
            handleDeleteContact={this.handleDeleteContact}
          />
        </Box>
      </>
    );
  }
}
