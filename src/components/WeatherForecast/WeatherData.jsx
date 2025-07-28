import React from 'react';

const WeatherData = ({forecast}) => {
  const { day, conditions, time } = forecast;
  return (
    <>
      <h2>{day}</h2>
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </>
  );
};

export default WeatherData;