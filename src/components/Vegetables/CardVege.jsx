import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';


// export default class Game extends React.Component {
function CardVege (props){
  // render() {
    return (
      <div className = "card"> 
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.name}/>
      </div>
    )
  }
// }

export default CardVege