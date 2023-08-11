function Day({ day, tempUnit, fahrenheit, celsius }) {
  const { dt, main, dt_txt, pop } = day;

  // const date = new Date(dt * 1000).toLocaleDateString();
  const dayDate = new Date(dt * 1000);
  let weekday = dayDate.getDay();

  const weekdays = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  for (let i = 0; i < weekdays.length; i++) {
    if (weekday === i) {
      weekday = weekdays[i];
    }
  }

  if (
    dt_txt.endsWith("00:00:00") ||
    dt_txt.endsWith("03:00:00") ||
    dt_txt.endsWith("9:00:00") ||
    dt_txt.endsWith("12:00:00") ||
    dt_txt.endsWith("15:00:00") ||
    dt_txt.endsWith("18:00:00") ||
    dt_txt.endsWith("21:00:00")
  )
    return null;

  const minTemp =
    tempUnit === "F" ? fahrenheit(main.temp_min) : celsius(main.temp_min);

  const maxTemp =
    tempUnit === "F" ? fahrenheit(main.temp_max) : celsius(main.temp_max);

  return (
    <li className="forecast-weather">
      <p>🌧️ {Math.round(pop * 100)}%</p>
      <p>
        {minTemp}° /{"  "}
        {maxTemp}°
      </p>
      <p>{weekday}</p>
    </li>
  );
}

export default Day;

/*
- symbol (cloud)
- temp high / temp low
- date (in day format)
*/
