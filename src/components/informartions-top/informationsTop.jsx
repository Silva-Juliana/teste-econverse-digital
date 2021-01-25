import React from 'react'
import './informationsTop.scss'

function InformationsTop(props){
  return (
    <>
        <div className="box-header">
          <div className="box-img">
            <img className="img-header" src ={props.img}/>
          </div>
          <span className="text-header">{props.text} <span className="text-header-strong">{props.textStrong}</span></span>
        </div>
    </>
  )
}

export default InformationsTop;