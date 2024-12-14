import React, { useEffect, useState } from "react";
import ShopSidebar from "./ShopSidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { getProductsList } from "../../api/testing/products";
import { useSearchParams } from "react-router-dom";
import ShopPagination from "./ShopPagination";
import ProductCard from "./ProductCard";

function Shop() {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1 });
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
    }, [searchParams]);

    // Fetch products on page change
    useEffect(() => {
        const fetchProducts = async (page) => {
            try {
                const response = await getProductsList(filters, page);
                setProducts(response.products);
                setPagination({
                    currentPage: response.currentPage,
                    totalPages: response.totalPages,
                });
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        const page = parseInt(searchParams.get("page")) || 1;
        fetchProducts(page);
    }, [filters]);

    // Handle page change
    const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page);
        setSearchParams(params);
    };

    // Update filters and URL on sidebar changes
    const updateFilters = (newFilters) => {
        setFilters(newFilters);

        const params = new URLSearchParams();

        // Append categories as a comma-separated string
        if (newFilters.categories.length) {
            newFilters.categories.forEach((category) => {
                params.append("categories", category); // Append each category individually
            });
        }

        // Append sizes as a comma-separated string
        if (newFilters.sizes.length) {
            newFilters.sizes.forEach((size) => {
                params.append("sizes", size); // Append each size individually
            });
        }

        // Append colors as a comma-separated string
        if (newFilters.colors.length) {
            newFilters.colors.forEach((color) => {
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
                                    <ProductCard key={product.id} product={product} />
                                ))}
                                <div className="col-lg-12 text-center">
                                    <ShopPagination
                                        currentPage={pagination.currentPage}
                                        totalPages={pagination.totalPages}
                                        onPageChange={handlePageChange}
                                    />
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
