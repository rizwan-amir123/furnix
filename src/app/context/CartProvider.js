// contexts/cartContext.js
"use client"
import { createContext, useContext, useState, useEffect } from 'react';
//import { useSession } from "next-auth/react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //const  { data: session }  = useSession();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever it changes
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const addMultipleToCart = (cart) => {
    const newCart = cart;
    setCartItems(newCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.key !== itemId);
    console.log("updated cart:",updatedCart);
    setCartItems(updatedCart);
  };

  
  const modifyCart = (itemId, quantity) => {
    const updatedCart = cartItems.filter((item) => item.key === itemId);
    //console.log(updatedCart);
    const insertionIndex = cartItems.findIndex(item => item.key === itemId);
    //console.log("insertion index", insertionIndex);

    const newCart = cartItems.filter((item) => item.key !== itemId);
    //console.log(quantity);
    //console.log(updatedCart[0].orderquantity);
    let sum = Number(updatedCart[0].orderquantity) + Number(quantity);
    if (sum < 1) {
      sum = 1;
    }
    if (sum > 5) {
      sum = 5;
    }
    updatedCart[0].orderquantity = sum;
    //myArray.splice(insertionIndex, 0, elementToInsert);
    let finalArray = [...newCart.slice(0, insertionIndex), updatedCart[0], ...newCart.slice(insertionIndex)];
    //newCart.push(updatedCart[0]);
    
    //console.log(updatedCart);
    //setCartItems(updatedCart);
    
    setCartItems(finalArray);
    //setCartItems(newCart);
  };
  
   const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, modifyCart, addMultipleToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};