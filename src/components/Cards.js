import React, { Component } from 'react';

import Card from "./Card";
import styles from "./Cards.module.css";
import iphonex from "../images/s.jpeg";
import applewatch from "../images/applewatch7.jpeg";
import a from "../images/iphone13.jpeg";
import aa from "../images/ggg.jpeg";

class Cards extends Component {

    constructor(){
        super()
        this.state = {
            phoneDate:[
                {id: 1, image: iphonex, name:"samsung ultra s22+", cost:"500 $"},
                {id: 2, image:applewatch, name:"apple watch series 7", cost:"175 $"},
                {id: 3, image:a, name:"iphone 13 pro max", cost:"300 $"},
                {id: 4, image:aa, name:"xiaomi 12 pro", cost:"250 $"},
            ]
        }
    }

    render() { 
        return (
            <div className={styles.container}>
                {this.state.phoneDate.map(phone => <Card 
                key={phone.id} 
                className={styles.pp} 
                image={phone.image} 
                name={phone.name} 
                cost={phone.cost}
                id={phone.id}
                />)}
            </div>
        );
    }
}
 
export default Cards; 