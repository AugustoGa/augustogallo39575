import React from 'react'
import Item from '../Item/Item'
import '../Styles/Styles.css';

function ItemList({productos}) {
    return (
        <div className='nose'>
            {productos?.map(producto => <Item key={producto.id} producto={producto}/> )}
        </div>
    ) 
}

export default ItemList