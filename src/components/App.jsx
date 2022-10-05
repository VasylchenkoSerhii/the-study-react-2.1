import { Component } from "react";
import { nanoid } from "nanoid";
import { Box } from "./Box/Box";
import { Section } from "./Section/Section";
import { FormContacts } from "./FormContacts/FormContacts";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";




export class App extends Component  {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  }

  addContact = contact => {
    if (this.isDublicate) {
      alert('this name or number is already added to contacts');
      return;
    }
    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      };
    })
  };

  removeContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts
      };
    });
  };

  getFilteredContacts() {

    if (!this.state.filter) {
      return this.state.contacts;
    };

    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const filteredContacts = this.state.contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });

    return filteredContacts;
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  isDublicate({name, number}) {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === name
      || item.number === number);
    return result;
  };


  render() {
    const { addContact, removeContact, handleChange } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <Box p={4}>
        <Section title="Contacts">
          <FormContacts addContact={addContact} />
          <Filter filter={filter} onChange={handleChange} />
          {contacts.length > 0
            ? <ContactsList
                contacts={contacts}
                removeContact={removeContact}
              />
            : null}
        </Section>
      </Box>
    )
    
  }
};
