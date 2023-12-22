"use client"
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '@/firebase/config';

const createProduct = async (product, file) => {
  const storageRef = ref(storage, product.slug)
  const fileSnapshot = await uploadBytes(storageRef, file)
  const fileUrl = await getDownloadURL(fileSnapshot.ref)

  const docRef = doc(db, "productos", product.slug)
  return setDoc(docRef, {
    ...product,
    image: fileUrl
  }).then(() => console.log("Producto Creado mi rey"))
}

const CreateForm = () => {
  const [product, setProduct] = useState({
    name: '',
    slug: '',
    details: '',
    price: 0,
    inStock: 0,
    type: '',
  });

  const [file, setFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await createProduct(product, file);
      setProduct({
        name: '',
        slug: '',
        details: '',
        price: 0,
        inStock: 0,
        type: '',
      });
      setFile(null);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Nombre de producto
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md mb-3"
            required
          />
          <label htmlFor="slug" className="block text-sm font-medium text-gray-600">
            ID de producto
          </label>
          <input
            type="text"
            name="slug"
            value={product.slug}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md mb-3"
            required
          />
          <label htmlFor="detail" className="block text-sm font-medium text-gray-600">
            Detalle o descripcion
          </label>
          <input
            type="text"
            name="details"
            value={product.details}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md mb-3"
            required
          />
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Precio
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md mb-3"
            required
          />
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Imagen
          </label>
          <input
            type="file"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md mb-3"
            required
          />
          <label htmlFor="inStock" className="block text-sm font-medium text-gray-600">
            Cantidad o Stock del producto
          </label>
          <input
            type="number"
            name="inStock"
            value={product.inStock}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md mb-3"
            required
          />
          <label htmlFor="type" className="block text-sm font-medium text-gray-600">
            Tipo o Categoria
          </label>
          <input
            type="text"
            name="type"
            value={product.type}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md mb-3"
            required
          />
        </div>

        <div className="mb-2">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? 'Creando...' : 'Crear Producto'}
          </button>
          {isLoading && (
            <div className="absolute inset-0 bg-gray-500 opacity-50 flex items-center justify-center">
              <div className="loader ease-linear border-t-4 border-blue-500 rounded-full border-t-blue-500 h-8 w-8"></div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
