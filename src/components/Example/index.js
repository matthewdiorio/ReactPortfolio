import React from 'react';
import './index.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Modal from 'react-modal';

export const Example = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    }


    function closeModal() {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    }

    const slideImages = [
        {
            url: '/img/highlineupdate/highline-01.jpg',
            caption: 'Slide 1'
        },
        {
            url: '/img/highlineupdate/highline-02.jpg',
            caption: 'Slide 2'
        },
        {
            url: '/img/highlineupdate/highline-03.jpg',
            caption: 'Slide 3'
        },
        {
            url: '/img/highlineupdate/highline-04.jpg',
            caption: 'Slide 4'
        },
        {
            url: '/img/highlineupdate/highline-05.jpg',
            caption: 'Slide 5'
        },
        {
            url: '/img/highlineupdate/highline-06.jpg',
            caption: 'Slide 6'
        },
        {
            url: '/img/highlineupdate/highline-07.jpg',
            caption: 'Slide 7'
        },
        {
            url: '/img/highlineupdate/highline-08.jpg',
            caption: 'Slide 8'
        },
        {
            url: '/img/highlineupdate/highline-09.jpg',
            caption: 'Slide 9'
        },
        {
            url: '/img/highlineupdate/highline-10.jpg',
            caption: 'Slide 10'
        },
        {
            url: '/img/highlineupdate/highline-11.jpg',
            caption: 'Slide 11'
        },
        {
            url: '/img/highlineupdate/highline-12.jpg',
            caption: 'Slide 12'
        },
        {
            url: '/img/highlineupdate/highline-13.jpg',
            caption: 'Slide 13'
        },
        {
            url: '/img/highlineupdate/highline-14.jpg',
            caption: 'Slide 14'
        },
        {
            url: '/img/highlineupdate/highline-15.jpg',
            caption: 'Slide 15'
        },
        {
            url: '/img/highlineupdate/highline-16.jpg',
            caption: 'Slide 16'
        },
        {
            url: '/img/highlineupdate/highline-17.jpg',
            caption: 'Slide 17'
        },
        {
            url: '/img/highlineupdate/highline-18.jpg',
            caption: 'Slide 18'
        },
        {
            url: '/img/highlineupdate/highline-19.jpg',
            caption: 'Slide 19'
        },
        {
            url: '/img/highlineupdate/highline-20.jpg',
            caption: 'Slide 20'
        },
        {
            url: '/img/highlineupdate/highline-21.jpg',
            caption: 'Slide 21'
        },
    ];

    return (
        <section className='example py-5' id="examples">
            <div className="container py-5">
                <h2 className="weight-bold pb-3 mb-3">Example work</h2>

                <div className="slide-container mb-3">
                    <Slide
                        autoplay={false}
                        canSwipe={false}
                    >
                        {slideImages.map((slideImage, index) => (
                            <div className="image-wrapper" key={index}>
                                <div className="image" style={{ backgroundImage: `url(${slideImage.url})` }}>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
                <p>Powerpoint slides from a presentation from my inventory pages redesign.</p>

                <div className="col-md-12 text-center my-5">
                    <button onClick={openModal} className="screen-button">View other examples</button>
                </div>

                <div id="more-modal">
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                    >
                        <button onClick={closeModal} className="close-button">close</button>
                        <h5>Other Highline Automotive pages created by me:*</h5>
                        <ul>
                            <li>
                                <p><a href="https://www.highlineautosinc.com"
                                    target="_blank" rel="noreferrer">Homepage</a>
                                </p>
                            </li>
                            <li>
                                <p><a href="https://www.highlineautosinc.com/bad-credit-car-loans"
                                    target="_blank" rel="noreferrer">Bad Credit Card Loans</a>
                                </p>
                            </li>
                            <li>
                                <p><a href="https://www.highlineautosinc.com/warranty"
                                    target="_blank" rel="noreferrer">Warranty</a></p>
                            </li>
                        </ul>
                        <div className="disclaimer">
                            <p>Disclaimers:</p>
                            <p> -The sites listed here are currently live sites. Other
                                fusionZONE developers or 3rd party plugins can affect the site's design and
                                performance. Due to this, the current state of the website may not fully
                                represent work of my own. These pages were created by me in late 2021. All images on fusionZONE sites are either
                                dealer supplied or created from fusionZONE graphic designers. Highline
                                Automotive may no longer operate or have switch website providers.
                            </p>
                            <p> -Last visually verified for my own originality: 01/27/2023</p>
                            <p> -The website's header has been completely changed. The homepage sticky buttons are not of my own. The homepage video background is no longer playable on Safari but works on other browsers. The background video used a resusable PHP video widget. I suspect they made a breaking change to the widget. Listing pages appear to have minor filtering changes and vehicle detail pages now have alignment issues with the playable video since my depature.</p>
                        </div>
                    </Modal>
                </div>
            </div>



        </section >
    )

}