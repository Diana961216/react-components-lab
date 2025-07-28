import React from 'react';
import WeatherData from './WeatherData';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
      <WeatherData forecast={forecast} />
      <WeatherIcon forecast={forecast} />
    </div>
  );
};

export default WeatherForecast;