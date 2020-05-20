import React from 'react';
import './Item.css';

const Item = ({ name, price }) => {

    return (
        <div className="item">
            <h4>{name}</h4>
            <div>{price}</div>
        </div>
    );
}

export default Item;