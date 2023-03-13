import React from 'react'
import Item from '../Item/Item'
import "../../Styles/Styles.css"

function ItemList({productos}) {
    return (
        <>
            {productos?.map(producto => <Item key={producto.id} producto={producto}/> )}
        </>
    ) 
}

export default ItemList