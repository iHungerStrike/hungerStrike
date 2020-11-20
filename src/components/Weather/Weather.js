import React from 'react';
import CurrentWeather from './CurrentWeather';
// import Forecast from './Forecast';
import './forecast.css'
import 'weather-icons/css/weather-icons.css';

const Weather = () => {
    return (
        <div className="weather">
            <CurrentWeather />
        </div>
    )
}

export default Weather
