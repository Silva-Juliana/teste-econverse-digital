import React from 'react'
import '../menu-top/menuTop.scss'

function MenuTop(props){
  return ( <>
    <ul className="ul-menu">
        <li className="li-menu">
            <span className="span-menu">{props.menu}</span>
            <img className="imgMenu" src={props.imgMenu}/>
            <hr id="line-menu"/>
        </li>
    </ul>
    </>
  )
}

export default MenuTop;