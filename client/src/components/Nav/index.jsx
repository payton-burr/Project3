import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <header className='nav-header'>
                <nav>
                    <ul className='nav__links'>
                        <h1 className="brand">
                            <Link to='/'>Arcadia</Link>
                        </h1>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>All Games</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Nav;