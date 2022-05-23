import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from "./Card.module.css";

import up from "../images/icons8-up-50.png"
import down from "../images/icons8-down-50.png"


class Card extends Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    downH = () => {
        if(this.state.counter >= 1){
            this.setState(prevState =>({
                counter: prevState.counter - 1, 
            }))
        }
    }

    upH = () => {
        this.setState(prevState =>({
            counter: prevState.counter + 1, 
        }))
    }



    render() {         
        const {image ,name ,cost ,id} = this.props
        const {counter} = this.state
        return (
            <div className={styles.container}>
                <img src={image} alt="ultra" />
                <h3><Link to={`/products/${id}`}>{name}</Link></h3>
                <i>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $` : ""}</i>
                <br/>
                <br/>

                    <hr></hr>

            <div  className={styles.counter}>
                <img className={!counter ? styles.deactive : ""} src={down} onClick={this.downH}/>
                    <span>{counter}</span>
                <img src={up} onClick={this.upH}/>
            </div>
            </div>
        );
    }
}
 
export default Card;