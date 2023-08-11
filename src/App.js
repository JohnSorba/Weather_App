import { useEffect, useState } from "react";

import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";
import Degree from "./components/Degree";
// import DayForecast from "./DayForecast";

const API_KEY = "64b21f3e1bac2b2f4ec7d71942e8cbc4";
// const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
// const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");
  const [tempUnit, setTempUnit] = useState("C");

  console.log(weatherData);

  function fahrenheit(temp) {
    return Math.round(((temp - 273.15) * 9) / 5 + 32);
  }
  function celsius(temp) {
    return Math.round(temp - 273.15);
  }

  useEffect(
    // },
    function () {
      if (location !== "" && location.length >= 1) {
        async function fetchWeatherData() {
          try {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
            );
            const data = await res.json();
            setWeatherData(data);
            console.log(data);
          } catch (error) {
            console.error("There was an error fetching the data");
          }
        }
        fetchWeatherData();
      }
    },
    [location]
  );

  return (
    <div className="app">
      <Header />
      {
        <>
          <span>Check out the weather in </span>
          <SearchBar location={location} onSetLocation={setLocation} />
        </>
      }

      {weatherData && weatherData.weather && (
        <>
          {/* <DayForecast /> */}
          <CurrentWeather
            weather={weatherData}
            tempUnit={tempUnit}
            fahrenheit={fahrenheit}
            celsius={celsius}
          />
          <Forecast
            location={location}
            tempUnit={tempUnit}
            fahrenheit={fahrenheit}
            celsius={celsius}
          />
          <Degree onSetTempUnit={setTempUnit} />
        </>
      )}
    </div>
  );
}

export default App;
