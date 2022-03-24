import React from "react";
import "../navbar/navbar-styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__menu">
        <ul className="nav__menu__list">
          <li className="nav__menu__item">
            <Link to="/accordion"> Accordion</Link>
          </li>
          <li className="nav__menu__item">
            <Link to="/search"> Accordion</Link>
          </li>
          <li className="nav__menu__item">Dummy</li>
          <li className="nav__menu__item">Dummy</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
