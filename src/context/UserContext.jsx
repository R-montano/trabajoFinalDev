import { createContext, useContext } from "react";

const UserContext = createContext();
//1.
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const nombre = "Rommel";

  return (
    <UserContext.Provider value={{ nombre }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
