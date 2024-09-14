// src/pages/Detail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'; // Importa el CSS para estilos adicionales si es necesario

const Detail = () => {
  const { id } = useParams(); // Obtiene el ID de los parámetros de la URL
  const [dentist, setDentist] = useState(null); // Estado para almacenar la información del dentista
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        setLoading(true); // Activa el estado de carga
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Maneja errores de la red
        }
        const data = await response.json();
        setDentist(data); // Actualiza el estado con la información del dentista
      } catch (error) {
        setError(error); // Actualiza el estado de error en caso de que ocurra uno
        console.error('Error fetching dentist:', error); // Maneja errores en caso de que la solicitud falle
      } finally {
        setLoading(false); // Desactiva el estado de carga
      }
    };

    fetchDentist(); // Llama a la función para obtener los datos
  }, [id]); // El hook depende del ID, se ejecuta cada vez que el ID cambia

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!dentist) return <div>Dentist not found</div>;

  return (
    <div className="detail">
      <h1>{dentist.name}</h1>
      <p><strong>Username:</strong> {dentist.username}</p>
      <p><strong>Email:</strong> {dentist.email}</p>
      <p><strong>Phone:</strong> {dentist.phone}</p>
      <p><strong>Website:</strong> <a href={`https://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
      <p><strong>Company:</strong> {dentist.company.name}</p>
    </div>
  );
}

export default Detail;
