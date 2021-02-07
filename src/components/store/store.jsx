import React, { useEffect, useState } from 'react'
import '../store/store.scss'
import ApiStore from './apiStore.js'
import ItemStore from '../store/itemStore'

function Store(props){

    console.log(ApiStore())
        
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(ApiStore().products)
    }, [])

    return(
        <>
            <section className="container-store">
                <div className="box-store">
                    <h3 className="h3-store">
                        INSTRUMENTOS 
                        <strong className="strong-store">DESTAQUE</strong>
                    </h3>
                    <p className="p-store">
                        it is a long established fact that a reader 
                        will be distracted by the readable
                    </p>
                    <div className="dad-items">
                        {
                            items.map(item =>{
                                return <ItemStore photo={item.photo} productName={item.productName} 
                                descriptionShort={item.descriptionShort} price={item.price} showModal={props.detail}/>
                            })
                        }
                    </div>
                    <button className="button-store">VER MAIS</button>
                </div>
            </section>
        </>
    )
}

export default Store;