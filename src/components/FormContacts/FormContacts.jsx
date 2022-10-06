import { Formik, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import { Input } from "./FormContacts.styled";

const shema = yup.object().shape({
    name: yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/ , 'Name may contain only letters, apostrophe, dash and spaces')
        .required("name is required"),
    number: yup.string()
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/ , 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
        .required("name is required"),
});

export const FormContacts = ({addContact}) => {
    const initialValues = {
        name: "",
        number: "",
    };
    
    const handleSubmit = (values, {resetForm}) => {
        addContact(values)
        resetForm()
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={shema}
        >
            <Form>
                <label>
                    Name
                    <Input type="text" name="name" />
                    <ErrorMessage component="div" name="name" />
                </label>
                <label>
                    Number
                    <Input type="tel" name="number" />
                    <ErrorMessage component="div" name="number" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};