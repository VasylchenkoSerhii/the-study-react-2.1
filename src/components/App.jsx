import { Component } from "react";
import { nanoid } from "nanoid";
import { Box } from "./Box/Box";
import { Section } from "./Section/Section";
import { FormContacts } from "./FormContacts/FormContacts";
import { ContactsList } from "./ContactsList/ContactsList";




export class App extends Component  {
  state = {
    contacts: [],
  }

  addContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      };
    })
  }


  render() {
    const { addContact } = this;
    const { contacts } = this.state;
    return (
      <Box p={4}>
        <Section title="Contacts">
          <FormContacts addContact={addContact} />
          {contacts.length > 0 ? <ContactsList contacts={contacts} /> : null}
          
        </Section>
      </Box>
    )
    
  }
};
