import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function Search() {
  let [input, setInput] = useState("");
  let [loaded, setloaded] = useState(false);
  let [weatherData, setWeatherData] = useState(null);

  function handleResponse(response) {
    setloaded(true);

    setWeatherData({
      cityname: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input === "") {
      alert("Enter city name");
    } else {
      let id = "e830c41cfe2d651a12717840a22adf28";
      let unit = "metric";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${id}&units=${unit}`;
      axios.get(url).then(handleResponse);
    }
  }

  function updateCity(event) {
    setInput(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter city " onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <Weather weatherData={weatherData} />
      </div>
    );
  } else {
    return <div className="Search">{form}</div>;
  }
}
