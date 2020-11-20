import React from 'react';
import './forecast.css'

const WeekForecast = (props) => {
  console.log(props)

  const days = ["Today", "Tomorrow", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  return(
    <div className="day-card">
      <h6>{days[props.index]}</h6>
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