import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <nav>
                        <h1 className="brand"><a href="#">Arcadia</a></h1>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Games</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Nav;