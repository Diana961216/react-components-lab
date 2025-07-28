import React from 'react';

const WeatherIcon = ({forecast}) => {
  const { img, imgAlt } = forecast;
  return <img src={img} alt={imgAlt} />;
};

export default WeatherIcon;