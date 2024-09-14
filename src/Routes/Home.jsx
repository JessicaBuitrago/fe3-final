import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import Favs from './Favs'; // Asegúrate de importar el componente Favs
import './Home.css'; // Importa el CSS para estilos adicionales si es necesario

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="home">
      <div className="card-grid">
        {cards.map((card) => (
          <Card 
            key={card.id} 
            name={card.name} 
            username={card.username} 
            id={card.id} 
          />
        ))}
      </div>

      {/* Renderiza el componente Favs y pasa los datos de cards */}
      <Favs users={cards} />
    </main>
  );
};

export default Home;
