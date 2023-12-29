"use client"
import { db } from "@/firebase/config";
import { getDoc, doc } from "firebase/firestore";
import ProductCard from "@/components/ui/ProductCard";
import { useRouter } from "next/navigation";

const getProduct = async (id) => {
    const docRef = doc(db, 'productos', id);
    const docSnapshot = await getDoc(docRef);

    return docSnapshot.data();
};

// eslint-disable-next-line @next/next/no-async-client-component
const Detail = async ({ params }) => {
    const { id } = params;
    const router = useRouter();

    const item = await getProduct(id);

    return (
        <div className="container mx-auto mt-8">
            <button className="bg-blue-700 text-white text-xl rounded-md" onClick={() => { router.back() }}>Volver atras</button>
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-4xl font-bold mb-4">Detalle del producto</h2>
                <hr className="mb-4" />
                <ProductCard product={item} />

                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-2">Descripción:</h3>
                    <p className="text-gray-700">{item.details}</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;
