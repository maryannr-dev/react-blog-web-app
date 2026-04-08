import { useState } from 'react';
import styles from "./CommentsForm.module.css";
import { useEffect } from 'react';
import axios from 'axios';

export default function CommentsForm({postId}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({
        name: "",
        message: ""
    });
    
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                const commentsData = commentsRes.data;
                setComments(commentsData);
            } catch (error) {
                console.log("Error fetching comments: ", error);
            }
        }
        fetchComments();
    },[postId]);

    const handleNameChange = (event) => {
        setComment({
            name: event.target.value,
            message: comment.message
        });
    }

    const handleCommentChange = (event) => {
        setComment({
            name: comment.name,
            message: event.target.value
        });
    }

    const handleClick = () => {
        if (comment.name == "" || comment.message == "") {
            window.alert("Name or comment missing");
            return;
        }
        axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            name: comment.name,
            body: comment.message
        }).then(res => console.log(res));
        
    }

    return (
        <section className={styles.comments}>
            <form className={styles.form}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input className={styles.input1} type="text" id="name" value={comment.name} onChange={handleNameChange} />
                <label className={styles.label} htmlFor="comment">Comment</label>
                <textarea className={styles.input} id="comment" rows="5" value={comment.message} onChange={handleCommentChange}></textarea>
                <button className={styles.button} type="submit" onClick={handleClick}>Post Comment</button>
            </form>
            <div className={styles.sect}>
                {comments.length === 0 ? (
                    <p>No comments yet!</p>
                ) : (
                    comments.map((commentItem) => (
                        <article key={commentItem.id ?? `${commentItem.name}-${commentItem.body}`}>
                            <h4>{commentItem.name}</h4>
                            <p>{commentItem.body}</p>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
}
