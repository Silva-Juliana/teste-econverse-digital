import React from 'react'
import '../modal/modal.scss'

function Modal({ id= 'modal' , onClose = () => {}, children}){
    const handleOutsideClick = (e) => {
        if(e.target.id == id) onClose()
    }

    return(
        <>
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="container-modal">
                <button className="close" onClick={onClose}>X</button>
                <div className="contant">{children}</div>
            </div>
        </div>
        </>
    )
}
export default Modal;