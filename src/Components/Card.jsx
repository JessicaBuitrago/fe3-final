import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import doctor from "../../public/images/doctor.jpg";
import './Card.css'; // Asegúrate de que el CSS esté importado

const Card = ({ name, username, id }) => {
  // Estado para manejar si la tarjeta está marcada como favorita
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate(); // Hook para la navegación

  // Efecto para verificar si el item ya está en favoritos al cargar el componente
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log("Aquo esta", favorites)
    if (favorites.includes(id)) {
      setIsFavorite(true);
    }
  }, [id]);

  // Maneja el clic en el botón de favorito
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Detiene la propagación del evento al hacer clic en el botón
    setIsFavorite(!isFavorite);

    // Almacena en el localStorage si es necesario
    if (!isFavorite) {
      // Añadir a favoritos
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
    } else {
      // Eliminar de favoritos
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const updatedFavorites = favorites.filter(favoriteId => favoriteId !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  // Maneja el clic en la tarjeta para redirigir a la página de detalles
  const handleCardClick = () => {
    navigate(`/detail/${id}`); // Redirige a la página de detalles con el id del dentista
  };

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img src={doctor} alt="Doctor" className="card-img" />
      <h2>{name}</h2>
      <p>Username: {username}</p>
      <p>ID: {id}</p>
      <button 
        className={`fav-button ${isFavorite ? 'fav-button-active' : ''}`} 
        onClick={handleFavoriteClick}
      >
        {isFavorite ? '🌟' : '⭐'}
      </button>
    </div>
  );
};

export default Card;
