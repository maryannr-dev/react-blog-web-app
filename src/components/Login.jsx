import styles from "./Login.module.css";


export default function Login() {
    return (
        <section className={styles.login}>
            <h1 className={styles.heading}>Login or Create Account</h1>
            <form className={styles.form}>
                <label className={styles.label} htmlFor="name">Username</label>
                <input className={styles.input} type="text" id="name" />
                <label className={styles.label} htmlFor="pass">Password</label>
                <input className={styles.input} type="password" id="pass" />
                <button className={styles.button} type="submit">Start Reading</button>
            </form>

        </section>
    );
}