import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ItemList from './ItemList';
import BasketItemList from './BasketItemList';

const SuperMarket = () => {

    return (
        <div>
            <SuperMarketTemplate items={<ItemList />} basket={<BasketItemList />} />
        </div>
    );
}

export default SuperMarket;