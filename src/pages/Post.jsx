
import { useParams } from "react-router-dom";
import CommentsForm from "../components/CommentsForm";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Post.module.css";
import axios from "axios";

export default function Post() {
    const { id } = useParams();
    const [ post, setPost ] = useState({});
    const [author, setAuthor] = useState({});

    useEffect(() => {
        const fetchPostAndAuthor = async () => {
            try {
                const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const postData = postRes.data;
                setPost(postData);

                const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
                const authorData = authorRes.data;
                setAuthor(authorData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchPostAndAuthor();
    },[id]);

    

    return (
        <section>
            <section className={styles.post}>
                <h2 className={styles.heading}>{post.title}</h2>
                <p className={styles.authordate}>By {author.name}</p>
                <p className={styles.content}>{post.body}</p>
                
            </section>
            <CommentsForm postId={id}  />
        </section>
    );
}
