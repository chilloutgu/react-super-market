import React from 'react';
import BasketItem from './BasketItem';

const baskets = [
    {
        name: '포카칩',
        price: 1500,
        count: 2
    },
    {
        name: '생수',
        price: 850,
        count: 1
    }
]

const BasketItemList = () => {

    const itemList = baskets.map(basket => <BasketItem {...basket} key={basket.name} />)

    return (
        <div>
            {itemList}
            <hr />
            <p>
                <b>총합: </b> 3850원
            </p>
        </div>
    )
}

export default BasketItemList;