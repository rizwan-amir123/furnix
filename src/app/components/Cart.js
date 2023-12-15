"use client"
import Link from 'next/link';
import { useSession } from "next-auth/react";
import {useState, useEffect } from 'react';
export default function Cart({src, cartItems, addToCart, removeFromCart, clearCart, modifyCart }) {
    const  { data: session }  = useSession();
    const shippingCost = 10;
    const [totalCost, setTotalCost] = useState(0);

    const calculateTotalCost = () => {
        let totalCost= 0;
        cartItems.forEach((item) => {
            totalCost = totalCost + (item.orderquantity * item.price);
            //console.log(totalCost);
        })
        setTotalCost(totalCost);
    }

    const updateCart = async (key, number) => {
        modifyCart(key, number);
    }

    const removeItem = async (key) => {
        removeFromCart(key);
        console.log("cart after removal:", cartItems);
    }

    useEffect(() => {
        let totalCost= 0;
        cartItems.forEach((item) => {
            totalCost = totalCost + (item.orderquantity * item.price);
            //console.log(totalCost);
        })
        setTotalCost(totalCost);

        if (session) {
            const submitData = {"email": session.user.email, "cart": JSON.stringify(cartItems)};
            //const request = new Request();
            const response = fetch('/api/updatecart',{
                                method: 'POST',
                                body: JSON.stringify(submitData),
                                headers: {
                                    "Content-Type": "application/json",
                                }
                              })
                            .then((response) => response.json())
                            .catch((error) => {
                                console.log("errorrrrr");
                                console.error(error);
                            });
            console.log(response);
        }
        
    }, [cartItems]);
    

    

    return (
    <section className="px-5 bg-stone-200 dark:bg-stone-200 pb-20">
        <p className="pl-10 pt-10 text-3xl text-gray-800">Shopping Cart</p>
        
        <div className="flex flex-row  justify-between">
            {cartItems.length ?
            <div className="w-4/6">
            {cartItems.map((item, index) => (
            <div className="relative flex h-auto pt-5 pl-8"  key={index}>
                <button onClick={() => removeItem(item.key)} className="absolute p-1 right-0 text-gray-900 
                    hover:underline hover:text-red-900">Remove </button>
                <div className=" grid grid-cols-4 items-center border-t-2 border-b-2 border-gray-400">
                    
                    <img src={item.image} className="relative h-64 py-10 pl-10 pr-5" alt="seating"/>
                    <div>
                    <p className="font-semibold text-lg px-3 text-black">{item.title}
                    </p>
                    <p className="text-md px-3 text-gray-700">{item.series} Series
                    </p>
                
                    <p className="text-md px-3 text-black py-2">Color: {item.selectedcolor.toUpperCase()}
                    </p>
            
                    </div>

                    <div className="flex  flex-col p-10">
                        <div className="flex ml-4">
                        <p className="text-gray-900 pb-3  font-medium">Quantity</p>
                        </div>
                        <div>
                        <button onClick={() => updateCart(item.key, 1)} type="button" className="text-white bg-gray-600 hover:bg-gray-400 focus:ring-1 focus:outline-none focus:ring-amber-500 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        <span className="sr-only">Increase Quantity</span>
                        </button>
                        <span className="p-3 text-gray-900">{item.orderquantity}</span>
                        <button onClick={() => updateCart(item.key, -1)} type="button" className="text-white bg-gray-600 hover:bg-gray-400 focus:ring-1 focus:outline-none focus:ring-amber-500 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                        </svg>
                        <span className="sr-only">Decrease Qauntity</span>
                        </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pl-10">
                        
                        
                        <p className=" text-md  pr-2 text-gray-900">Price</p>
                        <p className="text-md pr-2 text-black">${item.price * item.orderquantity}</p>
                        <p className=" text-md  pr-2 text-gray-900">Shipping </p>
                        <p className=" text-md  pr-2 text-gray-900">$10</p>
                        <p className="text-lg  pr-2 text-gray-900">Total </p>
                        <p className="text-lg pr-2 font-semibold text-gray-900">${shippingCost + item.price * item.orderquantity}</p>
                    </div>
                </div>
            </div>
            ))}
            
            </div>
            : <p className="text-2xl pt-10 text-gray-800 pl-10">Cart is Empty</p>}
            <div>
                <div className="px-5 py-3 mt-4 mb-4 w-auto mr-10 flex flex-col bg-stone-300 rounded">
                        <p className="font-bold text-2xl pt-4 pb-3 px-4 text-gray-800 border-b-2
                        border-gray-400">Order Summary</p>
                    
                        <div className="flex text-gray-700 justify-between px-4 pb-1 pt-3">
                            <p className="font-semibold">Subtotal</p>
                            <p> ${totalCost}</p>
                        </div>
                        <div className="flex text-gray-700 justify-between px-4 ">
                            <p className="font-semibold">Shipping</p>
                            <p> ${cartItems.length * 10}</p>
                        </div>
                        <div className="flex text-gray-900 justify-between px-4 pt-5 pb-1">
                            <p className="font-semibold">Total</p>
                            <p> ${cartItems.length * 10 + totalCost}</p>
                        </div>
                        <div className="mt-2 flex justify-center">
                        <Link href="/checkout" className="w-full text-center px-4 py-2 font-semibold bg-amber-500 hover:bg-amber-600">Checkout</Link>
                        </div>
                        <div className="flex justify-center">
                        <Link href="/" className="text-gray-900 py-2 text-sm hover:underline">Continue Shopping</Link>
                        </div>
                    
                </div>
            </div>
            
        </div>
    </section>
    );
    }