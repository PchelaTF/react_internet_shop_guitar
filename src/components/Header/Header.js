import React, { useState } from 'react';
import "./Header.scss"
import IconFavorites from '../IconFavorites/IconFavorites';
import IconShoppingCart from '../IconShoppingCart/IconShoppingCart';
import searchImg from "../../img/icons/search.svg"
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Header = ({orders}) => {
    const [cartOpen, setCartOpen] = useState(false)

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__name">Guitar shop</div>
                <div className="header__search">
                    <img className='header__search-icon' src={searchImg} alt="search-icon" />
                    <input className='header__search-input' type="text" placeholder="Search" />
                </div>
                <div className="header__icons">
                    <div className="header__favorites">
                        <IconFavorites />
                    </div>
                    <div
                        className="header__shopping-cart"
                        onClick={() => setCartOpen(!cartOpen)}>
                        <IconShoppingCart />
                    </div>
                </div>
            </div>

            {cartOpen && <ShoppingCart cartOpen={cartOpen} setCartOpen={setCartOpen} orders={orders}/>}
        </header>
    );
};

export default Header;