import { useContext, useEffect, useState } from "react";
import { getDocs, deleteDoc, collection, doc } from "firebase/firestore";

import { BlogContext } from "../../context/BlogContext";

import styles from "./BlogList.module.css";
import { firestore } from "../../config/firebase";

const BlogList = () => {
    const blogCtx = useContext(BlogContext);
    console.log(blogCtx);

    const blogCollectionRef = collection(firestore, "blogs");
    const [blogList, setBlogList] = useState([]);


    const fetchDocs = async () => {
        try {
            const blogsList = await getDocs(blogCollectionRef);
            // console.log(blogsList.docs)
            const list = blogsList.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            // console.log(list);
            setBlogList(list);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchDocs();
    }, []);

    const onBlogEdit = (data) => {
        console.log(data)
        // Set this data in context & route the user to create screen
    };

    const onBlogDelete = async (id) => {
        try {
            console.log(id);
            const docRef = doc(firestore, "blogs", id);
            deleteDoc(docRef);
            alert("Blog deleted successfully");
            fetchDocs();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h2>Blogs</h2>
            {
                blogList.map(data => <div key={data.id}>
                    <h5>{data.title}</h5>
                    <p>{data.body}</p>
                    <button onClick={() => onBlogEdit(data)}>Edit</button>
                    <button onClick={() => onBlogDelete(data.id)}>Delete</button>
                </div>)
            }
        </>
    )
};

export default BlogList;