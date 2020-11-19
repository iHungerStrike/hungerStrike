import React from 'react';

const CurrentWeatherTemplate = (props) => {
    const { temp, temp_min, temp_max, cityName, description, icon } = props;
    console.log(`../../icons/${icon}`)
    return (
        <div className='container'>
            <div className='cards'>
                <h1>{cityName}</h1>
                <h5 className='py-4'>
                <img src={icon && require(`../../icons/${icon}`)} alt={description}/>
                </h5>
                <h1 className='py-2'>{temp}&deg;</h1>
                <h3>
                    <span className='px-4'>{temp_min}&deg;</span>
                    <span className='px-4'>{temp_max}&deg;</span>
                </h3>
                <h4 className='py-3'>{description.charAt(0).toUpperCase() + description.slice(1)}</h4>
            </div>
        </div>
    )
}

export default CurrentWeatherTemplate
