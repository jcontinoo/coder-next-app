"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidadChange = (event) => {
    setCantidad(parseInt(event.target.value, 10));
  };

  const handleAgregarAlCarrito = () => {
    console.log(`Agregado al carrito: ${cantidad} ${product.name}(s)`);
  };

  return (
    <article className="basis-72 shadow-lg">
      <Image alt={product.name} src={`${product.image}`} width={288} height={288} />

      <div className="px-4 border-t border-gray-300">
        <h4 className="text-sm my-4">{product.name}</h4>
        <p className="text-2xl font-semibold">${product.price}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <label className="mr-2">Cantidad:</label>
            <select value={cantidad} onChange={handleCantidadChange} className="p-2 border rounded">
              {[1, 2, 3, 4, 5].map((cantidadOption) => (
                <option key={cantidadOption} value={cantidadOption}>
                  {cantidadOption}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleAgregarAlCarrito} className="bg-blue-700 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-800">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
