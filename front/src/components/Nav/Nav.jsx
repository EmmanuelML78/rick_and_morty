import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import na from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const location = useLocation();
  
  if (location.pathname === "/about") {
    return null;
  }

  return (
    <nav className={na.nav}>
      <Link to='/'>
        <button className={na.btnCartoon}>Logout</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link to='/home'>
        <button className={na.btnCartoon}>Home</button>
      </Link>
      <Link to='/favorites'>
        <button className={na.btnCartoon}>Favorites</button>
      </Link>
      <Link to='/about'>
        <button className={na.btnCartoon}>About</button>
      </Link>
    </nav>
  );
};

export default Nav;
