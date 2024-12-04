import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'owl.carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import banner1 from '../../assets/img/banner/banner-1.jpg';

const BannerSection = () => {
    useEffect(() => {
        // Initialize OwlCarousel after the component is mounted
        if ($) {
            $('.banner__slider').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                nav: true,
                dots: true,
                navText: ['<span class="prev"></span>', '<span class="next"></span>'],
            });
        }
    }, []);

    return (
        <>
            <section className="banner set-bg" style={{ backgroundImage: `url(${banner1})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 m-auto">
                            <div className="banner__slider owl-carousel">
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;
