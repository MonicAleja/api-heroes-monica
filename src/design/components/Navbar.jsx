import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/login", {
      replace: true
    });
  };

  return (
    <nav>
      <div className="navcontainer">
        <Link to={"/"}>
          <Logo />
        </Link>

        <NavLink
          className={({ isActive }) => `activo ${ isActive ? "activo" : ""}`}
          to="/inicio"
        >
          INICIO
        </NavLink>
        <NavLink
          className={({ isActive }) => `Activo ${isActive ? "inactivo" : ""}`}
          to="/marvel"
        >
          MARVEL
        </NavLink>
        <NavLink
          className={({ isActive }) => `Activo ${isActive ? "inactivo" : ""}`}
          to="/dc"
        >
          DC
        </NavLink>
        <button  onClick={Logout}>Salir 👉</button>
      </div>
    </nav>
  );
};

export default Navbar;
