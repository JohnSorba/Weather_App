function CurrentWeather({ weather, tempUnit, fahrenheit, celsius }) {
  const { weather: weatherInfo, wind, name, main, sys, dt, clouds } = weather;
  const today = new Date(dt * 1000).toLocaleDateString();

  const temperature =
    tempUnit === "F" ? fahrenheit(main.temp) : celsius(main.temp);

  const minTemp =
    tempUnit === "F" ? fahrenheit(main.temp_min) : celsius(main.temp_min);

  const maxTemp =
    tempUnit === "F" ? fahrenheit(main.temp_max) : celsius(main.temp_max);

  let icon = "";

  switch (weatherInfo[0].description) {
    case "light rain":
      icon = "🌧️";
      break;
    case "moderate rain":
      icon = "🌧️";
      break;
    case "clear sky":
      icon = "☀️";
      break;
    case "overcast clouds":
      icon = "☁️";
      break;
    case "scattered clouds":
      icon = "☁️";
      break;
    case "broken clouds":
      icon = "🌫️";
      break;
    case "few clouds":
      icon = "🌫️";
      break;
    default:
      icon = "🌤️";
  }

  return (
    <div className="current-weather-main">
      <h3>
        Today's Weather Details: <span>{today}</span>
      </h3>

      {name && (
        <p>
          <strong>
            {name}, {sys.country}
          </strong>
          , currently has <em>{weatherInfo[0].description}</em>
        </p>
      )}

      <div className="current-weather">
        <span className="icon">{icon}</span>
        <div>
          <p className="big-temp">{temperature}</p>
          <p className="small-temp">
            {minTemp}&deg; / {maxTemp}&deg;
          </p>
        </div>
        <div className="wind-speed">
          <span>
            💨 {wind.speed}
            <span className="small-txt">mph</span>
          </span>
          <span>
            ☔ {clouds.all}
            <span className="small-txt">%</span>
          </span>
          <span>
            💧 {main.humidity}
            <span className="small-txt">%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
// id, timezone, base, visibility

// data needed for current weather
/*
 - temperature in degrees celsius [main.temp]
 -- high temp / low temp
 - wind speed (8mph) [wind]
 - rain (0%)
 - humidity (80%) [main]

 moderate rain 🌧️
 clear sky 
 light rain
 overcast clouds 
 few clouds
*/
