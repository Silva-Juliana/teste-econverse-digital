import React from 'react'
import '../store/itemStore.scss'
import lupa from '../../images/lupabranca.png'

function ItemStore(item) {
    return(
        <>
        <div className="box-itemStore">
            <div className="container-itemStore">
                <div className="view">
                    <img className="img-itemStore" src={item.photo}/>
                    <div className="box-lupa">
                        <button onClick={() => item.showModal(true) } className="button-lupa">
                            <img className="lupa" src={lupa}/>
                        </button>
                        <span>Quick view</span>
                    </div>
                </div>
                <h4 className="h4-itemStore">{item.productName}</h4>
                <p className="p-itemStore">{item.descriptionShort}</p>
                <span className="span-itemStore">{item.price}</span>
            </div>
        </div>
        </>
    )
}

export default ItemStore;