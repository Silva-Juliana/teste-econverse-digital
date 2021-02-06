import React from 'react'
import arrowLeft from '../../images/caminho1570.png'
import arrowRight from '../../images/arrowBlue.png'
import imgAKG from '../../images/surface1.png'
import imgRoland from '../../images/roland.png'
import imgBoss from '../../images/boss.png'
import imgShure from '../../images/shure.png'
import '../brands/brands.scss'


function Brands(){
    return (
    <>
        <div className="container-brands">
            <div className="box-text">
                <h5>AS <strong>MELHORES</strong> MARCAS</h5>
                <p className="text-brands">
                    it is a long established fact that a reader 
                    will be distracted by the readable
                </p>
            </div>
            <div className="box-brands">
                <div className="arrow-left">
                    <img className="img-brands" src={arrowLeft}/>
                </div>
                <div>
                    <img className="img-brands" src={imgAKG}/>
                </div>
                <div>
                    <img className="img-brands" src={imgRoland}/>
                </div>
                <div>
                    <img className="img-brands" src={imgBoss}/>
                </div>
                <div>
                    <img className="img-brands" src={imgShure}/>
                </div>
                <div className="arrow-right">
                    <img className="img-brands" src={arrowRight}/>
                </div>
            </div>
        </div>
    </>
    )
}

export default Brands;