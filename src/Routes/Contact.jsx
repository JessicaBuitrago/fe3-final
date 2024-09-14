import React, { useState } from 'react';
import './Contact.css'; // Importa el archivo CSS para aplicar estilos al formulario de contacto

// Componente de formulario de contacto
const Contact = () => {
  // Estados para manejar los datos del formulario y mensajes
  const [name, setName] = useState(''); // Estado para el nombre del usuario
  const [email, setEmail] = useState(''); // Estado para el correo electrónico del usuario
  const [error, setError] = useState(''); // Estado para mensajes de error
  const [successMessage, setSuccessMessage] = useState(''); // Estado para mensajes de éxito

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario (recarga de página)
    
    // Verifica que el nombre tenga más de 5 caracteres y que el correo electrónico tenga un formato válido
    if (name.length > 5 && /\S+@\S+\.\S+/.test(email)) {
      // Muestra un mensaje de éxito si la validación es correcta
      setSuccessMessage(`Gracias ${name}, te contactaremos cuando antes vía mail.`);
      setError(''); // Limpia el mensaje de error
    } else {
      // Muestra un mensaje de error si la validación falla
      setError('Por favor verifique su información nuevamente');
      setSuccessMessage(''); // Limpia el mensaje de éxito
    }
  };

  return (
    <div className="contact-container"> {/* Contenedor principal del formulario de contacto */}
      <h1>Contacto</h1> {/* Título del formulario */}
      <form onSubmit={handleSubmit}> {/* Maneja el envío del formulario */}
        <div>
          <label>Nombre Completo:</label> {/* Etiqueta para el campo de nombre */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Actualiza el estado 'name' cuando cambia el valor del campo
            placeholder="Ingrese su nombre completo"
            className="input-field" // Clase CSS para aplicar estilos al campo de entrada
          />
        </div>
        <div>
          <label>Email:</label> {/* Etiqueta para el campo de correo electrónico */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado 'email' cuando cambia el valor del campo
            placeholder="Ingrese su email"
            className="input-field" // Clase CSS para aplicar estilos al campo de entrada
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button> {/* Botón para enviar el formulario */}
      </form>
      {error && <p className="error">{error}</p>} {/* Muestra el mensaje de error si existe */}
      {successMessage && <p className="success">{successMessage}</p>} {/* Muestra el mensaje de éxito si existe */}
    </div>
  );
};

export default Contact; // Exporta el componente Contact para que pueda ser importado en otros archivos
