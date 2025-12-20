import { useState } from "react";

export default function Autocomplete({ label, options = [] }) {
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  //   const [filteredValue, setFilteredValue] = useState(options);

  let filteredValue = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleInputChange(e) {
    let value = e.target.value;
    setSearchValue(value);
  }

  function handleOptionSelect(label) {
    setSearchValue(label);
    setShowDropdown(false);
  }

  return (
    <div className=" m-5 mt-10">
      <h2>{label}</h2>
      <input
        type="text"
        value={searchValue}
        className="border-1 mt-5 mb-5 w-full"
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
      ></input>
      {showDropdown && filteredValue.length > 0 && (
        <ul>
          {filteredValue.map((option) => (
            <li
              className="border-1 w-full"
              key={option.value}
              onMouseDown={() => handleOptionSelect(option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
