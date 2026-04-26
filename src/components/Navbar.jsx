import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    logout();
    navigate("/");
    
  }
    return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Mary Rollins Blog</h1>
      <ul className={styles.links}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
       {user && <button onClick={handleClick}>Logout</button>}
    </nav>
  );
}
