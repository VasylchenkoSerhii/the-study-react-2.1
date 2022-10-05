import { Box } from "components/Box/Box";

export const ContactsList = ({ contacts, removeContact }) => {
    const markup = contacts.map(({ id, name, number }) => (
        <li key={id}>
            <p>{name}: {number} <span onClick={()=> removeContact(id)}>x</span></p>
        </li>));
    return (
        <Box as="ul">{markup}</Box>
        
    );
};
