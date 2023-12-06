"use client"
import Header from '../../components/Header.js'

import Footer from '../.././components/Footer.js'
import Welcome from '../.././components/Welcome.js'
import LogoImg from '../../../../public/default-monochrome.svg'
import Gallery from '../.././components/Gallery.js'


import { useCart } from '../context/CartProvider';

import AvatarImg from '../../../public/avatar.png'
export default  function Home() {
    const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
    return (
        <>
        <Header src={LogoImg} src1={AvatarImg} cartItems={cartItems}/>
        <p>cart Items:{cartItems.length}</p>
        {/*<Gallery id={"rug"}/>*/}
        <Footer src={[LogoImg]}/>
        </>
    )
}