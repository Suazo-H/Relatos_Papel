import { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import toast from 'react-hot-toast';

export default function GlobalProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const addToCart = (book) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === book.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...book, quantity: 1 }];
        });
        if (!isCartOpen) {
            toast.success(`"${book.title}" añadido al carrito`, {
                icon: '📚',
            });
        }
    };

    const removeFromCart = (bookId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
    };

    const updateQuantity = (bookId, newQuantity) => {
        if (newQuantity < 1) return;
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === bookId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <GlobalContext.Provider
            value={{
                cart,
                isCartOpen,
                toggleCart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
