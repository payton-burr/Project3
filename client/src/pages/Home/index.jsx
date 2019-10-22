import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Arcadia</span>
                    <span className='heading-primary--sub'>Classic Arcade Games</span>
                </h1>
                </div>
            </header>
        )
    }
}

export default Homepage;