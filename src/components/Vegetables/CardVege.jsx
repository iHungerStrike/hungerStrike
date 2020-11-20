import React from 'react'
import './styles.css'

// export default class Game extends React.Component {
function CardVege (props){
  // render() {
    return (
      <div className = "card-content"> 
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.name}/>
      </div>
    )
  }
// }

export default CardVege
