"use client"
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
export default function Display({src, params, addToCart, cartItems, removeFromCart, modifyCart}) {
    //const desiredItem = cartItems.filter((item) => (item.id).trim() === params.id);
    //const initialColor = desiredItem.colors[0];
    const  { data: session }  = useSession();
    const [selectedColorOption, setSelectedColorOption] = useState("");
    const [selectedQuantityOption, setSelectedQuantityOption] = useState(1);
    const [product, setProduct] = useState([]);
    const handleColorChange = (event) => {
        event.preventDefault();
        // Update the state with the selected option value
        setSelectedColorOption(event.target.value);
        console.log(selectedColorOption);
    };

    const handleQuantityChange = (event) => {
        event.preventDefault();
        // Update the state with the selected option value
        setSelectedQuantityOption(event.target.value);
        console.log(selectedQuantityOption);
    };
    
    
    useEffect(() => {
        fetch(`/api/products/${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          console.log(data);
        })
        .catch((error) => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        if (session) {
            const submitData = {"email": session.user.email, "cart": JSON.stringify(cartItems)};
            //const request = new Request();
            const response = fetch('http://localhost:3000/api/updatecart',{
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


    const handleAddToCart = async (pro, orderquantity, color) => {
        if (color === "") {
            color = pro.color[0];
        }
        
        let newpro = pro;
        const exists = cartItems.some(item => item.key === (pro.id).trim()+color);
        if (exists) {
            const existingItem = cartItems.filter((item) => item.id === pro.id);
            console.log("item already exists");
            console.log(existingItem);
            console.log(existingItem[0].selectedcolor);
            console.log(color);

            if (existingItem[0].selectedcolor === color) {
                console.log("color matches too");
                console.log(existingItem[0]);
                const previousOrderQuantity = existingItem[0].orderquantity;
                const newItem = {...existingItem[0], orderquantity: previousOrderQuantity + 1 };
                modifyCart((pro.id).trim()+ color, selectedQuantityOption);
                //console.log("Added this to cart:",newpro);
            
            }
            console.log("after adding cartItems:", cartItems);
        }
        else {
            console.log(exists);
            const keyColor = color;
            newpro = {...pro, orderquantity:orderquantity, selectedcolor:color, key:(pro.id).trim()+keyColor};
            addToCart(newpro);
            console.log("Added this to cart:",newpro);
            console.log("after adding cartItems:", cartItems);
        }
        
    }


    return (
    <section className="bg-stone-200 dark:bg-stone-200 pb-20">
        {product.map((pro, index) => (
        <div className="flex flex-row px-5 justify-start justify-items-start" key={index}>
            <div className="w-2/3 h-[500px] py-10 pl-10 pr-8 overflow-hidden">
                <img src={pro.image} className="object-cover w-full h-full" alt="seating"/>
            </div>
            <div className="mb-0 pb-0">
                <p className="text-4xl pb-15 pt-12 px-auto text-gray-800"> {pro.title}
                </p>
                
                <p className="text-xl pt-1 px-auto text-black">{pro.series} Series
                </p>

                {pro.discount ? <p className="text-2xl mt-2 pt-1 mb-5 px-auto text-gray-800
                    "><span className="pr-3 line-through pr-1 text-red-900">${pro.price} 
                    </span>${Math.round(pro.price -((pro.discount/100)* pro.price))}</p> : 
                    <p className="text-2xl mt-2 pt-1 mb-5 px-auto text-black
                    ">${pro.price}</p>
                }

                <div class="flex items-center">
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a href="#" class="text-sm font-medium text-gray-900 hover:text-bg-800 dark:text-white">73 reviews</a>
                </div>

                <div className="pt-8 mb-0">
                    <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                    <select defaultValue={pro.color[0]} value={selectedColorOption} onChange={handleColorChange} id="color" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    
                    {pro.color.map((color, index) => (
                        <option key={index} value={color}> {color.toUpperCase()}</option>
                    ))}
                    
                    </select>

                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                    <select defaultValue={1} value={selectedQuantityOption} onChange={handleQuantityChange} id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    </select>
                    {pro.quantity ? <button onClick={() => handleAddToCart(pro, selectedQuantityOption, 
                    selectedColorOption)} ><a className="bg-amber-500 font-semibold 
                    flex-row mb-0 p-3 hover:bg-amber-600"> Add to Cart</a></button>
                    : <button disabled> <a className="bg-gray-300 rounded-sm font-semibold flex-row 
                    mb-0 p-3 text-gray-500"> Add to Cart</a></button>}
                    {pro.quantity ? null : <span className="ml-5 text-red-900">Out of Stock</span>}
                    
                </div>
            </div>
        
        </div>
        ))}
        

    <div className="flex px-5"> 
        <p className="text-4xl py-10 pl-10 pr-5 text-gray-800">Specifications</p> 
    </div>

    <div className="px-5 flex justify-center items-center pl-10 justify-between">  
    <div className="relative pl-5 pt-5 overflow-x-auto sm:rounded-lg">
    <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
        
        <tbody>
            <tr className="bg-transparent border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    General Dimensions
                </th>
                <td className="px-6 py-4">
                84” L x 32.5” W x 33.5” H
                </td>
            </tr>
            <tr className="border-b bg-transparent dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Seat Height
                </th>
                <td className="px-6 py-4">
                18.5”
                </td>
                
            </tr>
            <tr className="bg-transparent border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arm Height
                </th>
                <td className="px-6 py-4">
                26”
                </td>
                
            </tr>
            <tr className="border-b bg-transparent dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Seat Depth
                </th>
                <td className="px-6 py-4">
                21”
                </td>
                
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Leg Height
                </th>
                <td className="px-6 py-4">
                2.6”
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <div className="pr-10">
    <img src={src[1].src}  className="justify-center h-auto rounded-lg w-auto py-5" alt="seating"/>
    </div>
    </div>

    <div className="flex px-5"> 
        <p className="text-4xl py-10 pl-10 pr-5 text-gray-800">About this piece</p> 
    </div>
    {product.map((pro), index => (
    <div key={index} className="px-5">
    <p className="text-justify text-xl pb-5 pt-5 px-10 text-gray-800">{pro.description}
    </p> 
    </div>
    ))}

    <div className="flex px-5"> 
        <p className="text-4xl py-10 pl-10 pr-5 text-gray-800">Reviews</p> 
    </div>
    <div className="px-10">
        <article className="px-5">
            <div class="flex items-center mb-4">
                <img class="w-10 h-10 me-4 rounded-full" src="https://drive.google.com/uc?export=view&id=1FQhvnOJEnWezsb1Sb8IjaWfUPeG_UE_v" alt=""/>
                <div class="font-medium text-gray-900">
                    <p>Jesse Leos </p>
                </div>
            </div>
            <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
            </div>
            <footer class="mb-5 text-sm text-gray-500 text-gray-400"><time dateTime="2017-03-03 19:00">October 3, 2023</time></footer>
            <p class="mb-2 text-gray-500 text-gray-800">This is my third purchase and I gotta say I got value for my money!</p>
        </article>

        <article className="px-5 pt-5">
            <div class="flex items-center mb-4">
                <img class="w-10 h-10 me-4 rounded-full" src="https://drive.google.com/uc?export=view&id=1FQhvnOJEnWezsb1Sb8IjaWfUPeG_UE_v" alt=""/>
                <div class="font-medium text-gray-900">
                    <p>Jessica Leo </p>
                </div>
            </div>
            <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Superb Quality</h3>
            </div>
            <footer class="mb-5 text-sm text-gray-500 text-gray-400"><time datetime="2017-03-03 19:00">June 14, 2023</time></footer>
            <p class="mb-2 text-gray-500 text-gray-800">Super Impressed! Sure gonna buy again!</p>
        </article>
    </div>
    
    </section>
    );
    }