import React from 'react'
import banner from "../images/baner.jpeg"
import styles from "./Banner.moudule.css"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner"/>
        <div className={styles.textContainer}>
                <h1 className={styles.h1}>
                        k&k
                </h1>
                <p className={styles.p}>
                    We're learning <span>React.js</span>
                </p>
            </div>
        </div>
    )
}

export default Banner
