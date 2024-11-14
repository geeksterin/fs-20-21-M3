import { createSlice } from "@reduxjs/toolkit";

/**
 * ADD_CONTACT
 * DELETE_CONTACT,
 * FAVOURITE_CONTACT
 */

const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        contactsList: [],
        editContactId: ""
    },
    reducers: {
        addContact(state, action) {
            state.contactsList.push(action.payload)
        },
        deleteContact(state, action) {

        },
        favContact(state, action) {

        },
        setEditContactId(state, action) {
            state.editContactId = action.payload
        },
        editContact(state, action) {
            // Logic to update the contact in array
            // Find the item in array with mobile no and update it
            const indexToEdit = state.contactsList.findIndex(data => data.mobile == state.editContactId);
            state.contactsList.splice(indexToEdit, 1, action.payload)
            state.editContactId = "";
        }
    }
});

export const { addContact, editContact, deleteContact, favContact, setEditContactId } = contactSlice.actions;
export default contactSlice.reducer;