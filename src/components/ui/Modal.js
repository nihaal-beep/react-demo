import { Fragment } from "react";
import ReactDOM from "react-dom"
import "./modal.css"

function Backdrop(props)
{
    return(
        <div className="backdrop" onClick={props.onHideCart}></div>
    )
}

function ModalOverlay(props)
{
    return<div className="modal">
        <div className="content">{props.children}</div>
    </div>
}

const portalLoc = document.getElementById('overlays')

function Modal(props)
{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart = {props.onHideCart} />,portalLoc )}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalLoc)}
            
        </Fragment>
    )
}

export default Modal;