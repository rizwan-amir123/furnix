"use client"
import Header from '../components/Header'
import Subscribe from '.././components/Subscribe.js'
import Footer from '.././components/Footer.js'
import Gallery from '.././components/Gallery.js'
import LogoImg from '../../../public/default-monochrome.svg'
import { useCart } from '../context/CartProvider';
import AvatarImg from '../../../public/avatar.png'

export default function Home() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  return (
    <>
    <Header src={LogoImg} src1={AvatarImg} cartItems={cartItems}/>
    <Gallery id={"living"}/>
    <Subscribe />
    <Footer src={[LogoImg]}/>
    </>
  )
}
