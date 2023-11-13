"use client"
import React from 'react';
import Image from 'next/image';

const AdminTableRow = ({ product, onEdit, onDelete }) => {
  return (
    <tr className="border-b">
      <Image
          src={product.image}
          alt={product.name}
          width={60}
          height={60}
          className="object-cover rounded-full"
        />
        <td className="p-2 bg-gray-100 sm:bg-gray-200">{product.name}</td>
        <td className="p-2 bg-gray-200 sm:bg-gray-100">{product.type}</td>
        <td className="p-2 bg-gray-100 sm:bg-gray-200">${product.price}</td>
        <td className="p-2 bg-gray-200 sm:bg-gray-100">{product.details}</td>
        <td className="p-2 bg-gray-100 sm:bg-gray-200">{product.slug}</td>
        <td className="p-2 bg-gray-200">
          <button onClick={() => onEdit(product)} className="text-blue-600 hover:underline">
            Editar
          </button>
          <button onClick={() => onDelete(product.slug)} className="text-red-600 hover:underline ml-2">
            Eliminar
          </button>
      </td>
    </tr>
  );
};

export default AdminTableRow;
