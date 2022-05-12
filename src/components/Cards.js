import React, { Component } from 'react';

import Card from "./Card";
import styles from "./Cards.module.css";
import iphonex from "../images/s.jpeg";
import applewatch from "../images/applewatch7.jpeg";
import a from "../images/iphone13.jpeg";
import aa from "../images/ggg.jpeg";

class Cards extends Component {
    render() { 
        return (
            <div className={styles.container}>
                <Card className={styles.hh} image={iphonex} name="samsung ultra s22+" cost="500 $"/> 
                <Card className={styles.pp} image={applewatch} name="apple watch series 7" cost="175 $"/> 
                <Card className={styles.cc} image={a} name="iphone 13 pro max" cost="300 $"/> 
                <Card className={styles.tt} image={aa} name="xiaomi 12 pro" cost="250 $"/> 
            </div>
        );
    }
}
 
export default Cards;