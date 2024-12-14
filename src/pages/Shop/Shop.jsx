import React, { useEffect, useState } from "react";
import ShopSidebar from "./ShopSidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { getProductsList } from '../../api/testing/products'

function Shop() {
    const [products, setProducts] = useState([]);
    const breadcrumbLinks = [
        { label: 'Home', url: './', icon: 'fa-home' },
        { label: 'Shop' }
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProductsList();
                setProducts(response);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Breadcrumb links={breadcrumbLinks} />

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
        </>
    );
}

export default Shop;