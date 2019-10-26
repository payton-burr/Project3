import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <header className='header'>
                    <div className='header__text-box'>
                    <h1 className='heading-primary'>
                        <span className='heading-primary--main'>Arcadia</span>
                        <span className='heading-primary--sub u-margin-bottom-big'>Classic Arcade Games</span>
                        <a href='/dashboard' className='btn btn--white btn--animated'>Play now</a>
                    </h1>
                    </div>
                </header>
                <main>
                    <section className='section-about'>
                        <div className='row'>
                                <div className='u-center-text'>
                                <h2 className='heading-secondary u-margin-bottom-medium'>
                                Keep track of your favorites
                                </h2>
                                <a href='/register' className='btn btn--white btn--animated'>Register</a>
                                </div>
                                <div className='bg-video'>
                                    <video className='bg-video__content' autoPlay muted loop>
                                        <source src='/img/snake.mp4' type='video/mp4'></source>
                                        <source src='/img/snake.webm' type='video/webm'></source>
                                        Your browser is not supported
                                    </video>
                                </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        )
    }
}

export default Homepage;