import React, { Component } from 'react';

import styles from "./Search.module.css"

class Search extends Component {
    render() { 
        return (
            <div className={styles.container}>
                 <blockquote>Search What you want</blockquote>
                 <input placeholder="Search ..." />
            </div>
        );
    }
}
 
export default Search;