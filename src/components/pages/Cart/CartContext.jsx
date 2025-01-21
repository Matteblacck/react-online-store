import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //состояние корзины
    const [cart, setCart] = useState([]);

    //функция для добавления товаров в корзину
    const addToCart = (product, size) => {
        const productWithSize = { ...product, size };
        setCart((prevCart) => [...prevCart, productWithSize])
    };

    //функция для удаления товаров из корзины
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    //функция для очистки корзины
    const clearCart = () => {
        setCart([]);
    }
    return(
        <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
};
