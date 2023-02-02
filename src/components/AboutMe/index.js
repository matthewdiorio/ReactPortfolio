import React from 'react';
import './index.css'

export const AboutMe = () => {
    return (
        <div className='aboutme py-5' id="about">
            <div className="container py-5">
                <div className="row">
                    
                    <div className="col-md-6 offset-md-3 copy">
                    <h2>About Me</h2>
                        <p>My name is Matthew but you can call me Matt. I'm originally from Central Florida but recently moved to North East Ohio.
                            Many people have asked me why but I like to keep the mystery alive. Some of my activites are cooking completely from scratch, watching reality TV and recently wood working. I have an Italian Greyhound and two Huskies. I've added photos below for your viewing pleasure. </p>
                    </div>
                    
                </div>
                <div className="row pets my-5 gy-4">
                    <div className="col-md-6 col-lg-4">
                        <div className="thumbnail">
                            <img src="/img/toby.jpg" alt="Toby the Italian Greyhound" />
                            <div className="middle">
                                <div className="text">Toby</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="thumbnail">
                            <img src="/img/ted_toby.jpg" alt="Ted the Husky and Toby the Italian Greyhound" />
                            <div className="middle">
                                <div className="text">Ted &#40;Left&#41; and Toby &#40;Right&#41;</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-0">
                        <div className="thumbnail">
                            <img src="/img/ted_tim.jpg" alt="Ted the Husky and Tim the Husky" />
                            <div className="middle">
                                <div className="text">Ted &#40;Top&#41; and Tim &#40;Bottom&#41;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}