import React, { Component } from 'react';

import styles from "./Card.module.css";


class Card extends Component {
    render() { 
        const {image ,name ,cost} = this.props
        return (
            <div className={styles.container}>
                <img src={image} alt="ultra" />
                <h3>{name}</h3>
                <i>{cost}</i>
            </div>
        );
    }
}
 
export default Card;