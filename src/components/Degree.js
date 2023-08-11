function Degree({ onSetTempUnit }) {
  return (
    <div className="degree">
      <button onClick={() => onSetTempUnit("C")}>&deg;C</button>|
      <button onClick={() => onSetTempUnit("F")}>&deg;F</button>
    </div>
  );
}

export default Degree;
