import React from 'react';
import "./Counter.scss"

const Counter = () => {
    return (
        <div className="item__quantity quatity">
            <div className="quatity__minus">-</div>
            <div className="quatity__count">1</div>
            <div className="quatity__plus">+</div>
        </div>
    );
};

export default Counter;