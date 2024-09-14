import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer'; // Importa el componente Footer
import Navbar from './Components/Navbar'; // Importa el componente Navbar
import Home from './Routes/Home'; // Importa el componente Home
import Contact from './Routes/Contact'; // Importa el componente Contact
import Detail from './Routes/Detail'; // Importa el componente Detail, que muestra detalles basados en el ID
import Favs from './Routes/Detail';
// Componente principal de la aplicación
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Muestra la barra de navegación en todas las páginas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para el Home, la página principal */}
          <Route path="/contact" element={<Contact />} /> {/* Ruta para la página de Contacto */}
          <Route path="/detail/:id" element={<Detail />} /> {/* Ruta para los detalles del dentista, usando el ID */}
          <Route path="/favs" element={<Favs />} /> {/* Nueva ruta para favoritos */}
        </Routes>
        <Footer /> {/* Muestra el pie de página en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;
