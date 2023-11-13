import mockData from "@/data/products"
import ProductCard from "@/components/ui/ProductCard"

export const generateMetadata = async ({params}) => {
    return {
        title: 'NBA Store - ' + params.categoria,
    }

}

const Catalogo = ({params}) => {

    return(
        <div>
            <section className="flex justify-center items-center gap-10 flex-wrap">
                {mockData.map(product => <ProductCard key={product.slug} product={product}/>)}
            </section>
        </div>
    )
}

export default Catalogo