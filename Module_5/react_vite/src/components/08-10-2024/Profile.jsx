import { useContext } from "react";

import { MyContext } from "../../App";
import { UserContext } from "./Main";

const Profile = () => {
    const ctx = useContext(MyContext);
    console.log(ctx);
    const userCtx = useContext(UserContext)
    // console.log(userCtx);

    return (
        <>
            <h4>Profile</h4>
            User Name : {ctx.state.userName}
        </>
    )
};

export default Profile;