import { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../slices/toDoSlice";

const CreateToDo = () => {

    const [todoInput, setTodoInput] = useState("");
    const dispatch = useDispatch();

    const onInputChange = e => {
        setTodoInput(e.target.value)
    };

    const onFormSubmit = e => {
        e.preventDefault();
        const todo = {
            id: 1, // Replace with unique id
            text: todoInput
        }
        console.log(todo)
        // Dispatch the action
        dispatch(addItem(todo));
    }

    return (
        <>
            <h1>Create ToDo</h1>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="todoInput">Enter your todo item</label>
                    <input onChange={onInputChange} type="text" id="todoInput" />
                </div>
                <button type="submit">Add ToDo</button>
            </form>
        </>
    )
};

export default CreateToDo;