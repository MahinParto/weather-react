import React from "react";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h4>Weather in {props.weatherData.cityname}</h4>
      <ul>
        <li>Temperature: {props.weatherData.temperature}</li>
        <li>Description: {props.weatherData.description}</li>
        <li>Humidity: {props.weatherData.humidity}%</li>
        <li>Wind: {props.weatherData.windspeed}km/h</li>
        <li>
          <img src={props.weatherData.icon} alt="icon" />
        </li>
      </ul>
    </div>
  );
}
