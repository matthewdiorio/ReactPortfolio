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
                        <div class="animation">
                            <h2>&#60;/&#62;</h2>
                            <h1>
                                <span className="initial">Hello.&nbsp;</span>
                                <div class="reveal-container"><span className="reveal">My name is Matthew Diorio.</span>
                                </div>
                            </h1>
                            <div class="reveal-container"><p className="reveal-sub">A Full-Stack Developer</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}