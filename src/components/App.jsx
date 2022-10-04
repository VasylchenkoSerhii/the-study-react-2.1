import { Component } from "react";
import { FormContacts } from "./FormContacts/FormContacts";
import { Section } from "./Section/Section";
import { Box } from "./Box/Box";


export class App extends Component  {
  state = {
    contacts: [],
    name: '',
  }


  render() {
    return (
      <Box p={4}>
        <Section title="Contacts">
          <FormContacts />
        </Section>
      </Box>
    )
    
  }
};
