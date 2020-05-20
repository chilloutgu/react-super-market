import React from 'react';
import './Item.css';

const Item = ({ name, price, onPut }) => {

    return (
        <div className="item" onClick={() => onPut(name, price)}>
            <h4>{name}</h4>
            <div>{price}</div>
        </div>
    );
}

export default Item;