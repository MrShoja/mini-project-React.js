import React, { Component } from 'react';

import styles from "./Logo.module.css"
import apple from "../images/apple.png"
import xiaomi from "../images/xiaomi.png"
import samsung from "../images/samsung.png"



const Logo = () => {
    return (
        <div className={styles.container}>
            <h3>
                who Support Us? 
                </h3>
                    <div>
                        <img src={apple} />
                    <img src={samsung} />
                <img src={xiaomi} />
             </div>
        </div>
    )
}

export default Logo
