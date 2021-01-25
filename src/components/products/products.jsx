import React from 'react'
import '../products/products.scss'

function Product(props){
    return(
        <>
            <div className="container-product">
                <div className="background-product" style={{ backgroundImage: `url(${props.backgroundProduct})` }}>
                </div>
                <span className="span-product">{props.spanProduct}</span>
            </div>
        </>
    )
}

export default Product;