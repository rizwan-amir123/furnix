"use client"
import Header from '../../components/Header.js'
import Subscribe from '../.././components/Subscribe.js'
import Footer from '../.././components/Footer.js'
import Display from '../../components/Display.js'
import Recommender from '../.././components/Recommender.js'
import LogoImg from '../../../../public/default-monochrome.svg'
import Img1 from '../../../../public/outdoor1.jpg'
import Img2 from '../../../../public/spec.png'
import Img3 from '../../../../public/outdoor3.jpg'
import AvatarImg from '../../../../public/avatar.png'
import { useCart } from '../../context/CartProvider'

export default function Home({params}) {
  const { cartItems, addToCart, removeFromCart, clearCart, modifyCart, addMultipleToCart } = useCart();
  return (
    <>
    <Header src={LogoImg} src1={AvatarImg} cartItems={cartItems} addToCart={addToCart} addMultipleToCart={addMultipleToCart}/>
    {/*<Display src={[Img1, Img2, Img3]} params={params} addToCart={addToCart} 
    cartItems={cartItems} removeFromCart={removeFromCart} modifyCart={modifyCart}/>
  */}
    <Recommender text={"Recommended for You"} src={[Img1, Img2, Img3, Img1, Img2]} cartItems={cartItems}/>
    <Subscribe />
    <Footer src={[LogoImg]}/>
    </>
  )
}
