import { createContext, useContext, useState } from "react";
import Page from "./Page";
import { MyContext } from "../../App";

export const UserContext = createContext();

const Main = () => {
    const ctx = useContext(MyContext);
    // console.log(ctx);

    const [userData, setUserData] = useState({
        userName: "",
        address: ""
    });

    const onBtnClick = () => {
        ctx.setUserName("B");
    };

    return (
        <>
            <h2>Main</h2>
            <button onClick={onBtnClick}>Change Name</button>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Page />
            </UserContext.Provider>
        </>
    )
}

export default Main;