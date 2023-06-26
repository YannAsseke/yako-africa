import React from "react";

const Modal = ({open, onClose}) => {
    if(!open) return null
    return (
        <div className="overlay">
            <div className="modalContainer">
                <img src="assets/img/modal/intro-yako.png" alt="project-img" style={{ backgroundSize:"cover", backgroundPosition: "center" }}/>
                <div className="ModalRight">
                    <p className="closeBtn" onClick={onClose}>X</p>
                </div>
            </div>
        </div>
    )
}

export default Modal