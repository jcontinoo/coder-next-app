"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import AdminEditModal from './AdminEditModal';

const AdminTableRow = ({ product, onDelete }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const handleDelete = async() => {
    closeDeleteModal();
    await onDelete(product.slug);
    window.location.reload()
  };

  return (
    <tr className="border-b">
      <Image
        src={product.image}
        alt={product.name}
        width={60}
        height={60}
        className="object-cover rounded-full" />
      <td className="p-2 bg-gray-100 sm:bg-gray-200">{product.name}</td>
      <td className="p-2 bg-gray-200 sm:bg-gray-100">{product.type}</td>
      <td className="p-2 bg-gray-100 sm:bg-gray-200">${product.price}</td>
      <td className="p-2 bg-gray-200 sm:bg-gray-100">{product.details}</td>
      <td className="p-2 bg-gray-100 sm:bg-gray-200">{product.slug}</td>
      <td className="p-2 bg-gray-200">
        <button onClick={() => openEditModal(product)} className="text-blue-600 hover:underline">
          Editar
        </button>
        {isEditModalOpen && <AdminEditModal product={product} onClose={closeEditModal} />}
        <button onClick={openDeleteModal} className="text-red-600 hover:underline ml-2">
          Eliminar
        </button>
        {isDeleteModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg max-w-xs w-full shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2>Confirmar Eliminación</h2>
                <button onClick={closeDeleteModal}>X</button>
              </div>
              <p>¿Estás seguro de que deseas eliminar este registro?</p>
              <div className="flex justify-end">
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2">
                  Eliminar
                </button>
                <button onClick={closeDeleteModal} className="ml-2">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default AdminTableRow;
