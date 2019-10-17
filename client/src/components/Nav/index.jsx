import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className='nav__links'>
                        <h1 className="brand"><a href="#">Arcadia</a></h1>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">All Games</a></li>
                        <li><a href="#">Classic</a></li>
                        <li><a href="#">Tower Defense</a></li>
                    </ul>
                </nav>
                <a href='#' className='profile'><button>Profile</button></a>
            </header>
        );
    }
}

export default Nav;