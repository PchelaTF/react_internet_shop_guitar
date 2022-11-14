import React, { useCallback, useEffect, useState } from 'react';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
import './ShoppingCart.scss'

const ShoppingCart = ({ cartOpen, setCartOpen, orders }) => {
    const initTotal = () => {
        let permTotal = 0

        orders.map(item => {
            permTotal += +item.price
        })

        return permTotal
    }

    const [total, setTotal] = useState(initTotal())

    function totalPrice(price, increase = true) {
        increase ? setTotal(prev => prev + +price) : setTotal(prev => prev - +price)
    }

    return (
        <div className='shopping-cart' onClick={() => setCartOpen(!cartOpen)}>
            <div className="shopping-cart__content" onClick={(e) => e.stopPropagation()}>
                <div className="shopping-cart__header">
                    <span className="shopping-cart__header-close" onClick={() => setCartOpen(!cartOpen)} > x</span>
                    <p className="shopping-cart__header-title">Shopping Cart</p>
                </div>

                <div className="shopping-cart__body">
                    {orders.map(el => {
                        return <ShoppingCartItem key={el.id} item={el} totalPrice={totalPrice} />
                    })}
                </div>

                <div className="shopping-cart__total">
                    <p className="shopping-cart__total-sum">Total: {total} $</p>
                </div>

            </div>
        </div >
    );
};

export default ShoppingCart;