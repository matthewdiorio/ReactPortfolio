import React from 'react';
import './index.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="links">
                    <ul className="gl">
                        <li><a href="https://www.linkedin.com/in/matthewdiorio" aria-label="linked-in"><img src="/img/in.png" alt="Linkedin" /></a></li>
                        <li><a href="https://www.github.com/matthewdiorio" aria-label="Github"><img src="/img/hub.png" alt="Github" /></a></li>
                    </ul>
                    <div class="email"><a href="mailto:matthewdiorio@yahoo.com" className="email-link">matthewdiorio@yahoo.com</a></div>
                </div>
            </div>
        </footer>
    )

}