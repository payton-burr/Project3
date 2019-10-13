import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <header>
                <h4 className='header__logo'>Arcadia</h4>
                <nav>
                    <ul className='nav__links'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Games</a></li>
                        <li><a href='#'>My Games</a></li>
                    </ul>
                </nav>
                <a className='cta' href='#'><button>Contact</button></a>
            </header>
        );
    }
}

export default Nav;