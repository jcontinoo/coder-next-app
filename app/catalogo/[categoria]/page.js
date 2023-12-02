import ProductCard from "@/components/ui/ProductCard"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/config"

export const generateMetadata = async ({params}) => {
    return {
        title: 'NBA Store - ' + params.categoria,
    }
}

const getProducts = async () => {
    const productRef = collection(db, 'productos')
    const querySnapshot = await getDocs(productRef)

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

const Catalogo = async({params}) => {
    const items = await getProducts();

    return(
        <div>
            <section className="flex justify-center items-center gap-10 flex-wrap">
                {items.map(product => <ProductCard key={product.slug} product={product}/>)}
            </section>
        </div>
    )
}

export default Catalogo