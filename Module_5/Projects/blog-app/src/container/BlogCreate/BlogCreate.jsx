import { useEffect, useState } from "react";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { firestore } from "../../config/firebase";

import styles from "./BlogCreate.module.css";

const BlogCreate = () => {

    const navigate = useNavigate();

    const blogCollectionRef = collection(firestore, "blogs");

    const [blog, setBlog] = useState({
        title: "",
        body: ""
    });

    useEffect(() => {
        // Todo : Get the data from context (if available) & decide wether to edit or create the blog
    },[]);

    const onInputChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setBlog({
            ...blog,
            [id]: value
        });
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted")
        // Todo : Save the data to db
        try {
            await addDoc(blogCollectionRef, blog)
            alert("Blog created successfully")
            navigate("/");
        } catch (err) {
            console.log("ERROR", err)
            alert("Error creating blog")
        }
    };

    return (
        <div className={styles.container}>
            <h3>Create a new blog</h3>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="title">Blog Title</label>
                    <input onChange={onInputChange} id="title" type="text" />
                </div>

                <div>
                    <label htmlFor="body">Blog Body</label>
                    <textarea onChange={onInputChange} id="body" />
                </div>
                <button type="submit">Create Blog</button>
            </form>
        </div>
    )
};

export default BlogCreate;