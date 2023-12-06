"use client"

/*
import { useState, createContext, useContext } from "react";
const StateContext = createContext()

export default function Layout({children}) {
    const [cartCount, setCartCount] = useState(0);
    return (

        <StateContext.Provider value={{cartCount, setCartCount}}>
          {children}
        </StateContext.Provider>

    );
}
export const useStateContext = () => useContext(StateContext);
*/

import {useState} from 'react';
export default function Layout() {
  const [cartCount, setCartCount] = useState(0);
  return (
   <></>
  );
}


