"use client"
import React from 'react';
import Image from 'next/image';
import mockData from '@/data/products';

const ProductosDestacados = () => {
  const productosDestacados = mockData.slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Estos son nuestros items más vendidos:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productosDestacados.map((producto) => (
          <div key={producto.slug} className="border p-4 rounded-md items-center">
            <Image src={producto.image} alt={producto.name} width={200} height={200} className="mb-2 rounded-md ml-36" />
            <h3 className="text-xl font-semibold mb-2">{producto.name}</h3>
            <p className="text-gray-600">{producto.details}</p>
            <p className="mt-2">Precio: ${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosDestacados;
