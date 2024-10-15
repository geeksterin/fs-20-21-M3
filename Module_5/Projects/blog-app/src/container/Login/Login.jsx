import styles from "./Login.module.css";

import { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { BlogContext } from "../../context/BlogContext";
import { auth, googleAuthProvider } from "../../config/firebase";

const Login = (props) => {

    const blogCtx = useContext(BlogContext);
    const navigate = useNavigate();

    const onGoogleLogin = async () => {
        try {
            const res = await signInWithPopup(auth, googleAuthProvider);
            // Login is successful
            blogCtx.setState({
                ...blogCtx.state,
                user: res.user
            });
            localStorage.setItem("user", JSON.stringify({ accessToken: res.user.stsTokenManager, ...res.user }))
            // Redirect the user to blog list screen
            navigate("/");

        } catch (err) {
            console.log(err);
            // Login is failed
        }
    };

    return (
        <div className={styles.container}>
            <h3>Login</h3>
            {props.children}
            <button onClick={onGoogleLogin}>Login with Google</button>
        </div>
    )
};

export default Login;