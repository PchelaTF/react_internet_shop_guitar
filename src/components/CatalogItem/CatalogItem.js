import React from 'react';

const CatalogItem = () => {
    return (
        <div className="catalog__item item">
            <div className="item__header">
                <img src="https://leaderpromusic.ua/image/cache/catalog/product/cortad810op/0794_cort-ad810-op_left-front-side-view_1_leaderpromusic-500x500.jpg" alt="" />
            </div>
            <div className="item__body">
                <h2 className="item__body-name">Cort AD810 OP</h2>
                <span className="item__body-price">4599 грн</span>
                <button>Add in cart</button>
            </div>
        </div>
    );
};

export default CatalogItem;