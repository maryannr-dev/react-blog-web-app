import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Mary Rollins Blog</h1>
      <ul className={styles.links}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
