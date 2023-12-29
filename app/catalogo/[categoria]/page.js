"use client"
import { useState, useEffect } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

const getProducts = async () => {
    const productRef = collection(db, 'productos');
    const querySnapshot = await getDocs(productRef);

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

const Catalogo = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = selectedCategory
        ? products.filter((product) => product.type === selectedCategory)
        : products;

    return (
        <div className="flex">
            <aside className="w-1/4 p-4">
                <h2 className="text-lg text-blue-900 font-bold mb-2">Filtrar por categoría</h2>
                <ul>
                    <li onClick={() => filterByCategory(null)} className={!selectedCategory ? 'font-bold' : ''}>
                        Todas las categorías
                    </li>
                    {[...new Set(products.map((product) => product.type))].map((category) => (
                        <li
                            key={category}
                            onClick={() => filterByCategory(category)}
                            className={selectedCategory === category ? 'font-bold' : ''}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </aside>

            <section className="flex-3 p-4">
                <section className="flex justify-center items-center gap-10 flex-wrap">
                    {filteredItems.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </section>
            </section>
        </div>
    );
};

export default Catalogo;
