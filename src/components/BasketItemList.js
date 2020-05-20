import React from 'react';
import BasketItem from './BasketItem';
import { inject, observer } from 'mobx-react';

/*
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
*/

const BasketItemList = ({ items, total, onTake }) => {

    const itemList = items.map(item => <BasketItem {...item} key={item.name} onTake={onTake} />)

    return (
        <div>
            {itemList}
            <hr />
            <p>
                <b>총합: </b> {total}원
            </p>
        </div>
    )
}

export default inject(({ market }) => ({
    items: market.selectedItems,
    total: market.total,
    onTake: market.onTake,
}))(observer(BasketItemList));