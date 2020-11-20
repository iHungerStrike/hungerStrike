import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'weather-icons/css/weather-icons.css';
const CurrentWeatherTemplate = (props) => {
    const { temp, temp_min, temp_max, cityName, description, icon, backgrnd } = props;
    return (
        <div className='container text-white'>
            <div className='cards'>
                <h1>{cityName}</h1>
                <video
                    autoPlay 
                    loop
                    muted
                    key={backgrnd}
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
                >
                    <source src={backgrnd} type='video/mp4' />
                </video>
                <h1 className='py-4 display-1'>
                <i className={icon} alt={description}/>
                </h1>
                <h1 className='py-2'>{Number(temp).toFixed(1)}&deg;</h1>
                <h2>
                    <span className='px-4 text-primary' style={{ webkitTextStroke: '1px #000000' }}>{Number(temp_min).toFixed(1)}&deg;</span>
                    <span className='px-4 text-danger' style={{ webkitTextStroke: '1px #000000' }}>{Number(temp_max).toFixed(1)}&deg;</span>
                </h2>
                <h4 className='py-3'>{description.charAt(0).toUpperCase() + description.slice(1)}</h4>
            </div>
        </div>
    )
}
export default CurrentWeatherTemplate;
