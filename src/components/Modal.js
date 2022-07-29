import React,{useState} from 'react'
import classes from './Modal.module.css';
function Modal(props) {
  const [modalShow,setModalShow] = useState(false)
  const modalShowHandler = ()=>{
    setModalShow(true)
    props.modal();
  }
  return (
    <div className={modalShow ? `${classes.modal} ${classes.modalShow}`: classes.modal}>
        <div className={classes.modalCard} style={
            props.theme? {backgroundColor:'#f0f8ff'}:{backgroundColor:'#24292d',color:'white'}
        }>
            <h2>🍲 Congrats your order {props.dishName} is placed</h2>
            <button onClick={modalShowHandler}>Close</button>
        </div>
    </div>
  )
}

export default Modal