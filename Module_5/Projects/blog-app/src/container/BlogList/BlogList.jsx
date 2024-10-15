import styles from "./BlogList.module.css";
import { useContext} from "react";
import { BlogContext } from "../../context/BlogContext";

const BlogList = () => {
    const blogCtx = useContext(BlogContext);
    console.log(blogCtx);

    return (
        <>
            <h2>Blog List screen</h2>
        </>
    )
};

export default BlogList;