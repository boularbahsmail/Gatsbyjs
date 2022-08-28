import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <header>
            <nav>
                <h1>Ismailium</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;