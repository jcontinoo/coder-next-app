const CarritoLayout = ({children}) => {
    return(
        <div>
            <h1 className="text-blue-900 font-bold text-2xl m-8">Tu carrito de compras!</h1>
            <hr />
            {children}
        </div>
    )
}

export default CarritoLayout