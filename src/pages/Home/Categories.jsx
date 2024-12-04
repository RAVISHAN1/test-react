import React from 'react';
import category_1 from '../../assets/img/categories/category-1.jpg'
import category_2 from '../../assets/img/categories/category-2.jpg'
import category_3 from '../../assets/img/categories/category-3.jpg'
import category_4 from '../../assets/img/categories/category-4.jpg'
import category_5 from '../../assets/img/categories/category-5.jpg'

const Categories = () => {
    return (
        <>
            <section class="categories">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="categories__item categories__large__item set-bg" style={{ backgroundImage: `url(${category_1})` }}>
                                <div class="categories__text">
                                    <h1>Women’s fashion</h1>
                                    <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div class="categories__item set-bg" style={{ backgroundImage: `url(${category_2})` }}>
                                        <div class="categories__text">
                                            <h4>Men’s fashion</h4>
                                            <p>358 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div class="categories__item set-bg" style={{ backgroundImage: `url(${category_3})` }}>
                                        <div class="categories__text">
                                            <h4>Kid’s fashion</h4>
                                            <p>273 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div class="categories__item set-bg" style={{ backgroundImage: `url(${category_4})` }}>
                                        <div class="categories__text">
                                            <h4>Cosmetics</h4>
                                            <p>159 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div class="categories__item set-bg" style={{ backgroundImage: `url(${category_5})` }}>
                                        <div class="categories__text">
                                            <h4>Accessories</h4>
                                            <p>792 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories
