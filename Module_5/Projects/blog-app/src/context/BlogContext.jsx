import { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {

    const [state, setState] = useState({
        user: {}
    });

    return (
        <>
            <BlogContext.Provider value={{ state, setState }}>
                {props.children}
            </BlogContext.Provider>
        </>
    )
};

export default BlogContextProvider;