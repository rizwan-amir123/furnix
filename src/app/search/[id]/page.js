"use client"
import Header from '../../components/Header.js'
import Subscribe from '../.././components/Subscribe.js'
import Footer from '../.././components/Footer.js'
import Search from '../../components/Search.js'
import Recommender from '../.././components/Recommender.js'
import LogoImg from '../../../../public/default-monochrome.svg'
import AvatarImg from '../../../../public/avatar.png'
import { useCart } from '../../context/CartProvider'

export default function Home({params}) {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  return (
    <>
    <Header src={LogoImg} src1={AvatarImg} cartItems={cartItems}/>
    <Search params={params}/>
    {/*<Recommender text={"Check Our Best Selling Items"} cartItems={cartItems}/>*/}
    <Subscribe />
    <Footer src={[LogoImg]}/>
    </>
  )
}
