"use client"
import React, { useState } from 'react';
import CarritoItem from '@/components/ui/CartItem';
import mockData from '@/data/products';

const Carrito = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState(
    mockData.slice(0, 2).map((producto) => ({ ...producto, cantidad: 2 }))
  );

  const handleIncrement = (slug) => {
    setProductosEnCarrito((prevProductos) =>
      prevProductos.map((producto) =>
        producto.slug === slug ? { ...producto, cantidad: producto.cantidad + 1 } : producto
      )
    );
  };

  const handleDecrement = (slug) => {
    setProductosEnCarrito((prevProductos) =>
      prevProductos.map((producto) =>
        producto.slug === slug && producto.cantidad > 1
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      )
    );
  };

  const handleEliminar = (slug) => {
    setProductosEnCarrito((prevProductos) => prevProductos.filter((producto) => producto.slug !== slug));
  };

  const subtotal = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.price * producto.cantidad,
    0
  );
  const total = subtotal;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Resumen</h2>
      {productosEnCarrito.map((product) => (
        <CarritoItem
          key={product.slug}
          product={product}
          amount={product.cantidad}
          onIncrement={() => handleIncrement(product.slug)}
          onDecrement={() => handleDecrement(product.slug)}
          onEliminar={() => handleEliminar(product.slug)}
        />
      ))}
      <div className="border-2 border-blue-900 p-4 mt-10">
        <h3 className="text-xl font-semibold">Resumen de la Compra</h3>
        <p>Subtotal: ${subtotal}</p>
        <p>Total: ${total}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default Carrito;
