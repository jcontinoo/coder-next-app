"use client"
import React, { useState } from 'react';
import AdminTable from '@/components/ui/AdminTable';
import mockData from '@/data/products';


const Admin = () => {
  const [productos, setProductos] = useState(mockData);

  const handleEdit = (product) => {
    console.log('Editar:', product);
  };

  const handleDelete = (slug) => {
    setProductos(productos.filter((product) => product.slug !== slug));
  };

  return (
    <div className="container mx-auto p-4">
      <AdminTable products={productos} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Admin;
