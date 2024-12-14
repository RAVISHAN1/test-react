import React from 'react'

function ProductCard({ product }) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="product__item">
                <div
                    className="product__item__pic set-bg"
                    style={{ backgroundImage: `url(${product.image})` }}
                >
                    {product.label && (
                        <div className={`label ${product.label.toLowerCase().replace(/\s+/g, "")}`}>
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
                        <br /><span>{product.category}</span>
                        <br /><span>{product.size}</span>
                        <br /><span>{product.color}</span>
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
    )
}

export default ProductCard
