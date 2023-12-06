

"use client"
import React, { createContext, useContext } from 'react';
import { useCart } from '../context/CartProvider';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { cartItems, addToCart, removeFromCart, clearCart, modifyCart, addMultipleToCart } = useCart();
  //const [user, setUser] = useState(null);

  const signIn = () => {
    // Perform any necessary logic
    addMultipleToCart([
        {
          "id": "A0009               ",
          "key": "123",
          "color": [
            "red",
            "blue"
          ],
          "image": "https://drive.google.com/uc?export=view&id=1HRP1JS6nTGUfmVSggjBBQ9Yg6F-LFySb",
          "price": 50,
          "title": "Rug",
          "series": "Prarie Modern",
          "category": "rug",
          "discount": 5,
          "quantity": 10,
          "description": "As plush underfoot as it is an objet d’art, it is a visually-stunning rug that is a true sensory wonder. It’s overlapping rectangular pattern is made from 100% natural undyed wool and features a cool-toned, neutral palette. It’s a showpiece of craftsmanship that will attract marvel and wonder, much like the captivating view of endless fields from on high.",
          "orderquantity": 2,
          "selectedcolor": "white"
        },
        {
          "id": "A0010               ",
          "key": "546",
          "color": [
            "green",
            "red"
          ],
          "image": "https://drive.google.com/uc?export=view&id=12hp5v7yf7UFG9tj8pe2YwmEK_HWD7hFA",
          "price": 80,
          "title": "Rug\n",
          "series": "Geometric",
          "category": "rug",
          "discount": 15,
          "quantity": 10,
          "description": "This beautiful, shag tufted rug is made in the style of the Beni Ouarain tribes of Morocco. Some of the most renowned artisan rugmakers in the world, they're known for simple designs over a blank neutral field. Our take features a wispy zig-zag pattern in charcoal on top of a creamy white field. The rug is extremely soft and plush, and as a natural result of its traditional construction, will shed a bit at first.",
          "orderquantity": 2,
          "selectedcolor": "white"
        },
        {
          "id": "A0011               ",
          "key": "900",
          "color": [
            "red"
          ],
          "image": "https://drive.google.com/uc?export=view&id=1dyEoMtFWJTc_xuhzarHXyhXCy8onWV_3",
          "price": 70,
          "title": "Rug",
          "series": "Prarie Modern",
          "category": "rug",
          "discount": 0,
          "quantity": 0,
          "description": "This 100% recycled polyester rug with an alternating cut and loop pile construction references the unique stained glass designs of American mid-century Modernism and the underappreciated Bauhaus weaving workshop. Featuring Earthier tones and horizontal bars, it's more Fallingwater than Glass House, which we think makes it a warmer and more versatile style.",
          "orderquantity": 2,
          "selectedcolor": "white"
        }
      ]);
  };

  const signOut = () => {
    // Perform any necessary logic
    addMultipleToCart([]);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};