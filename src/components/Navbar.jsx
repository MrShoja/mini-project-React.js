import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import logo from "../images/kk.jpeg"


function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li> <Link to="/">Home Page</Link></li>
                    <li> <Link to="/Products">Products</Link></li>
                    <li> <Link to="/Products/us">About Us</Link></li>
                </ul>
            </div>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="Logo"/>
            </div>
        </header>
    )
}

export default Navbar
