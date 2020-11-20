import React from 'react';
import axios from 'axios';
import './forecast.css'
import WeekForecast from './WeekForecast';

const apiKey = '6c34f050a44b39df328185e4b916581a';
const Forecast = (props) => {

  const [forecast, setForecast] = React.useState([]);

  const fetchForecast = () => {
    console.log("coords:", props.lat, props.lon)
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=metric&exclude=current,minutely,hourly&appid=${apiKey}`)
        .then(response => setForecast(response.data.daily))
      }
  
  React.useEffect(() => 
    fetchForecast(), [props.lat, props.lon])

  return(
    <div className="weather-container">
      {/* <form onSubmit={fetchForecast}>
      <input className="current-location" type='text' name='city' value={currentLocation.city} onChange={handleLocationInput}/>
      </form> */}
      <div className="week-container">
        {forecast.map((day, index) => 
          <WeekForecast index={index} {...day} />
        )}
      </div>
    </div>
  )
}

export default Forecast
