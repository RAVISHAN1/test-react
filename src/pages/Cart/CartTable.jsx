import React from "react";
import { FaStar, FaTimes } from "react-icons/fa";

const CartTable = ({ cartItems, handleQuantityChange, removeItem }) => {
    return (
        <div className="shop__cart__table">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td className="cart__product__item">
                                <img src={item.image} alt={item.name} />
                                <div className="cart__product__item__title">
                                    <h6>{item.name}</h6>
                                    <div className="rating">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar key={index} color="#FFD700" />
                                        ))}
                                    </div>
                                </div>
                            </td>
                            <td className="cart__price">${item.price.toFixed(2)}</td>
                            <td className="cart__quantity">
                                <div className="pro-qty">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) =>
                                            handleQuantityChange(item.id, +e.target.value)
                                        }
                                    />
                                </div>
                            </td>
                            <td className="cart__total">
                                ${(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td className="cart__close">
                                <FaTimes
                                    style={{ cursor: "pointer" }}
                                    onClick={() => removeItem(item.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;
