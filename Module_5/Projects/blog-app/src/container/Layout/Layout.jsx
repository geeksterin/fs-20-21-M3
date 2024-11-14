import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { BlogContext } from "../../context/BlogContext";

const Layout = () => {
    const navigate = useNavigate();
    const blogCtx = useContext(BlogContext);

    useEffect(() => {
        // Check if the access token is available in localstorage i.e already logged in case
        const user = localStorage.getItem("user");
        const accessToken = JSON.parse(user)?.accessToken;

        if (!blogCtx.state.user.accessToken && !accessToken) {
            // User is not logged in
            navigate("/login");
        }
        
    }, []);

    return (
        <div>
            <Header />
            {/* Content */}
            <Outlet />
            <Footer />
        </div>
    )
};

export default Layout;