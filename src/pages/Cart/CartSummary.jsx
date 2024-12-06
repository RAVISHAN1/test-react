import React from "react";

const CartSummary = ({ subtotal }) => {
    return (
        <div className="col-lg-4 offset-lg-2">
            <div className="cart__total__procced">
                <h6>Cart total</h6>
                <ul>
                    <li>
                        Subtotal <span>${subtotal.toFixed(2)}</span>
                    </li>
                    <li>
                        Total <span>${subtotal.toFixed(2)}</span>
                    </li>
                </ul>
                <a href="#" className="primary-btn">
                    Proceed to checkout
                </a>
            </div>
        </div>
    );
};

export default CartSummary;
