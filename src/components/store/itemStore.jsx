import React from 'react'
import '../store/itemStore.scss'

function ItemStore(item) {
    return(
        <>
        <div className="box-itemStore">
            <div>
                <img className="img-itemStore" src={item.photo}/>
            </div>
            <h4 className="h4-itemStore">{item.productName}</h4>
            <p className="p-itemStore">{item.descriptionShort}</p>
            <span className="span-itemStore">{item.price}</span>
        </div>
        </>
    )
}

export default ItemStore;