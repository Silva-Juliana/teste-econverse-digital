import React from 'react'
import iconFacebook from '../../images/iconFace.png'
import iconInstagram from '../../images/iconInsta.png'
import iconTwitter from '../../images/iconTwitter.png'
import visa from '../../images/visa.png'
import master from '../../images/master.png'
import bandeira from '../../images/bandeira.png'
import boleto from '../../images/boleto.png'
import vtex from '../../images/vtex.png'
import american from '../../images/american.png'
import secured from '../../images/secured.png'

function Footer(){
    return (
        <>
            <section className="container-footer">
                <div className="box-footer">
                    <div>
                        <h6>INSTITUCIONAL</h6>
                        <a href="">QUEM SOMOS</a>
                        <a href="">NOSSAS LOJAS</a>

                        <h6>INSTITUCIONAL</h6>
                        <a href="">QUEM SOMOS</a>
                        <a href="">NOSSAS LOJAS</a>
                    </div>
                    <div>
                        <h6>AJUDA E SUPORTE</h6>
                        <a href="">POLÍTICA DE PRIVACIDADE</a>
                        <a href="">POLÍTICA DE TROCA</a>
                        <a href="">PRAZOS DE ENTREGA</a>
                        <a href="">TERMOS DE USO</a>
                        <div className="icons-redes">
                            <img src={iconInstagram}/>
                            <img src={iconTwitter}/>
                            <img src={iconFacebook}/>
                        </div>
                    </div>
                    <div>
                        <h6>FORMAS DE PAGAMENTO</h6>
                        <img src={visa}/>
                        <img src={master}/>
                        <img src={american}/>
                        <img src={bandeira}/>
                        <img src={boleto}/>

                        <h6>SEGURANÇA</h6>
                        <img src={secured}/>
                        <img src={vtex}/>
                    </div>
                    <div>
                        <h6>ASSINE NOSSO NEWSLETTER</h6>
                        <span>E RECEBA NOVIDADES E PROMOÇÕES</span>
                        <input placeholder="SEU NOME"/>
                        <input placeholder="SEU E-MAIL"/>
                        <button>ENVIAR</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer;