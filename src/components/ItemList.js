import React from 'react';
import Item from './Item';
import { observer, inject } from 'mobx-react';

const items = [
    {
        name: '생수',
        price: 850,
    },
    {
        name: '신라면',
        price: 900,
    },
    {
        name: '포카칩',
        price: 1500,
    },
    {
        name: '새우깡',
        price: 1000
    }
];

const ItemList = () => {

    const itemList = items.map(item => <Item {...item} key={item.name} />)

    return (
        <div>
            {itemList}
        </div>
    )
}

export default inject(({ market }) => ({
    onPut: market.put
}))(observer(ItemList));