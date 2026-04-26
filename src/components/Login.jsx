import styles from "./Login.module.css";
import { useContext, useState } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const { user, login, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!username || !password) {
            alert("Please fill in both fields");
            return;
        }

        const success = login(username, password);

        if (success) {
            navigate("/home");
        }
        else {
            alert("Incorrect username or password");
        }
    };
    return (
        <section className={styles.login}>
            <h1 className={styles.heading}>Login or Create Account</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="name">Username</label>
                <input className={styles.input} type="text" id="name" value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <label className={styles.label} htmlFor="pass">Password</label>
                <input className={styles.input} type="password" id="pass" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className={styles.button} type="submit">Start Reading</button>
            </form>

        </section>
    );
}