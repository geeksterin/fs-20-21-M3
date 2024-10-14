import { signInWithPopup, signInWithCredential } from "firebase/auth";
import { auth, googleAuthProvider } from "../../config/firebase";

const Auth = () => {

    const onLogin = async () => {
        // Open the google signin popup
        try {
            // signInWithCredential(auth,<credentials-object></credentials-object>)
            const data = await signInWithPopup(auth, googleAuthProvider)
            console.log(data.user)
            // Todo : Write your own logic to save the user details
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
            <h1>Authentication - firebase</h1>
            <button onClick={onLogin}>Login with Google</button>
        </>
    )
};

export default Auth;