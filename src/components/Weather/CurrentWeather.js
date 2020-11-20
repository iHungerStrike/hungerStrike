import React from 'react';
import axios from 'axios';
import bluesky from './videos/blue-sky-timelaps.mov';
import raindrops from './videos/raindrops-on-glass.mov';
import moreraindrops from './videos/Raindrops-slowmo.mp4';
import skyandclouds from './videos/Sky-and-Clouds-Timelapse.mov';
import skyandcloudslapse from './videos/sky-and-clouds.mp4';
import thunder from './videos/thunder.mp4';
import bgdefault from './videos/defaultbg.jpg';
import CurrentWeatherTemplate from './CurrentWeatherTemplate';
import { Container, Col, Row } from 'react-bootstrap';
import './CurrentWeather.css';
import Forecast from './Forecast'

// API call: http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}

const apiKey = '6c34f050a44b39df328185e4b916581a';


const CurrentWeather = () => {
    const [currentLocation, setCurrentLocation] = React.useState({});
    const [currentWeather, setCurrentWeather] = React.useState([]);
    const [lon, setLon] = React.useState()
    const [lat, setLat] = React.useState()
    
    const handleLocationInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCurrentLocation((prevState) => ({ ...prevState, [name]: value }));
    }
    
    const getIcon = (tempWeather) => {
      // console.log(tempWeather)
      let rID = tempWeather.id;
      // console.log(rID);
      let icons;
        switch (true) {
          case (rID >= 200 && rID < 232):
            icons = {icon: 'wi wi-day-thunderstorm', backgrnd: thunder};
            break;
          case (rID >= 300 && rID <= 321):
            icons = {icon: 'wi wi-day-sleet', backgrnd: moreraindrops};
            break;
          case (rID >= 500 && rID <= 521):
            icons = {icon: 'wi wi-day-storm-showers', backgrnd: raindrops};
            break;
          case (rID >= 600 && rID <= 622):
            icons = {icon: 'wi wi-day-snow', backgrnd: skyandcloudslapse};
            break;
          case (rID >= 701 && rID <= 781):
            icons = {icon: 'wi wi-day-fog', backgrnd: skyandclouds};
            break;
          case (rID === 800):
            icons = {icon: 'wi wi-day-sunny', backgrnd: bluesky};
            break;
          case (rID >= 801 && rID <= 804):
            icons = {icon: 'wi wi-day-fog', backgrnd: skyandcloudslapse};
            break;
          default:
            icons = {icon: 'wi wi-day-fog', backgrnd: skyandcloudslapse};
        }
        return icons;
  }
    // Lon Lat Call for 7 days forecast https://api.openweathermap.org/data/2.5/onecall?lat=51.51&lon=-0.13&units=metric&exclude=current,minutely,hourly&appid=6c34f050a44b39df328185e4b916581a
    const fetchWeather = (event) => {
      event.preventDefault();
      // console.log(currentLocation.city)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${currentLocation.city}&units=metric&appid=${apiKey}`)
          .then(response => {
            let temperature = response.data.main;
            let weather = response.data.weather[0];
            let tempWeather = Object.assign(temperature, weather);
            setLon(response.data.coord.lon);
            setLat(response.data.coord.lat);
            console.log(tempWeather)

              if(currentLocation.city !== ''){
                  let permaWeather = Object.assign(tempWeather, getIcon(tempWeather), currentLocation);
                  // console.log(permaWeather);
                  setCurrentWeather([permaWeather]);
              }
          })
          .catch((err) => {
            alert('Please provide a valid City or Country.');
            // console.error(err.response.data);
          })
    }
    
    return (
        <div>
          <Container className='mt-5'>
          <img src={bgdefault}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        left: '50%',
                        top: '50%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '-1'
                    }}
                />
            <Row>
              <Col className='md-2'>
                <form onSubmit={fetchWeather}>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    textAlign: 'center',
                    border: '0',
                    borderBottom: '2px solid whitesmoke',
                    borderRadius: '0',
                    fontSize: '20px'
                  }}
                  placeHolder='Where are you now?'
                  className='form-control'
                  className='formz'
                  autoComplete='off'
                  type='text'
                  name='city'
                  value={currentLocation.city}
                  onChange={handleLocationInput}
                />
                </form>
              </Col>
              {/* <Col className='md-2'>
                <Button className='text-white' style={{fontSize: '20px'}} onClick={fetchWeather}>Get Weather</Button>
              </Col> */}
            </Row>  
          </Container>
          <Container className='mt-5'>
            {currentWeather.map((details, index) => {
              return (
                <div>
                        <CurrentWeatherTemplate {...details} key={index} cityName={details.city} icon={details.icon} backgrnd={details.backgrnd}/>
                    </div>
                )
              })}
          </Container>
          <Container className='mt-5'>
            <Forecast lon={lon} lat={lat} />
          </Container>
        </div>
    )
}

export default CurrentWeather