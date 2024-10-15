import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/create"}>Create Blog</Link>
            </div>
            <div>
                Hello, Divyansh
            </div>
        </div>
    )
};

export default Header;