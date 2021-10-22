import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/"><h3>KitchenVille</h3></Link>
            <ul>
                <Link to="/about"><li>About</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;