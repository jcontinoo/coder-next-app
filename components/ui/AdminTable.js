"use client"
import React from 'react';
import AdminTableRow from './AdminTableRow';

const AdminTable = ({ products, onEdit, onDelete }) => {
  return (
    <div>
    <table className="min-w-full bg-white border border-gray-300">
        <thead>
        <tr>
          <th className="p-2">Imagen</th>
          <th className="p-2">Nombre</th>
          <th className="p-2">Tipo</th>
          <th className="p-2">Precio</th>
          <th className="p-2">Detalles</th>
          <th className="p-2">Slug</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <AdminTableRow
            key={product.slug}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default AdminTable;
