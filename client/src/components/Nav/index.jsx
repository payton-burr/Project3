import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }
    render() {

        const loginLink = (
            <ul className='nav__links'>
                    <li>
                        <Link to='/login'><button>Login</button></Link>
                    </li>
                    <li>
                        <Link to='/register'><button>Register</button></Link>
                    </li>
                </ul>
        )
        const userLink = (
            <ul className='nav__links'>
                    <li>
                        <Link to='/profile'><button>Profile</button></Link>
                    </li>
                    <li>
                        <a href='' onClick={this.logOut.bind(this)}>Logout</a>
                    </li>
                </ul>
        )
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
                {localStorage.usertoken ? userLink : loginLink}
            </header>
        );
    }
}

export default Nav;