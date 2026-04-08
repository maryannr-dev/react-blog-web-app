import styles from "./BlogCard.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function BlogCard({ post }) {
    const [author, setAuthor] = useState({});

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
                const authorData = authorRes.data;
                setAuthor(authorData);
            } catch (error) {
                console.error("Error fetching author: ", error);
            }
                
        }
        fetchAuthor();
    }, [post]);
    return (
        <div className={styles.card}>
            <h2>{post.title}</h2>
            <p className={styles.meta}>By {author.name}</p>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}>Read More</Link>
        </div>

    );
}
