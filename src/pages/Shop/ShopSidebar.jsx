import React, { useState } from "react";

const ShopSidebar = () => {
    const [categories] = useState([
        { title: "Women", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
        { title: "Men", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
        { title: "Kids", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
        { title: "Accessories", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
        { title: "Cosmetic", items: ["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"] },
    ]);

    const [sizes] = useState(["xxs", "xs", "xs-s", "s", "m", "m-l", "l", "xl"]);

    const [colors] = useState([
        { id: "black", name: "Blacks" },
        { id: "whites", name: "Whites" },
        { id: "reds", name: "Reds" },
        { id: "greys", name: "Greys" },
        { id: "blues", name: "Blues" },
        { id: "beige", name: "Beige Tones" },
        { id: "greens", name: "Greens" },
        { id: "yellows", name: "Yellows" },
    ]);

    return (
        <div className="shop__sidebar">
            {/* Categories */}
            <div className="sidebar__categories">
                <div className="section-title">
                    <h4>Categories</h4>
                </div>
                <div className="categories__accordion">
                    <div className="accordion" id="accordionExample">
                        {categories.map((category, index) => (
                            <div className="card" key={index}>
                                <div className="card-heading">
                                    <a
                                        data-toggle="collapse"
                                        data-target={`#collapse${index}`}
                                        className={index === 0 ? "active" : ""}
                                    >
                                        {category.title}
                                    </a>
                                </div>
                                <div
                                    id={`collapse${index}`}
                                    className={`collapse ${index === 0 ? "show" : ""}`}
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        <ul>
                                            {category.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>
                                                    <a href="#">{item}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Price Filter */}
            <div className="sidebar__filter">
                <div className="section-title">
                    <h4>Shop by price</h4>
                </div>
                <div className="filter-range-wrap">
                    <div
                        className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                        data-min="33"
                        data-max="99"
                    ></div>
                    <div className="range-slider">
                        <div className="price-input">
                            <p>Price:</p>
                            <input type="text" id="minamount" />
                            <input type="text" id="maxamount" />
                        </div>
                    </div>
                </div>
                <a href="#">Filter</a>
            </div>

            {/* Sizes */}
            <div className="sidebar__sizes">
                <div className="section-title">
                    <h4>Shop by size</h4>
                </div>
                <div className="size__list">
                    {sizes.map((size, index) => (
                        <label htmlFor={size} key={index}>
                            {size}
                            <input type="checkbox" id={size} />
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Colors */}
            <div className="sidebar__color">
                <div className="section-title">
                    <h4>Shop by color</h4>
                </div>
                <div className="size__list color__list">
                    {colors.map((color) => (
                        <label htmlFor={color.id} key={color.id}>
                            {color.name}
                            <input type="checkbox" id={color.id} />
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopSidebar;
