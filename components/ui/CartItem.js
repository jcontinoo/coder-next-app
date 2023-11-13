"use client"
import React from 'react';
import Image from 'next/image';

const CarritoItem = ({ product, amount, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="border p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={product.image} alt={product.name} width={50} height={50} className="rounded-md" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.details}</p>
          </div>
        </div>
        <button onClick={onDelete} className="text-red-500">Eliminar</button>
      </div>
      <p className="mt-2">Precio: ${product.price}</p>
      <div className="flex items-center mt-2">
        <button onClick={onDecrement} className="px-2 py-1 border rounded">-</button>
        <p className="mx-2">{amount}</p>
        <button onClick={onIncrement} className="px-2 py-1 border rounded">+</button>
      </div>
    </div>
  );
};

export default CarritoItem;
