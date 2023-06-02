import React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { Formik } from "formik";
import { Form, FormField, Input, AddBtn } from './OrderForm.styled';
import { nanoid } from 'nanoid';
const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
};

export const OrderForm = ({ onSubmit, isLoaded }) => {
    const {
        init,
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        callbackName: "YOUR_CALLBACK_NAME",
    });
    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }) =>
            () => {
                setValue(description, false);
                clearSuggestions();
                getGeocode({ address: description }).then((results) => {
                    const { lat, lng } = getLatLng(results[0]);
                    console.log({ lat, lng })

                });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });
    React.useEffect(() => {
        if (isLoaded) {
            init()
        }
    }, [isLoaded, init])
    return (<Formik
        initialValues={initialValues}
        onSubmit={(values) => {

            onSubmit({
                id: nanoid(),
                ...values,
            })
        }}
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
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="phone"
                />
            </ FormField>
            <div ref={ref}>
                < FormField>Adress
                    <Input
                        value={value}
                        onChange={handleInput}
                        disabled={!ready}
                        placeholder="Where are you going?"
                    />
                </ FormField>
                {status === "OK" && <ul>{renderSuggestions()}</ul>}</div>
            <AddBtn type="submit">Add contacts</AddBtn>
        </Form>
    </Formik>)
}

