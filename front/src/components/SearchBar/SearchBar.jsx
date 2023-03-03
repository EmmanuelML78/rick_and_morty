import { useState } from "react";
import search from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div className="searh.lo">
      <input className={search.inp} type="search" value={character} onChange={handleChange} />
      <button className={search.btnCartoon} onClick={() => onSearch(character)}>Agregar</button>
    </div>
  );
}

export default SearchBar;
//