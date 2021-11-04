import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Aplicación de Gestión de Libros</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Libros
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Añade Libro
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
