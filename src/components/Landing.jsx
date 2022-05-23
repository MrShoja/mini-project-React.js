import React, { Component } from 'react'

import Banner from './Banner';
import Cards from './Cards';
import Search from "./Search"
import Logo from './Logo';

class Landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Search />
                <Logo />
            </div>
        )
    }
}

export default Landing
