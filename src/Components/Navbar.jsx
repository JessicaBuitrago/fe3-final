import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación
import './Navbar.css'; // Importa el archivo CSS para estilos adicionales

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Contenedor principal de la barra de navegación */}
      <div className="navbar-logo">
        <h1>Doctor Dentist</h1> {/* Logo o nombre de la aplicación */}
      </div>
      <ul className="navbar-links">
        {/* Enlaces de navegación. Usa <Link> en lugar de <a> para la navegación interna */}
        <li><Link to="/">Inicio</Link></li> {/* Enlace a la página de inicio */}
        <li><Link to="/favs">Doctores destacados</Link></li> {/* Enlace a la página de sobre nosotros */}
        <li><Link to="/contact">Contacto</Link></li> {/* Enlace a la página de contacto */}
      </ul>
    </nav>
  );
}

export default Navbar;
