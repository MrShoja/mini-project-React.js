import React, { Component } from 'react'
import axios from 'axios'
import styles from "./Products.module.css"

import Card from './Card'

class Products extends Component {

    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
        .then(response => this.setState({
            products: response.data,
        }))
    }


    render() {
        const {products} = this.state
        return (
            <div className={styles.container}>
                {
                    products.length ?
                 this.state.products.map(product => <Card key={product.title}  image={product.image} name={product.title} cost={`${product.price} $`}/>) : <h1 style={{color: "black"}}>Loading...</h1>
                }
                 {this.state.products.map(product => <Card key={product.title}  image={product.image} name={product.title} cost={`${product.price} $`}/>)}
                 {this.state.products.map(product => <Card key={product.title}  image={product.image} name={product.title} cost={`${product.price} $`}/>)}
            </div>
        )
    }
}

export default Products