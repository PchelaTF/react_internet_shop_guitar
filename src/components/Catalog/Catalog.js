import React from 'react';
import database from "../../database.json"
import Counter from '../Counter/Counter';

const Catalog = ({ onAdd }) => {

    function renderItems() {
        const acousticGuitras = database.guitars[0]['acoustic-guitars']

        const items = acousticGuitras.map(item => {
            return (
                <div
                    className="catalog__item item"
                    key={item.id}>
                    <div className="item__header">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item__body">
                        <h2 className="item__body-name">{item.name}</h2>
                        <span className="item__body-price">{item.price} $</span>
                        <button onClick={() => onAdd(item)}>Add to cart</button>
                        <Counter />
                    </div>
                </div>
            )
        })

        return (
            <div className="catalog__items">
                {items}
            </div>
        )
    }

    const catalogItems = renderItems()

    return (
        <div className="catalog">
            <h1 className="catalog__header">Guitar shop</h1>

            <div className="catalog__wrapper">
                <div className="catalog__filter filter">
                    <div className="filter__price-range">
                        <p>Price range</p>
                    </div>

                    <div className="filter__manufacturers">
                        <p>manufacturers</p>
                    </div>
                </div>

                {catalogItems}

            </div>
        </div>
    );
};

export default Catalog;