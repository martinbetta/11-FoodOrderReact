import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
return <div className={classes.backdrop} onClick={props.onClosed}></div>


}

const ModalOverlay = props => {

    return<div className={classes.modal}> 
    <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElem = document.getElementById('overlays');


const Modal = props => {

    return(
    <>
    {ReactDOM.createPortal(<Backdrop onClosed={props.onClosed}/>, portalElem ) }
    {ReactDOM.createPortal(<ModalOverlay> {props.children}</ModalOverlay>,portalElem)}

        {/* <Backdrop/>
        <ModalOverlay/> sin Portal*/}
    </>
)}

export default Modal;