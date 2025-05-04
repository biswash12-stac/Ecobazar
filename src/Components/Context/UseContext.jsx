import React, { createContext, useContext, useState } from "react";
import {
  GreenAppleIcon,
  chaniseCabbageICon,
  CartIcon,
  GreenLettuceIcon,
  cornIcon,
  greenChilly,
} from "../../assets/products";
import { ClientDetails } from "../../assets/Clinet-Testimonial";
import { socialIcons } from "../../assets/social/social";
// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: GreenAppleIcon,
      title: "Green Apple",
      price: "$14.99",
      rating: 2,
      cart: CartIcon,
    },
    {
      id: 2,
      image: chaniseCabbageICon,
      title: "Chinese Cabbage",
      price: "$14.99",
      rating: 4,
      cart: CartIcon,
    },
    {
      id: 3,
      image: GreenLettuceIcon,
      title: "Green Lettuce",
      price: "$14.99",
      rating: 3,
      cart: CartIcon,
    },
    {
      id: 4,
      image: cornIcon,
      title: "Corn",
      price: "$14.99",
      rating: 4.5,
      cart: CartIcon,
    },
    {
      id: 5,
      image: greenChilly,
      title: "Green Chili",
      price: "$14.99",
      rating: 5,
      cart: CartIcon,
    },
  ]);

  const [Clients] = useState(ClientDetails); // Static for now
  const[social ,setSocial] = useState(socialIcons)

  return (
    <AppContext.Provider value={{ products, setProducts, Clients,social,setSocial }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => useContext(AppContext);
