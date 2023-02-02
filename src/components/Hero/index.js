import React from 'react';
import './index.css'

export const Hero = () => {
    return (
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 image">
                        <img src="/img/profile.jpg" alt="Profile of Matthew Diorio" />
                    </div>
                    <div className="col-md-7 content">
                        <h1 className="typed">Hello, my name is Matthew Diorio.</h1>
                        <p>A Full-Stack Developer</p>
        
                    </div>
                </div>
            </div>
        </section>
    )

}