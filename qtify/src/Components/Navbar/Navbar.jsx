import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.css";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/"></Link>
      <Logo />
      <SearchBar placeholder="Search a album of your choice" />
    <Button text="Give Feedback" />
    
    </nav>
  );
};

export default Navbar;