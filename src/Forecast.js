import { useEffect, useState } from "react";
import Day from "./Day";

function Forecast({ location, tempUnit, fahrenheit, celsius }) {
  const [forecast, setForecast] = useState({});
  const { list } = forecast;

  useEffect(
    function () {
      async function fetchDaily() {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=64b21f3e1bac2b2f4ec7d71942e8cbc4`
        );
        const data = await res.json();
        setForecast(data);
      }
      fetchDaily();
    },
    [location]
  );

  if (!forecast.list) {
    return null;
  }

  return (
    <ul>
      <h2>5-Day Forecast</h2>
      <div className="forecast">
        {list.map((day) => (
          <Day
            day={day}
            key={day.dt}
            tempUnit={tempUnit}
            fahrenheit={fahrenheit}
            celsius={celsius}
          />
        ))}
      </div>
    </ul>
  );
}

export default Forecast;
