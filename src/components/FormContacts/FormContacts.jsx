import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const shema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
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
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" />
                </label>
                <label>
                    Number
                    <Field type="tel" name="number" />
                    <ErrorMessage name="number" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};