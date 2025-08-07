import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addServiceInCart = (service) => {
    const existingService = cart.find((item) => item.id === service.id);

    if (existingService) {
      const updatedCart = cart.map((item) => {
        if (item.id === service.id) {
          return { ...item, quantity: item.quantity + service.quantity };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, service]);
    }
  };

  const deleteServiceById = (id) => {
    const servicesFilter = cart.filter((service) => service.id !== id);
    setCart(servicesFilter);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = () => {
    return cart.reduce((total, service) => total + service.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (total, service) => total + service.price * service.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addServiceInCart,
        deleteServiceById,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };