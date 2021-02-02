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
import '../footer/footer.scss'

function Footer(){
    return (
        <>
            <section className="container-footer">
                <div className="box-footer">
                    <div className="informations-footer">
                        <h6>INSTITUCIONAL</h6>
                        <a className="text-footer" href="">QUEM SOMOS</a>
                        <a className="text-footer"  href="">NOSSAS LOJAS</a>

                        <h6>ATENDIMENTO</h6>
                        <a className="text-footer"  href="">FALE CONOSCO</a>
                        <a className="text-footer"  href="">VENDA@SNINJASOM.COM.BR</a>
                    </div>
                    <div className="informations-footer">
                        <h6>AJUDA E SUPORTE</h6>
                        <a className="text-footer"  href="">POLÍTICA DE PRIVACIDADE</a>
                        <a className="text-footer"  href="">POLÍTICA DE TROCA</a>
                        <a className="text-footer"  href="">PRAZOS DE ENTREGA</a>
                        <a className="text-footer"  href="">TERMOS DE USO</a>
                        <div className="icons-redes">
                            <img className="icon" src={iconInstagram}/>
                            <img className="icon" src={iconTwitter}/>
                            <img src={iconFacebook}/>
                        </div>
                    </div>
                    <div>
                        <h6>FORMAS DE PAGAMENTO</h6>
                        <img className="form-of-payment" src={visa}/>
                        <img className="form-of-payment"  src={master}/>
                        <img className="form-of-payment"  src={american}/>
                        <img className="form-of-payment"  src={bandeira}/>
                        <img className="form-of-payment"  src={boleto}/>

                        <h6>SEGURANÇA</h6>
                        <img src={secured}/>
                        <img src={vtex}/>
                    </div>
                    <div className="informations-footer">
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