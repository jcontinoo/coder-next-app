"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminTable from '@/components/admin/AdminTable';
import AdminEditModal from '@/components/admin/AdminEditModal';
import LogoutButton from '@/components/admin/LogoutButton';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase/config';

const getProducts = async () => {
  const productRef = collection(db, 'productos');
  const querySnapshot = await getDocs(productRef);

  return querySnapshot.docs.map(docSnapshot => ({ ...docSnapshot.data(), id: docSnapshot.id }));
};

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const items = await getProducts();
      setProductos(items);
    };

    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    console.log('Editar:', product);
    setSelectedProduct(product);
    setIsModalOpen(true);

  };

  const handleDelete = async(slug) => {
    console.log('Eliminar:', slug);

    try {
      const productRef = doc(db, 'productos', slug);
      await deleteDoc(productRef);
      const updatedProducts = await getProducts();
      setProductos(updatedProducts);
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="flex justify-between items-center mt-6 ml-10">
        <Link href="/admin/create" className="bg-blue-700 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-800">
          Agregar un producto
        </Link>
        <hr />
        <LogoutButton />
      </div>

      <div className="container mx-auto p-4">
        <AdminTable products={productos} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      {isModalOpen && (
        <AdminEditModal product={selectedProduct} onClose={closeEditModal} />
      )}
    </>
  );
};

export default Admin;
