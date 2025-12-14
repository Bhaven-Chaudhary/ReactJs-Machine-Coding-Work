import { useState, useEffect } from "react";

export default function StarWarPeople() {
  const [peopleData, setPeopleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    async function fetchPeople() {
      try {
        let tableData = [];

        let response = await fetch("https://swapi.dev/api/people/?format=json");
        let data = await response.json();

        for (let user of data.results) {
          let films = await Promise.all(
            user.films.map((film) =>
              fetch(film)
                .then((data) => data.json())
                .then((result) => result.title)
            )
          );

          let vehicles = await Promise.all(
            user.vehicles.map((vehicle) =>
              fetch(vehicle)
                .then((data) => data.json())
                .then((result) => result.name)
            )
          );

          tableData.push({
            name: user.name,
            films: films.join(","),
            vehicles: vehicles.join(","),
          });
        }

        setPeopleData(tableData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPeople();
  }, []);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {peopleData.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Vehicles</th>
              <th>Films</th>
            </tr>
          </thead>
          <tbody>
            {peopleData.map((data) => {
              return (
                <tr key={data.name}>
                  <td>{data.name}</td>
                  <td>{data.films}</td>
                  <td>{data.vehicles}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
