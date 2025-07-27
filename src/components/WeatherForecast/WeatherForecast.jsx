import React from 'react'
import WeatherData from './WeatherData';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css'

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
    return (
      <div className="weather">
        <WeatherData day={day} conditions={conditions} time={time} />
        <WeatherIcon img={img} imgAlt={imgAlt} />
      </div>
    );
  };
  
  export default WeatherForecast;