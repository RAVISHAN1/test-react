import React from "react";
import ShopSidebar from "./ShopSidebar";
import shop1 from '../../assets/img/shop/shop-1.jpg';
import shop2 from '../../assets/img/shop/shop-2.jpg';
import shop3 from '../../assets/img/shop/shop-3.jpg';
import shop4 from '../../assets/img/shop/shop-4.jpg';
import shop5 from '../../assets/img/shop/shop-5.jpg';
import shop6 from '../../assets/img/shop/shop-6.jpg';
import shop7 from '../../assets/img/shop/shop-7.jpg';
import shop8 from '../../assets/img/shop/shop-8.jpg';
import shop9 from '../../assets/img/shop/shop-9.jpg';

// Product data array
const products = [
    {
        id: 1,
        name: "Furry hooded parka",
        price: 59.0,
        image: shop1,
        label: "New",
        rating: 5,
    },
    {
        id: 2,
        name: "Flowy striped skirt",
        price: 49.0,
        image: shop2,
        rating: 5,
    },
    {
        id: 3,
        name: "Croc-effect bag",
        price: 59.0,
        image: shop3,
        rating: 5,
    },
    {
        id: 4,
        name: "Dark wash Xavi jeans",
        price: 59.0,
        image: shop4,
        rating: 5,
    },
    {
        id: 5,
        name: "Ankle-cuff sandals",
        price: 49.0,
        originalPrice: 59.0,
        image: shop5,
        label: "Sale",
        rating: 5,
    },
    {
        id: 6,
        name: "Contrasting sunglasses",
        price: 59.0,
        image: shop6,
        rating: 5,
    },
    {
        id: 7,
        name: "Circular pendant earrings",
        price: 59.0,
        image: shop7,
        rating: 5,
    },
    {
        id: 8,
        name: "Cotton T-Shirt",
        price: 59.0,
        image: shop8,
        label: "Out Of Stock",
        rating: 5,
    },
    {
        id: 9,
        name: "Water resistant zips backpack",
        price: 49.0,
        originalPrice: 59.0,
        image: shop9,
        label: "Sale",
        rating: 5,
    },
];


function ShopSection() {
    return (
        <section className="shop spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <ShopSidebar />
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="row">
                            {products.map((product) => (
                                <div key={product.id} className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${product.image})` }}
                                        >
                                            {product.label && (
                                                <div className={`label ${product.label.toLowerCase().replace(/\s+/g, '')}`}>
                                                    {product.label}
                                                </div>
                                            )}
                                            <ul className="product__hover">
                                                <li>
                                                    <a href={product.image} className="image-popup">
                                                        <span className="arrow_expand"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">{product.name}</a>
                                            </h6>
                                            <div className="rating">
                                                {Array(product.rating)
                                                    .fill()
                                                    .map((_, index) => (
                                                        <i key={index} className="fa fa-star me-1"></i>
                                                    ))}
                                            </div>
                                            <div className="product__price">
                                                ${product.price.toFixed(2)}{" "}
                                                {product.originalPrice && (
                                                    <span>${product.originalPrice.toFixed(2)}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="col-lg-12 text-center">
                                <div className="pagination__option">
                                    <a href="#">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopSection;
