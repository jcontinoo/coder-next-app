import React, { useState } from 'react';
import { db } from '@/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';

const AdminEditModal = ({ product, onClose }) => {
  const [products, setProducts] = useState({ ...product })


  const handleFieldChange = (fieldName, value) => {
    setProducts((prevProduct) => ({
      ...prevProduct,
      [fieldName]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const docRef = doc(db, 'productos', product.slug);
      await updateDoc(docRef, products);
      console.log('Producto actualizado correctamente')
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-opacity-50 bg-gray-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-md">
        <div className="flex justify-between items-center mb-4 text-xl">
          <h2>Editar Producto</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            ID del producto
          </label>
          <input
            type="text"
            value={products.slug}
            onChange={(e) => handleFieldChange('slug', e.target.value)}
            className="mt-1 p-2 w-full border rounded-md mb-3"
          />
          <label className="block text-sm font-medium text-gray-600">
            Nombre de producto
          </label>
          <input
            type="text"
            value={products.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            className="mt-1 p-2 w-full border rounded-md mb-3"
          />

          <label className="block text-sm font-medium text-gray-600">
            Detalles
          </label>
          <input
            value={products.details}
            onChange={(e) => handleFieldChange('details', e.target.value)}
            className="mt-1 p-2 w-full border rounded-md mb-3"
          />
          <label className="block text-sm font-medium text-gray-600">
            Precio
          </label>
          <input
            type="number"
            value={products.price}
            onChange={(e) => handleFieldChange('price', e.target.value)}
            className="mt-1 p-2 w-full border rounded-md mb-3"
          />

          <label className="block text-sm font-medium text-gray-600">
            Stock
          </label>
          <input
            type="number"
            value={products.inStock}
            onChange={(e) => handleFieldChange('inStock', e.target.value)}
            className="mt-1 p-2 w-full border rounded-md mb-3"
          />

          <label className="block text-sm font-medium text-gray-600">
            Tipo
          </label>
          <input
            type="text"
            value={products.type}
            onChange={(e) => handleFieldChange('type', e.target.value)}
            className="mt-1 p-2 w-full border rounded-md mb-3"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={handleSaveChanges} className="bg-blue-500 text-white p-2 rounded-md mr-2">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminEditModal;
