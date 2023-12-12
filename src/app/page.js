"use client"
import Mheader from './components/Mheader.js'
import Header from './components/Header.js'
import Reviews from './components/Reviews.js'
import Features from './components/Features.js'
import Subscribe from './components/Subscribe.js'
import Carousel from './components/Carousel.js'
import Footer from './components/Footer.js'
import Collection from './components/Collection.js'
import Hero from './components/Hero.js'
import LogoImg from '../../public/default-monochrome.svg'
import C1Img from '../../public/c1.jpg'
import RugImg from '../../public/rug.jpg'
import C2Img from '../../public/chair.jpg'
import C3Img from '../../public/c3.jpg'
import C4Img from '../../public/c4.jpg'
import C5Img from '../../public/c5.jpg'
import IndoorImg from '../../public/indoor.jpg'
import OutdoorImg from '../../public/outdoor.jpg'
import ModernaImg from '../../public/moderna.jpg'
import ClassicImg from '../../public/classic.jpg'
import AvatarImg from '../../public/avatar.png'
import { useCart } from './context/CartProvider';


export default function Home() {
  const { cartItems, addToCart, removeFromCart, clearCart, modifyCart, addMultipleToCart } = useCart();
  return (
    <>
      {/*<Mheader src={LogoImg} src1={AvatarImg} cartItems={cartItems}  
      addToCart={addToCart} addMultipleToCart={addMultipleToCart}/>*/}
      <Header src={LogoImg} src1={AvatarImg} cartItems={cartItems} addToCart={addToCart} addMultipleToCart={addMultipleToCart}/>
      {<Carousel src={[C1Img, C2Img, C3Img, C4Img, C5Img, RugImg]}/>}
      <Hero src={[C1Img, C2Img, C3Img, C4Img, C5Img, RugImg]} />
      <Features />
      <Collection src={[IndoorImg, OutdoorImg, ClassicImg, ModernaImg]} />
      <Reviews src={[C1Img, C2Img, AvatarImg, C4Img, C5Img, RugImg]}/>
      <Subscribe />
      <Footer src={[LogoImg]}/>
    </>
  )
}
