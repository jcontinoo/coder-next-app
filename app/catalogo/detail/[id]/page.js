import { db } from "@/firebase/config";
import { getDoc, doc } from "firebase/firestore";
import ProductCard from "@/components/ui/ProductCard";

const getProduct = async(id) => {
    const docRef = doc(db, 'productos', id);
    const docSnapshot = await getDoc(docRef)

    return docSnapshot.data();
}

const Detail = async({params}) => {
    const { id } = params;

    const item = await getProduct(id)

    return (
        <>
        <div className="container m-auto pt-8">
            <h2 className="text-4xl text-bold">Detalle del producto</h2>
            <hr />
        </div>
        <div className="container mx-auto pt-8">
                {<ProductCard product={item}/>}
            </div>
            </>
      );

}

export default Detail;