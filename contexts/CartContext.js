"use client"
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        const existingProductIndex = cart.findIndex(p => p.slug === product.slug);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    }

    const incrementQuantity = (productSlug) => {
        setCart(prevCart => prevCart.map(product => product.slug === productSlug
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ));
    }

    const decrementQuantity = (productSlug) => {
        setCart(prevCart => prevCart.map(product => product.slug === productSlug && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ));
    }

    const removeFromCart = (productSlug) => {
        setCart(prevCart => prevCart.filter(product => product.slug !== productSlug))
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity}}>
            {children}
        </CartContext.Provider> 
    )
}