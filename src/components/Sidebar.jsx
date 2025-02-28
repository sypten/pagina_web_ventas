import React from 'react';
import './Sidebar.css';

function Sidebar() {
  // Categorías de ejemplo para una papelería
  const categories = [
    "Libretas y Cuadernos",
    "Plumas y Lápices",
    "Organizadores",
    "Artículos de Oficina",
    "Accesorios Escolares"
  ];

  return (
    <aside className="sidebar">
      <h2>Categorías</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
