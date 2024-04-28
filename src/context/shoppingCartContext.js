import { useContext, createContext, useState } from "react";

export const ShoppingCartContext = createContext(null);
export const useShoppingCartDetail = () => {
    return useContext(ShoppingCartContext);
};

export const ShoppingCartContextProvider = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    return (
        <ShoppingCartContext.Provider value={{
            productsInCart,
            setProductsInCart,
            showCart,
            setShowCart
        }}>
                {children}
        </ShoppingCartContext.Provider>
    );
};
