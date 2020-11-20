import React from 'react';
import './forecast.css'

const WeekForecast = (props) => {
  console.log(props)

  return(
    <div className="day-card">
      <div>icon</div>
      <div classNmae="temp">
      <b className="solid-text">&#x2600; {props.temp.day}&deg;</b><br />
      <span className="solid-text">  &#x263E; {props.temp.eve}&deg;</span>
      </div>
      <span className="solid-text">&#x2691; {props.wind_speed} <sup>km/h</sup></span>
      {/* <em>{props.weather[0].description}</em> */}
      {props.rain&& (
        <div className="rain">
        <span className="solid-text">&#x2602; {props.rain}<sup>mm</sup></span>
        </div>
      )}
    </div>
  )
}

export default WeekForecast;