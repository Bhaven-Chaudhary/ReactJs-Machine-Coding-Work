import "./App.css";
import CountrySelector from "./CountrySelector";
// https://chatgpt.com/share/68542743-0d18-8008-a805-951cf609255a : Question no 2
const countries = [
  "India",
  "Indonesia",
  "Ireland",
  "Italy",
  "Iceland",
  "Iran",
  "Iraq",
  "Israel",
  "Ivory Coast",
];

function App() {
  function handleCountryClick(country) {
    console.log(country);
  }

  return (
    <>
      <CountrySelector
        items={countries}
        placeholder="Start typing to select country"
        onSelect={handleCountryClick}
      ></CountrySelector>
    </>
  );
}

export default App;
