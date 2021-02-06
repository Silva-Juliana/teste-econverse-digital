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
import econverse from '../../images/econverse.png'

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
                        <div className="box-form-of-payment">
                            <img className="form-of-payment" src={visa}/>
                            <img className="form-of-payment"  src={master}/>
                            <img className="form-of-payment"  src={american}/>
                            <img className="form-of-payment"  src={bandeira}/>
                            <img className="form-of-payment"  src={boleto}/>
                        </div>

                        <h6>SEGURANÇA</h6>
                        <img className="form-of-payment" src={secured}/>
                        <img src={vtex}/>
                    </div>
                    <div className="informations-footer-newsletter">
                        <div className="box-newsletter">
                            <span className="newsletter">ASSINE NOSSO <strong>NEWSLETTER</strong></span>
                            <span className="span-footer">E RECEBA NOVIDADES E PROMOÇÕES</span>
                            <div className="box-input">
                                <input className="input-name" placeholder="SEU NOME"/>
                                <hr/>
                            </div>
                            <div className="box-input">
                                <input className="input-email" placeholder="SEU E-MAIL"/>
                                <hr/>
                            </div>
                            <div className="box-button">
                                <button className="button-submit">ENVIAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-with">
                <div className="box-with">
                    <p className="p-box-with">
                        NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA-2012-2019. Todos os direitos reservados Rua Santa
                        Ifigenia.556 560/562/564 - Santa Efigenia - CEP 01.207-000 São Paulo / SP - CNPJ 07.282.516/0001-15
                    </p>
                    <div className="img-box-with">
                        <img className="img-econverse" src={econverse}/>
                        <img src={vtex}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;