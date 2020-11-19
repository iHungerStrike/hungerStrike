import React from 'react';
import axios from 'axios';
import './forecast.css'
import WeekForecast from './WeekForecast';

const apiKey = '6c34f050a44b39df328185e4b916581a';
const Forecast = () => {

  const [currentLocation, setCurrentLocation] = React.useState({});
  const [forecast, setForecast] = React.useState([]);

  const fetchForecast = (event) => {
    event.preventDefault();
    console.log(currentLocation.city)
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${currentLocation.city}&units=metric&appid=${apiKey}`)
      .then(response =>{
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&exclude=current,minutely,hourly&appid=${apiKey}`)
        .then(response => setForecast(response.data.daily))
      })
  }

  const handleLocationInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCurrentLocation((prevState) => ({ ...prevState, [name]: value }));
}
  
  return(
    <div className="weather-container">
      <form onSubmit={fetchForecast}>
      <input className="current-location" type='text' name='city' value={currentLocation.city} onChange={handleLocationInput}/>
      </form>
      <div className="week-container">
        {forecast.map((day, index) => 
          <WeekForecast index={index} {...day} />
        )}
      </div>
    </div>
  )
}

export default Forecast
