import React, { useEffect, useState } from "react";
import ShopSidebar from "./ShopSidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { getProductsList } from "../../api/testing/products";
import { useSearchParams } from "react-router-dom";

function Shop() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({
        categories: [],
        sizes: [],
        colors: [],
        priceRange: { min: null, max: null },
    });
    const [searchParams, setSearchParams] = useSearchParams();

    const breadcrumbLinks = [
        { label: "Home", url: "./", icon: "fa-home" },
        { label: "Shop" },
    ];

    // Update filters based on URL
    useEffect(() => {
        const urlFilters = {
            categories: searchParams.getAll("categories"),
            sizes: searchParams.getAll("sizes"),
            colors: searchParams.getAll("colors"),
            priceRange: {
                min: searchParams.get("minPrice"),
                max: searchParams.get("maxPrice"),
            },
        };
        setFilters(urlFilters);
        // console.log(urlFilters);
    }, [searchParams]);

    // Fetch products based on filters
    useEffect(() => {
        const fetchProducts = async (page) => {
            try {
                const response = await getProductsList(page);
                // console.log(response);
                setProducts(response.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [filters]);

    // Update filters and URL on sidebar changes
    const updateFilters = (newFilters) => {
        setFilters(newFilters);

        const params = new URLSearchParams();

        // Append categories as a comma-separated string
        if (newFilters.categories.length) {
            newFilters.categories.forEach(category => {
                params.append("categories", category); // Append each category individually
            });
        }

        // Append sizes as a comma-separated string
        if (newFilters.sizes.length) {
            newFilters.sizes.forEach(size => {
                params.append("sizes", size); // Append each size individually
            });
        }

        // Append colors as a comma-separated string
        if (newFilters.colors.length) {
            newFilters.colors.forEach(color => {
                params.append("colors", color); // Append each color individually
            });
        }

        // Append price range values if provided
        if (newFilters.priceRange.min) {
            params.append("minPrice", newFilters.priceRange.min);
        }
        if (newFilters.priceRange.max) {
            params.append("maxPrice", newFilters.priceRange.max);
        }

        // Update the URL search params
        setSearchParams(params);
    };

    return (
        <>
            <Breadcrumb links={breadcrumbLinks} />
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <ShopSidebar filters={filters} onFilterChange={updateFilters} />
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
