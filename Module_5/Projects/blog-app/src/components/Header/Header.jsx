import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

const Header = () => {

    const blogCtx = useContext(BlogContext);
    console.log(blogCtx.state.user.displayName);

    return (
        <div className={styles.container}>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/create"}>Create Blog</Link>
            </div>
            <div>
                Hello, {blogCtx.state.user.displayName}
            </div>
        </div>
    )
};

export default Header;