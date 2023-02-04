import React from 'react';
import './index.css'

export const History = () => {
    return (
        <div className='history py-5' id="History">
            <div className="container py-5">
                <div className="row">
                    <h2>My Story</h2>
                    <div className="col-md-6">
                        <p>I'm a full-stack developer in Akron, Ohio. My first experience with web development was a web design class in middle school. Through highschool I took computer science classes and eventually led into going to the University of Central Florida for Web Design. I am eager to continue expanding my career in either full-stack or front-end roles, and am committed to continuous learning and applying my new knowledge on the job. I am confident that my experience and drive to succeed will enable me to make a valuable contribution to any company in the industry.</p>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <ul className='skills'>
                            <li>UI/UX</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>C#</li>
                            <li>PHP</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}