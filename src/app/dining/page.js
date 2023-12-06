"use client"
import Header from '../components/Header.js'
import Subscribe from '.././components/Subscribe.js'
import Footer from '.././components/Footer.js'
import Gallery from '.././components/Gallery.js'
import LogoImg from '../../../public/default-monochrome.svg'
import AvatarImg from '../../../public/avatar.png'
import { useCart} from '../context/CartProvider';

export default function Home() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  return (
    <>
    <Header src={LogoImg} src1={AvatarImg} cartItems={cartItems}/>
    <Gallery id={"dining"}/>
    <Subscribe />
    <Footer src={[LogoImg]}/>
    </>
  )
}
