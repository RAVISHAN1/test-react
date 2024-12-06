import React from 'react';
import ht1 from '../../assets/img/trend/ht-1.jpg';
import ht2 from '../../assets/img/trend/ht-2.jpg';
import ht3 from '../../assets/img/trend/ht-3.jpg';
import bs1 from '../../assets/img/trend/bs-1.jpg';
import bs2 from '../../assets/img/trend/bs-2.jpg';
import bs3 from '../../assets/img/trend/bs-3.jpg';
import f1 from '../../assets/img/trend/f-1.jpg';
import f2 from '../../assets/img/trend/f-2.jpg';
import f3 from '../../assets/img/trend/f-3.jpg';

const TrendSection = () => {
    return (
        <section className="trend spad">
            <div className="container">
                <div className="row">
                    {trendProducts.map((categoryData, categoryIndex) => (
                        <div className="col-lg-4 col-md-4 col-sm-6" key={categoryIndex}>
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>{categoryData.category}</h4>
                                </div>
                                {categoryData.products.map((product, productIndex) => (
                                    <div className="trend__item" key={productIndex}>
                                        <div className="trend__item__pic">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>{product.name}</h6>
                                            <div className="rating">
                                                {[...Array(product.rating)].map((_, index) => (
                                                    <i className="fa fa-star me-1" key={index}></i>
                                                ))}
                                            </div>
                                            <div className="product__price">{product.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendSection;

const trendProducts = [
    {
        category: 'Hot Trend',
        products: [
            {
                name: 'Chain bucket bag',
                image: ht1,
                price: '$59.0',
                rating: 5,
            },
            {
                name: 'Pendant earrings',
                image: ht2,
                price: '$59.0',
                rating: 5,
            },
            {
                name: 'Cotton T-Shirt',
                image: ht3,
                price: '$59.0',
                rating: 5,
            },
        ],
    },
    {
        category: 'Best seller',
        products: [
            {
                name: 'Cotton T-Shirt',
                image: bs1,
                price: '$59.0',
                rating: 5,
            },
            {
                name: 'Zip-pockets pebbled tote briefcase',
                image: bs2,
                price: '$59.0',
                rating: 5,
            },
            {
                name: 'Round leather bag',
                image: bs3,
                price: '$59.0',
                rating: 5,
            },
        ],
    },
    {
        category: 'Feature',
        products: [
            {
                name: 'Bow wrap skirt',
                image: f1,
                price: '$59.0',
                rating: 5,
            },
            {
                name: 'Metallic earrings',
                image: f2,
                price: '$59.0',
                rating: 5,
            },
            {
                name: 'Flap cross-body bag',
                image: f3,
                price: '$59.0',
                rating: 5,
            },
        ],
    },
];