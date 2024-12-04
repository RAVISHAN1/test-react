import React from 'react';

// Import images
import logo from '../../assets/img/logo.png';
import payment1 from '../../assets/img/payment/payment-1.png';
import payment2 from '../../assets/img/payment/payment-2.png';
import payment3 from '../../assets/img/payment/payment-3.png';
import payment4 from '../../assets/img/payment/payment-4.png';
import payment5 from '../../assets/img/payment/payment-5.png';

// Import React Icons
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const paymentImages = [
    { id: 1, src: payment1 },
    { id: 2, src: payment2 },
    { id: 3, src: payment3 },
    { id: 4, src: payment4 },
    { id: 5, src: payment5 }
];

const socialIcons = [
    { id: 1, icon: <FaFacebook />, link: '/facebook' },
    { id: 2, icon: <FaTwitter />, link: '/twitter' },
    { id: 3, icon: <FaYoutube />, link: '/yt' },
    { id: 4, icon: <FaInstagram />, link: '/ig' },
    { id: 5, icon: <FaPinterest />, link: '/pin' }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-7">
                        <div className="footer__about">
                            <div className="footer__logo">
                                <a href="./index.html"><img src={logo} alt="Logo" /></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                            <div className="footer__payment">
                                {paymentImages.map(item => (
                                    <a key={item.id} href="#">
                                        <img src={item.src} alt={`Payment Method ${item.id}`} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-5">
                        <div className="footer__widget">
                            <h6>Quick links</h6>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="footer__widget">
                            <h6>Account</h6>
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Orders Tracking</a></li>
                                <li><a href="#">Checkout</a></li>
                                <li><a href="#">Wishlist</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-8">
                        <div className="footer__newslatter">
                            <h6>NEWSLETTER</h6>
                            <form action="#">
                                <input type="text" placeholder="Email" />
                                <button type="submit" className="site-btn">Subscribe</button>
                            </form>
                            <div className="footer__social">
                                {socialIcons.map(item => (
                                    <Link key={item.id} to={item.link}>
                                        {item.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright__text">
                            <p>
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script>
                                All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
