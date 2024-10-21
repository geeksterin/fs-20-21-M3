import { createSlice } from "@reduxjs/toolkit";

// ADD_ITEM,
// REMOVE_ITEM,
// EDIT_ITEM

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        pendingToDo: [],
        completedToDo: [],
    },
    reducers: {
        // Multiple actions
        addItem(state, action) {
            // Logic to add item
            state.pendingToDo.push(action.payload);
        },
        removeItem(state, action) {
            // Logic to remove item
        },
        editItem(state, action) {
            // Logic to edit item
        }
    }
});

// console.log(todoSlice);

export const { addItem, removeItem, editItem } = todoSlice.actions;

export default todoSlice.reducer;