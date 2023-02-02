import React from 'react';
import './index.css'

export const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="links">
                    <ul className="social-links">
                        <li><a href="https://www.linkedin.com/in/matthewdiorio" aria-label="linked-in">linkedin</a></li>
                        <li><a href="https://www.github.com/matthewdiorio" aria-label="Github">github</a></li>
                    </ul>
                    <ul className="nav">
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#examples">Designs</a> </li>
                        <li><a href="#about">About</a> </li>
                    </ul>
                </div>
            </div>
        </header>
    )

}