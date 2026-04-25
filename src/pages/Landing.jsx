import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heading}>Welcome to My Blog</h1>
            <Link to="/login">Login</Link>
        </section>
    );
}