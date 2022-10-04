import { Formik, Form, Field } from "formik";

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
        >
            <Form>
                <label>
                    Name
                    <Field type="text" name="name" />
                </label>
                <label>
                    Number
                    <Field type="tel" name="number" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};