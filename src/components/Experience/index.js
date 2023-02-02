import React from 'react';
import './index.css'

export const Experience = () => {
    return (
        <section className='experience my-5' id="experience">
            <div className="container">
                <h2 className="weight-bold pb-3 mb-3">Work History</h2>
                <div className="timeline position-relative">
                    <article className="timeline-item position-relative pb-3">
                        <img src="/img/wingfoot.png" className='company-logo' alt="Goodyear wingfoot" />
                        <div className="timeline-item-header mb-2">
                            <h3 className="position-title font-weight-bold">Application Systems Senior Analyst</h3>
                            <p className='company-name'>Goodyear Rubber and Tire Company</p>
                            <p className="time">June 2021 — January 2023</p>
                        </div>
                        <ul>
                            <li>Developed React components on an existing data visualization tool for tire characteristics used by tire engineers. Added to their existing C# .NET API to feed data into the React component.</li>
                            <li>Worked in an Agile environment with data scientists to create web apps for tire wear/defect prediction using APIs.</li>
                            <li>Modernized static, internal pages into responsive and dynamic user driven sites.</li>
                            <li>Created mockups for other developers in need of assistance improving their UI/UX with Adobe XD and Photoshop.</li>
                        </ul>
                    </article>
                    <article className="timeline-item position-relative pb-3">
                        <img src="/img/fusionZONE-Bolt.png" className='company-logo fz' alt="fusionZONE Bolt" />
                        <div className="timeline-item-header mb-2">
                            <h3 className="position-title font-weight-bold">Web Developer</h3>
                            <p className='company-name'>fusionZONE Automotive</p>
                            <p className="time">April 2021 — June 2022</p>
                        </div>
                        <ul>
                            <li>Helped developed/maintained visually appealing and responsive designs for a 500+ client base across North America</li>
                            <li>Used front-end web development technologies such as HTML, CSS, Vanilla JavaScript, React, jQuery, Foundation, Adobe
                                XD and Adobe Photoshop.</li>
                            <li>Developed using PHP as the primary backend language for website development.</li>
                            <li>Created custom Javascript in a Node.js app to import and modify car data from Homenet prior to the PHP backend.</li>
                            <li>Monitored project management using Jira, collaborating closely with the team to deliver high-quality mockups, updates,
                                fixes, and new page/site development to dealers.</li>
                            <li>Communicated directly with dealerships to gather requirements and deliver exceptional web development services.</li>
                            <li>Used tools such as PageSpeed Insights and Chrome DevTools to improve site performance.</li>
                        </ul>
                    </article>
                    <article className="timeline-item position-relative pb-3">
                        <img src="/img/qms-logo.png" className='company-logo qms' alt="QMS logo" />
                        <div className="timeline-item-header mb-2">
                            <h3 className="position-title font-weight-bold">System Support Specialist</h3>
                            <p className='company-name'>Quality Manufacturing Services</p>
                            <p className="time">May 2015 — April 2021</p>
                        </div>
                        <ul>
                            <li>Designed and developed multi-user applications for inventory and RMA tracking.</li>
                            <li>Created several full-stack applications to push the company towards being paperless.</li>
                            <li>Utilized Digikey and Arrow APIs to automatically track and alert supply issues.</li>
                            <li>Administered users, group permissions, file configuration, print and remote access, backup and restoration of network, email, software and databases.</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section >
    )

}