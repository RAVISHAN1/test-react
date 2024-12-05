import React from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingBag } from 'react-icons/fi'; // Import Feather icons

const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <Link to="/"><img src={logo} alt="Logo" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/womens">Women’s</Link></li>
                                    <li><Link to="/mens">Men’s</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li>
                                        <Link to="#">Pages</Link>
                                        <ul className="dropdown">
                                            <li><Link to="/product-details">Product Details</Link></li>
                                            <li><Link to="/shop-cart">Shop Cart</Link></li>
                                            <li><Link to="/checkout">Checkout</Link></li>
                                            <li><Link to="/blog-details">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </div>
                                <ul className="header__right__widget">
                                    <li><FiSearch className="icon_search" /></li>
                                    <li>
                                        <Link to="/wishlist">
                                            <FiHeart className="icon_heart_alt" />
                                            <div className="tip">2</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cart">
                                            <FiShoppingBag className="icon_bag_alt" />
                                            <div className="tip">2</div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
