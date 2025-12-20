import { useState, useEffect } from "react";
import Autocomplete from "./Autocomplete";

export default function AcForm() {
  const [formData, setFormData] = useState([]);

  //to fetch data on load
  useEffect(() => {
    fetch(
      "https://api.mockfly.dev/mocks/d3753b2a-76d2-4cc5-b056-fdc2a65b833c/interview"
    )
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Ac Form 100</h1>
      <div>
        {formData.map((item) => {
          if (item.type === "choice-autocomplete") {
            return (
              <Autocomplete
                label={item.value}
                options={item.options}
                key={item.name}
              />
            );
          } else {
            return <div key={item.name}>Unsupported Component</div>;
          }
        })}
      </div>
    </>
  );
}
