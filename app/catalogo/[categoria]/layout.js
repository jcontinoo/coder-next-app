const CatalogoLayout = ({children}) => {
    return(
        <div>
            <h1 className="text-blue-900 font-bold text-4xl m-10">Catálogo de productos</h1>
            <hr />
            {children}
        </div>
    )
}

export default CatalogoLayout