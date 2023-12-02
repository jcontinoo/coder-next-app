"use client"
import React from 'react';
import CarritoItem from '@/components/ui/CartItem';
import { useCartContext } from '@/contexts/CartContext';

const Carrito = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCartContext();

  const subtotal = cart.length > 0
    ? cart.reduce((acc, product) => acc + (product.price || 0) * (product.quantity || 1), 0)
    : 0;
  const total = subtotal;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Resumen</h2>
      {cart.map((product) => (
        <CarritoItem
          key={product.slug}
          product={product}
          amount={product.quantity}
          onIncrement={() => incrementQuantity(product.slug)}
          onDecrement={() => decrementQuantity(product.slug)}
          onDelete={() => removeFromCart(product.slug)}
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
