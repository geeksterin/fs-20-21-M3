import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addContact, editContact } from "../../slices/contactsSlice";

const AddContactForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const [contact, setContact] = useState({
        name: "",
        surname: "",
        mobile: "", // Unique ID
        isFav: false
    });

    useEffect(() => {
        if (contacts.editContactId) {
            // Find the edit contact details
            const contactToEdit = contacts.contactsList.find(data => data.mobile == contacts.editContactId);
            if (contactToEdit) {
                // Perfill in the form 
                setContact(contactToEdit)
            }
        }
    }, [contacts.editContactId]);



    const onInputChange = e => {
        setContact({
            ...contact,
            [e.target.id]: e.target.value
        })
    };

    const onFormSubmit = e => {
        e.preventDefault();
        // Todo : Add data validation

        const contactPayload = {
            name: contact.name,
            surname: contact.surname,
            mobile: contact.mobile, // Unique ID
            isFav: false
        }

        if (contacts.editContactId) {
            // Edit mode
            dispatch(editContact(contactPayload))
        } else {
            // Add mode
            // Todo : Logic to save the data
            // Todo : Instead of adding data locally to redux, call an API and save the data to firebase
            dispatch(addContact(contactPayload));
        }


        // Clear the input field
        setContact({
            name: "",
            surname: "",
            mobile: "",
            isFav: false
        })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <div>
                    <input value={contact.name} onChange={onInputChange} type="text" id="name" placeholder="Name" />
                </div>
                <div>
                    <input value={contact.surname} onChange={onInputChange} type="text" id="surname" placeholder="Surname" />
                </div>
            </div>
            <div>
                <input value={contact.mobile} onChange={onInputChange} type="text" id="mobile" placeholder="1234567890" />
            </div>
            <div>
                <button type="submit"> {contacts.editContactId ? "Edit" : "Add"}</button>
            </div>
        </form>
    )
}

export default AddContactForm;