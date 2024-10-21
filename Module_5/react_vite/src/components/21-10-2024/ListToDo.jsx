import { useSelector } from "react-redux";

const ListToDo = () => {

    const todo = useSelector((state) => state.todoReducer);
    console.log(todo);

    return (
        <>
            <h1>List To Do</h1>
            <ul>
                {
                    todo.pendingToDo.map((data) => <li key={data.id}>{data.text}</li>)
                }
            </ul>
        </>
    )
};

export default ListToDo;