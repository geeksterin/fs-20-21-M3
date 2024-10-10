import { useContext } from "react";
import Profile from "./Profile";
import { MyContext } from "../../App";

const Page = () => {
    const ctx = useContext(MyContext);

    return (
        <>
            <h3>Page</h3>
            <ul>
                {
                    ctx.todos.map((data) => <li key={data.id}>{data.title}</li>)
                }
            </ul>
            <Profile />
        </>
    )
};

export default Page;