"use client"
import Login from '.././components/Login.js'
import LogoImg from '../../../public/default-monochrome.svg'
import { useCart } from '../context/CartProvider';


export default function Home() {
  const { cartItems, addToCart, removeFromCart, clearCart, addMultipleToCart } = useCart();
  return (
    <Login src={LogoImg} cartItems={cartItems} addMultipleToCart={addMultipleToCart} addToCart={addToCart}/>
  )
}
