import React from 'react'
import classes from './MenuCard.module.css'
function MenuCard(props) {
  return (
    <div className={classes.menuCard} style={props.darkCard?{backgroundColor:'#323840'}:null}>
        <img 
    
        src={props.image} alt={`${props.name} image`}/>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <button onClick={props.orderClick}>Order</button>
    </div>
  )
}

export default MenuCard