import { useEffect, useState } from "react";
export default function PkSelect() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [abilities, setAbilities] = useState([])
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setIsLoading("Loading...");
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemon(data.results))
      .catch((error)=> setErrorMsg("Failed to load Pokémon"))
      .finally(() => {
        setIsLoading("");
      });
  }, []);

  function handleSelectPokemon(event) {
    setAbilities([])
   
    setSelectedPokemon(event.target.value)
  }

  useEffect(()=>{
    if(selectedPokemon.length > 0){
      setIsLoading("Loading abilities...")
      fetch(selectedPokemon)
      .then(response=> response.json())
      .then(data=> {
  
        let abilities = data.abilities.map(item=> item.ability.name);
        setAbilities(abilities)
      })
      .finally(()=>{
        setIsLoading("")
      })
    }

  },[selectedPokemon])

  return (
    <div>
      {/* <h1>Pokemon Select</h1> */}
      <div>{isLoading  && <span>{isLoading}</span>}</div>
      <div>{errorMsg  && <span>{errorMsg}</span>}</div>
      {!isLoading && !errorMsg && <div>
      <select value={selectedPokemon} onChange={handleSelectPokemon}>
        <option value="">Select Pokemon</option>
        {pokemon.map((item) => (
          <option key={item.name} value={item.url}>
            {item.name}
          </option>
        ))}
      </select>
      <div>Abilities: { abilities.length > 0 ? abilities.join(',') : "No abilities found"} </div>

      </div>}
    </div>
  );
}
