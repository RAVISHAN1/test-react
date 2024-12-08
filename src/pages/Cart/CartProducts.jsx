import React, { useState } from "react";
import img1 from "../../assets/img/shop-cart/cp-1.jpg";
import img2 from "../../assets/img/shop-cart/cp-2.jpg";
import img3 from "../../assets/img/shop-cart/cp-3.jpg";
import img4 from "../../assets/img/shop-cart/cp-4.jpg";
import CartTable from "./CartTable";
import DiscountSection from "./DiscountSection";
import CartSummary from "./CartSummary";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const CartProducts = () => {
    const breadcrumbLinks = [
        { label: 'Home', url: './', icon: 'fa-home' },
        { label: 'Shop', url: './shop', },
        { label: 'Cart' }
    ];

    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Chain bucket bag", price: 150.0, quantity: 2, image: img1 },
        { id: 2, name: "Zip-pockets pebbled tote briefcase", price: 170.0, quantity: 1, image: img2 },
        { id: 3, name: "Black jean", price: 85.0, quantity: 2, image: img3 },
        { id: 4, name: "Cotton Shirt", price: 55.0, quantity: 2, image: img4 },
    ]);

    const handleQuantityChange = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <>
            <Breadcrumb links={breadcrumbLinks} />

            <section className="shop-cart spad">
                <div className="container">
                    <CartTable
                        cartItems={cartItems}
                        handleQuantityChange={handleQuantityChange}
                        removeItem={removeItem}
                    />
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn">
                                <a href="#">Continue Shopping</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn update__btn">
                                <a href="#">
                                    <span className="icon_loading"></span> Update cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <DiscountSection />
                        <CartSummary subtotal={subtotal} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CartProducts;
