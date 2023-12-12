"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Recommender = ({text, src, cartItems}) => {
    const [product, setProduct] = useState([]);  
    const recArray = cartItems.map((item) => { return item.category;});

    /*
    let path = ``;
    if (recArray.length === 0) {
        path = `/api/products/recommended/general`;
    }
    else {
        if (recArray.length == 1) {
            path = `/api/products/recommended?first=${recArray[0]}&second=&third=`;
        }
        if (recArray.length == 2) {
            path = `/api/products/recommended?first=${recArray[0]}&second=${recArray[1]}&third=`;
        }
        else {
        path = `/api/products/recommended?first=${recArray[0]}&second=${recArray[1]}&third=${recArray[2]}`;
        }
    }
    */
    const path = `/api/products/recommended/general`;
    useEffect(() => {
        fetch(path)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          //console.log(data);
        })
        .catch((error) => console.error('Error fetching products:', error));
    }, []);
    return (
    <section className="min-h-fit px-10 bg-stone-200 text-white pt-5 pb-2">
        
        <div className="px-5 w-full place-content-center items-stretch">
            <div className="place-self-center grid-cols-1 place-items-center">
                <p className="text-3xl text-gray-800 mb-3 justify-center">{text} </p>
            </div>
        </div>
        
        <div className="px-5 space-x-4 flex flex-row pt-5 justify-between pb-10">
            {product.map((pro, index) => (
                <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg 
                shadow" key={index} >
                    <Link href={'/product/' + pro.id}>
                        <img className="rounded-t-lg hover:opacity-50" src={pro.image} alt="" />
                    </Link>
                    
                    <div className="flex justify-between">
                        <Link href={'/product/' + pro.id}>
                            <h5 className="px-3 pt-2 text-lg tracking-tight text-gray-900 hover:text-amber-800">
                            {pro.title}</h5>
                        </Link>
                    
                        {pro.discount ? <p className="text-md pt-2 px-3 text-gray-800
                        "><span className="pr-2 line-through pr-1 text-red-900">${pro.price}                         </span>${Math.round(pro.price -((pro.discount/100)* pro.price))}</p> : 
                        <p className="text-md pt-2 px-3 text-gray-800
                        ">${pro.price}</p>
                        }

                        {/*<h5 className="pt-2 text-lg px-3 text-black">${pro.price}</h5>*/}
                    </div>
                    <div className="flex justify-between">
                        <h5 className="pb-2 px-3 text-sm tracking-tight text-gray-700">
                        {pro.series} Series</h5>
                        <div className="flex items-center pb-2">
                            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-gray-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            ))};
        </div>
        {/*
        <div className="mt-2 mb-1 place-content-end grid">
        <p className="text-md p-3 text-black hover:underline">See More of This ....</p>
        </div>
                    */}
    </section>);
};

export default Recommender;