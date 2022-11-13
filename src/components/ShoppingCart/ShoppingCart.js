import React from 'react';
import './ShoppingCart.scss'

const ShoppingCart = ({ cartOpen, setCartOpen, orders }) => {

    function renderOrdersItems() {
        const items = orders.map(item => {
            return (
                <div
                    className="shopping-cart__body-item item"
                    key={item.id}>
                    <div className="item__remove">x</div>
                    <div className="item__image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item__content">
                        <p className="item__name">{item.name}</p>
                        <div className="item__price">
                            <div className="item__quantity quatity">
                                <div className="quatity__minus"></div>
                                <div className="quatity__count"></div>
                                <div className="quatity__plus"></div>
                            </div>
                            <p className="item__price-total">{item.price} $</p>
                        </div>
                    </div>
                </div>
            )
        })

        return items
    }

    const orderItems = renderOrdersItems()
    const content = orders !== [] ? orderItems : "Yors shopping cart is empty"
    console.log(content);

    return (
        <div className='shopping-cart' onClick={() => setCartOpen(!cartOpen)}>
            <div className="shopping-cart__content" onClick={(e) => e.stopPropagation()}>
                <div className="shopping-cart__header">
                    <span className="shopping-cart__header-close" onClick={() => setCartOpen(!cartOpen)} > x</span>
                    <p className="shopping-cart__header-title">Shopping Cart</p>
                </div>

                <div className="shopping-cart__body">

                    {orders.length !== 0 ? orderItems : "Yors shopping cart is empty"}

                    {/* <div className="shopping-cart__body-item item">
                        <div className="item__remove">x</div>
                        <div className="item__image">
                            <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-90x90.jpg" alt="" />
                        </div>
                        <div className="item__content">
                            <p className="item__name">Cort AD810 OP</p>
                            <div className="item__price">
                                <div className="item__quantity quatity">
                                    <div className="quatity__minus"></div>
                                    <div className="quatity__count"></div>
                                    <div className="quatity__plus"></div>
                                </div>
                                <p className="item__price-total">4599 hrn</p>
                            </div>
                        </div>
                    </div> */}

                </div>

                <div className="shopping-cart__total">
                    <p className="shopping-cart__total-sum">Total: 4599 $</p>
                </div>

            </div>
        </div >
    );
};

export default ShoppingCart;