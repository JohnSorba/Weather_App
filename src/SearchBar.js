function SearchBar({ location, onSetLocation }) {
  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  const capitalFirstLetter = capitalize(location);

  function handleClick(e) {
    e.target.value = "";
  }

  return (
    <span>
      {" "}
      <input
        type="text"
        placeholder="Search Location..."
        value={capitalFirstLetter}
        onChange={(e) => onSetLocation(e.target.value)}
        onClick={handleClick}
      />
    </span>
  );
}

export default SearchBar;
