import { useContext } from "react";
import Main from "./Main";
import { MyContext } from "../../App";

const Dashboard = () => {
    const ctx = useContext(MyContext);
    // console.log(ctx);
    const getTodos = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        // console.log(data);
        ctx.setTodos(data);
    };

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={getTodos}>Get Todos</button>
            <Main />
        </>
    )
};

export default Dashboard;