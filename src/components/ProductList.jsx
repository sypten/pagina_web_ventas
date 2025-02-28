// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ searchQuery }) {
  const products = [
    { 
      id: 1, 
      name: "Cuaderno espiral", 
      price: "$2.50", 
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300" 
    },
    { 
      id: 2, 
      name: "Lápices de colores", 
      price: "$3.00", 
      image: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300" 
    },
    { 
      id: 3, 
      name: "Plumones", 
      price: "$1.75", 
      image: "https://plus.unsplash.com/premium_photo-1724153088296-f2c46f792ce1?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300" 
    },
    { 
      id: 4, 
      name: "Archivador", 
      price: "$4.00", 
      image: "https://images.unsplash.com/photo-1569235186275-626cb53b83ce?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300" 
    },
    { 
      id: 5, 
      name: "Resaltadores", 
      price: "$1.50", 
      image: "https://images.unsplash.com/photo-1580567381231-95129c8aff42?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300" 
    },
    { 
      id: 6, 
      name: "Carpetas", 
      price: "$2.00", 
      image: "https://images.unsplash.com/photo-1600751550112-4209be589cbd?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300" 
    },
  ];

  // Filtrado de productos en base al searchQuery (ignora mayúsculas/minúsculas)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}

export default ProductList;
