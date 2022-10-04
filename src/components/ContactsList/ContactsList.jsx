import { Box } from "components/Box/Box";

export const ContactsList = ({ contacts }) => {
    const markup = contacts.map(({ id, name, number }) => (
        <li key={id}>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
        </li>));
    return (
        <Box as="ul">{markup}</Box>
        
    );
};
