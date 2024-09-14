// src/pages/Fav.js
import React, { useState, useEffect } from 'react';
import Card from '../Components/Card'; // Asegúrate de que la ruta sea correcta

const Fav = () => {
  const [favorites, setFavorites] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    // Función para obtener todos los doctores de la API
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setAllDoctors(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const favoritesIds = JSON.parse(localStorage.getItem('favorites')) || [];
    // Filtrar los doctores destacados basados en los IDs almacenados en localStorage
    setFavorites(allDoctors.filter(doctor => favoritesIds.includes(doctor.id)));
  }, [allDoctors]);

  return (
    <div className="favorites">
      <h1>Doctores Destacados</h1>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map(doctor => (
            <Card 
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              username={doctor.username}
            />
          ))
        ) : (
          <p>No hay doctores destacados.</p>
        )}
      </div>
    </div>
  );
};

export default Fav;
