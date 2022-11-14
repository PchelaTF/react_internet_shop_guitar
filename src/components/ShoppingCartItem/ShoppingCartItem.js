import React, { useEffect, useState } from 'react';

const ShoppingCartItem = ({ item, totalPrice }) => {
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(item.price)

    function incremet() {
        setCount(count + 1)
        setPrice(item.price * (count + 1))
        totalPrice(item.price)
    }

    function decrement() {
        if (count > 1) {
            setCount(count - 1)
            setPrice(item.price * (count - 1))
            totalPrice(item.price, false)
        }
    }

    return (
        <div
            className="shopping-cart__body-item item">
            <div className="item__remove">x</div>
            <div className="item__image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="item__content">
                <p className="item__name">{item.name}</p>
                <div className="item__price">
                    <div className="item__quantity quatity">
                        <div className="quatity__minus" onClick={decrement}>-</div>
                        <div className="quatity__count">{count}</div>
                        <div className="quatity__plus" onClick={incremet}>+</div>
                    </div>
                    <p className="item__price-total" >{price} $</p>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartItem;