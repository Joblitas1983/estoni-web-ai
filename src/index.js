import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importa tus estilos globales aquí

// Crea el contenedor raíz
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
