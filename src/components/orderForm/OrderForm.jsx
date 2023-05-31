import { Formik } from "formik";
import { Form, FormField, Input } from './OrderForm.styled';
const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
};

export const OrderForm = () => {
    return (<Formik
        initialValues={initialValues}
    >
        <Form>
            < FormField>Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Name"
                /></ FormField>
            < FormField>Email
                <Input
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                    title="Email contain @"
                    required
                    placeholder="email"
                />
            </ FormField>
            < FormField>Phone
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Number"
                />
            </ FormField>
            < FormField>Adress
                <Input
                    type="adress"
                    name="adress"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                    title="Adress must be comtain the city and street"
                    required
                    placeholder="adress"
                />
            </ FormField>
        </Form>
    </Formik>)
}