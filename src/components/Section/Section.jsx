import { Box } from "components/Box/Box";
import { Title } from "./Section.styled";

export const Section = ({title, children}) => {
    return (
        <Box
            as="section"
            pb={5}
        >
            <Title>{title}</Title>
            {children}
        </Box>
    );
};