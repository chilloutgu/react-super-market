import React from 'react';
import './SuperMarketTemplate.css';

const SuperMarketTemplate = ({ items, basket }) => {

    return (
        <div className="SuperMarketTemplate">
            <div className="items-wrapper">
                <h2>items</h2>
                {items}
            </div>
            <div className="basket-wrapper">
                <h2>basket</h2>
                {basket}
            </div>
        </div>
    )
}

export default SuperMarketTemplate;
