import React, { useState} from 'react'
import InformationsTop from '../informationsTop'
import lock from '../../../images/lock-1.png'
import arrow from '../../../images/arrow.png'
import percentage from '../../../images/001-percentage.png'
import truck from '../../../images/002-delivery-truck.png'
import '../top-header/home.scss'
import logo from '../../../images/logo.png'
import lupa from '../../../images/lupa.png'
import bag from '../../../images/bag.png'
import avatar from '../../../images/avatar.png'
import whatsapp from '../../../images/whatsapp.svg'
import MenuTop from '../menu-top/menuTop'
import Slade from '../../slade/slade'
import Product from '../../products/products'
import guitarra from '../../../images/guitarra.png'
import microfone from '../../../images/microfone.png'
import mesaDeSom from '../../../images/mesaDeSom.png'
import teclado from '../../../images/teclado.png'
import violao from '../../../images/violao.png'
import baterias from '../../../images/bateria.png'
import News from '../../news/news'
import dj from '../../../images/dj.png'
import tocandoGuitarra from '../../../images/tocandoGuitarra.png'
import Store from '../../store/store'
import Brands from '../../brands/brands'
import AboutUs from '../../aboutUs/aboutUs'
import Footer from '../../footer/footer'
import poligono from '../../../images/poligono.png'
import Modal from '../../store/modal/modal'
import arrowBlue from '../../../images/arrowBlue.png'

function Home(){
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalData, setModalData] = useState({
    productName: '',
    descriptionShort:'',
    photo:'',
    price:'',
  })

  return (<>
    <div className="top-header">
      <div className="box-top-header">
        <InformationsTop img={lock} text='COMPRA' textStrong= '100% SEGURA' />
        <hr/>
        <InformationsTop img={arrow} textStrong='1º TROCA GRÁTIS' />
        <hr/>
        <InformationsTop img={percentage} textStrong='5X SEM JUROS' />
        <hr/>
        <InformationsTop img={truck} text='ENTREGAS EM' textStrong='TODO O BRASIL'  />
      </div>
    </div>
    <div className="top-header-white">
        <div className="box-header-white">
          <div className="logo">
            <img src={logo}/>
          </div>
          <div className="magnifier">
            <img className="img-search" src={lupa}/>
            <input type='text' className="input-search" placeholder="BUSQUE AQUI..."></input>
          </div>
          <div className="whatsapp">
            <img className="img-whatsapp" src={whatsapp}/>
            <span>(11) 9999-9999</span>
          </div>
          <div className="visitor">
            <div>
              <img src={avatar}/>
            </div>
            <div className="visitor-information">
              <div className="hello-visitor">
                <span> OLÁ VISITANTE</span>
                <img className="img-poligono" src={poligono}/>
              </div>
              <span className="my-account">MINHA CONTA</span>
            </div>
          </div>
          <div className="cart">
            <div className="box-card">
              <div>
                <img className="img-cart" src={bag}/>
              </div>
              <div className="span-cart">
                <span>SEU CARRINHO</span>
                <span className="span-card2">0 item (s)</span>
              </div>
            </div>
          </div>
        </div>
    </div>
    <hr className="line"/>
    <div className="container-menu">
      <div className="box-menu">
        <MenuTop menu="TODAS AS CATEGORIAS"/>
        <MenuTop menu="SOM PROFISSIONAL" imgMenu={poligono}/>
        <MenuTop menu="INSTRUMENTOS MUSICAIS" imgMenu={poligono}/>
        <MenuTop menu="PROMOÇÕES"/>
        <MenuTop menu="CONTATO"/>
      </div>
    </div>
    <Slade/>
    <div className="box-products">
      <Product backgroundProduct={guitarra} spanProduct="GUITARRAS"/>
      <Product backgroundProduct={microfone} spanProduct="MICROFONES"/>
      <Product backgroundProduct={mesaDeSom} spanProduct="MESA DE SOM"/>
      <Product backgroundProduct={teclado} spanProduct="TECLADOS"/>
      <Product backgroundProduct={violao} spanProduct="VIOLÃO"/>
      <Product backgroundProduct={baterias} spanProduct="BATERIAS"/>
    </div>
    <section className="box-news">
      <News imgNews={dj} spanNews="NOVIDADES" strongNews="ÁUDIO" h2News="PROFISSIONAL" aNews="CONFIRA"/>
      <News imgNews={tocandoGuitarra} spanNews="NOVIDADES" strongNews="iNSTRUMENTOS" h2News="MUSICAIS" aNews="CONFIRA"/>
    </section>
    <Store 
      detail={setIsModalVisible}
      data={setModalData}
    />
    <Brands/>
    <AboutUs/>
    <Footer/>
    {isModalVisible ? (
    <Modal onClose={ ()=> setIsModalVisible(false)}>
      <div className="box-modal">
          <div>
            <img src={modalData.photo}/>
          </div>
          <div className="informations-modal">
            <h1 className="h1-modal">{modalData.productName}</h1>
            <span className="price">{modalData.price}</span>
            <p className="description">{modalData.descriptionShort}</p>
            <a classname="detail" href="">
              Veja mais detalhes do produto
              <img className="img-detail" src={arrowBlue}/>
            </a>
            <div className="box-subimit">
              <button className="submit">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
    </Modal> 
    ): null}
  </>
  )
}
export default Home;