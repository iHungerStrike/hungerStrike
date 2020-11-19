import React from 'react';
import './forecast.css'

const WeekForecast = (props) => {
  console.log(props)
  return(
    <div className="day-card">
      <div>icon</div>
      <div classNmae="temp">
      <b>&#x2600; {props.temp.day}</b>
      <p>&#x263E; {props.temp.eve}</p>
      </div>
      <p>&#9872; {props.wind_speed} km/h</p>
      {/* <em>{props.weather[0].description}</em> */}
      {props.rain&& (
        <div className="rain">
        <p>&#x2602; {props.rain}mm</p>
        </div>

      )}
    </div>
  )
}

export default WeekForecast;