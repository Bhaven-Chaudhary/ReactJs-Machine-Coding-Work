import { useEffect, useRef, useState } from "react";
import styles from "./InfiniteScroll.module.css";

export default function InfiniteScroll() {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const observerRef = useRef(null);
  const containerRef = useRef(null);

  //Initial fetch
  useEffect(() => {
    fetchPokemon();
  }, []);

  //Intersection Observer
  useEffect(() => {
    if (!observerRef.current) return;

    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && nextUrl && !loading) {
          fetchPokemon();
        }
      },
      { threshold: 1, root: containerRef.current }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [nextUrl, loading]);

  async function fetchPokemon() {
    if (!nextUrl || loading) return;

    setLoading(true);
    setError(false);

    try {
      let response = await fetch(nextUrl);
      if (!response.ok) throw new Error(response);
      let data = await response.json();
      setPokemon((prev) => [...prev, ...data.results]);
      setNextUrl(data.next);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.pokemonContainer} ref={containerRef}>
      <ul>
        {pokemon.map((item, index) => (
          <li key={item.name + index}>{item.name}</li>
        ))}
      </ul>

      {loading && <span>Loading...</span>}
      {error && (
        <div>
          <p>Error loading more</p>
          <button onClick={fetchPokemon}>Retry</button>
        </div>
      )}
      {!nextUrl && !loading && <span>All Pokémon loaded!</span>}

      <div ref={observerRef} style={{ height: "1px" }}></div>
    </div>
  );
}
