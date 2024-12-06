import React from 'react';
import { FaExpand, FaHeart, FaShoppingBag } from 'react-icons/fa';
import product1 from '../../assets/img/product/product-1.jpg';
import product2 from '../../assets/img/product/product-2.jpg';
import product3 from '../../assets/img/product/product-3.jpg';
import product4 from '../../assets/img/product/product-4.jpg';
import product5 from '../../assets/img/product/product-5.jpg';
import product6 from '../../assets/img/product/product-6.jpg';
import product7 from '../../assets/img/product/product-7.jpg';
import product8 from '../../assets/img/product/product-8.jpg';

const ProductSection = () => {
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="section-title">
                            <h4>New product</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <ul className="filter__controls">
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".women">Women’s</li>
                            <li data-filter=".men">Men’s</li>
                            <li data-filter=".kid">Kid’s</li>
                            <li data-filter=".accessories">Accessories</li>
                            <li data-filter=".cosmetic">Cosmetics</li>
                        </ul>
                    </div>
                </div>
                <div className="row property__gallery">
                    {productsArray.map((product) => (
                        <div
                            key={product.id}
                            className={`col-lg-3 col-md-4 col-sm-6 mix ${product.category}`}
                        >
                            <div className="product__item">
                                <div
                                    className="product__item__pic set-bg"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                >
                                    {product.label && (
                                        <div className={`label ${product.stock ? 'new' : 'stockout'}`}>
                                            {product.label}
                                        </div>
                                    )}
                                    <ul className="product__hover">
                                        <li>
                                            <a href={product.image} className="image-popup">
                                                <span><FaExpand size={18} /></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaHeart size={18} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaShoppingBag size={18} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>
                                        <a href="#">{product.name}</a>
                                    </h6>
                                    <div className="rating">
                                        {[...Array(product.rating)].map((_, index) => (
                                            <i key={index} className="fa fa-star me-1"></i>
                                        ))}
                                    </div>
                                    <div className="product__price">
                                        ${product.price.toFixed(2)}
                                        {product.oldPrice && (
                                            <span>${product.oldPrice.toFixed(2)}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;

const productsArray = [
    {
        id: 1,
        name: 'Buttons tweed blazer',
        category: 'women',
        image: product1,
        price: 59.0,
        oldPrice: null,
        rating: 5,
        label: 'New',
        stock: true,
    },
    {
        id: 2,
        name: 'Flowy striped skirt',
        category: 'men',
        image: product2,
        price: 49.0,
        oldPrice: null,
        rating: 5,
        label: null,
        stock: true,
    },
    {
        id: 3,
        name: 'Cotton T-Shirt',
        category: 'accessories',
        image: product3,
        price: 59.0,
        oldPrice: null,
        rating: 5,
        label: 'Out of Stock',
        stock: false,
    },
    {
        id: 4,
        name: 'Slim striped pocket shirt',
        category: 'cosmetic',
        image: product4,
        price: 59.0,
        oldPrice: null,
        rating: 5,
        label: null,
        stock: true,
    },
    {
        id: 5,
        name: 'Fit micro corduroy shirt',
        category: 'kid',
        image: product5,
        price: 59.0,
        oldPrice: null,
        rating: 5,
        label: null,
        stock: true,
    },
    {
        id: 6,
        name: 'Tropical Kimono',
        category: 'women men kid accessories cosmetic',
        image: product6,
        price: 49.0,
        oldPrice: 59.0,
        rating: 5,
        label: 'Sale',
        stock: true,
    },
];
