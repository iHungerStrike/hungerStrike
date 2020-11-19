import React from 'react';
import axios from 'axios';
// import thunderstorm from '../../icons/wi-day-thunderstorm.svg';
// import sprinkle from '../../icons/wi-day-sprinkle.svg';
// import rain from '../../icons/wi-rain.svg';      
// import snow from '../../icons/wi-day-snow.svg';
// import clouds from '../../icons/wi-cloud.svg';
// import sunny from '../../icons/wi-day-sunny.svg';
import CurrentWeatherTemplate from './CurrentWeatherTemplate';

// API call: http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}

const apiKey = '6c34f050a44b39df328185e4b916581a';



const CurrentWeather = () => {
    const [currentLocation, setCurrentLocation] = React.useState({});
    const [currentWeather, setCurrentWeather] = React.useState([]);
    const handleLocationInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log('name: ', name, 'value: ', value)
        setCurrentLocation((prevState) => ({ ...prevState, [name]: value }));
    }
    
    const getIcon = (tempWeather) => {
      console.log(tempWeather)
      let rID = tempWeather.id;
      console.log(rID);
      let icons;
        switch (true) {
          case (rID >= 200 && rID < 232):
            icons = {icon: 'wi-day-thunderstorm.svg'};
            break;
          case (rID >= 300 && rID <= 321):
            icons = {icon: 'wi-day-sprinkle.svg'};
            break;
          case (rID >= 500 && rID <= 521):
            icons = {icon: 'wi-rain.svg'};
            break;
          case (rID >= 600 && rID <= 622):
            icons = {icon: 'wi-day-snow.svg'};
            break;
          case (rID >= 701 && rID <= 781):
            icons = {icon: 'wi-day-sunny.svg'};
            break;
          case (rID === 800):
            icons = {icon: 'wi-day-sunny.svg'};
            break;
          case (rID >= 801 && rID <= 804):
            icons = {icon: 'wi-cloud.svg'};
            break;
          default:
            icons = {icon: 'wi-rain.svg'};
        }
        return icons;
  }
    
    const fetchWeather = () => {
      console.log(currentLocation.city)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${currentLocation.city}&units=metric&appid=${apiKey}`)
          .then(response => {
            let temperature = response.data.main;
            let weather = response.data.weather[0];
            let tempWeather = Object.assign(temperature, weather);
            console.log(tempWeather)

              if(currentLocation.city !== ''){
                  let permaWeather = Object.assign(tempWeather, getIcon(tempWeather), currentLocation)
                  console.log(permaWeather);
                  setCurrentWeather([permaWeather]);
              }
          })
    }
    
    return (
        <div>
            <p>City:</p>
            <input type='text' name='city' value={currentLocation.city} onChange={handleLocationInput}/>
            {/* <p>Country:</p>
            <input type='text' name='country' value={currentLocation.country} onChange={handleLocationInput}/> */}
            <button onClick={fetchWeather}>Get Weather</button>
            {currentWeather.map((details, index) => {
                return (
                    <div>
                        <CurrentWeatherTemplate {...details} key={index} cityName={details.city} icon={details.icon}/>
                        {/* <img src={details.icon} /> */}
                    </div>
                )
            })}
        </div>
    )
}

export default CurrentWeather