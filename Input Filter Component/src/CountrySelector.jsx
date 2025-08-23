import { useState } from "react";

export default function CountrySelector({ items, placeholder, onSelect }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredValue, setFilteredCountries] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleInputChange(event) {
    let value = event.target.value;
    setInputValue(value);
    setActiveIndex(-1);

    if (value.trim() === "") {
      setFilteredCountries([]);
      setShowDropdown(false);
      return;
    }

    const filtered = items.filter((country) =>
      country.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCountries(filtered);
    setShowDropdown(true);
  }

  function handleItemClick(country) {
    setInputValue(country);
    setFilteredCountries([]);
    setShowDropdown(false);
    onSelect(country);
  }

  function handleKeyDown(event) {
    console.log(event);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prevValue) => {
        return prevValue < filteredValue.length - 1 ? prevValue + 1 : 0;
      });
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prevValue) => {
        return prevValue > 0 ? prevValue - 1 : filteredValue.length - 1;
      });
    }
    if (event.key === "Enter") {
      event.preventDefault();
      handleItemClick(filteredValue[activeIndex]);
      setActiveIndex(-1);
    }
  }

  return (
    <>
      <div className="container">
        <label>Select Country </label>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
          onKeyDown={handleKeyDown}
        />
        {showDropdown && filteredValue.length > 0 && (
          <ul className="ulStyle">
            {filteredValue.map((country, index) => (
              <li
                key={country + index}
                onMouseDown={() => handleItemClick(country)}
                className={`${activeIndex === index ? "active" : ""}`}
              >
                {country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
