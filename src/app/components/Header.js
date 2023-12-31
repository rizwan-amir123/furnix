
"use client"
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState, useEffect } from 'react';

export default function Header({src, src1, cartItems, addToCart, addMultipleToCart}) {
    const  { data: session, status }  = useSession();
    const [query, setQuery] = useState('');
    const [initialized, setInitialized] = useState(false);
/*
    useEffect(() => {
      if (session) {
      fetch( "/api/fetchuser?email=b@gmail.com")
      .then((response) => response.json())
      .then((data) => {
        addMultipleToCart(data[0].cart);
        //addToCart(data[0].cart[0]);
        console.log("data:",data);
        
        //router.push('/');
      })
      .catch((error) => console.error('Error in login', error));
      
  }}, []);
  */

  useEffect(() => {
    const fetchData = async () => {
    if (status === 'authenticated' && !initialized) {
        await fetch( `/api/fetchuser?email=${session.user.email}`)
        .then((response) => response.json())
        .then((data) => {
          addMultipleToCart(data[0].cart);
          //addToCart(data[0].cart[0]);
          console.log("data:",data);
          setInitialized(true);
          //router.push('/');
        })
        .catch((error) => console.error('Error in login', error));
    }
  }
  fetchData();
}, [status, initialized]);


  
  return (

<nav className="backdrop-filter backdrop-blur-lg p-2 bg-neutral-600 sticky top-0 z-50">
  <div className="flex items-center justify-between h-16">
      <Link href="/" className="ml-6 pl-10">
          <img src={src.src} className="h-12" alt="Logo" />
      </Link>
      <div className="flex flex-row ">

        <div className="relative group">
            <button className="flex flex-row items-center px-2 py-4 text-white text-sm font-sans
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/seating">Seating</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path className="transition-all duration-300 group-hover:rotate-90 group-hover:text-amber-500" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute z-50 w-40 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-sm bg-stone-200 text-gray-900 dark:text-gray-900">
                      <li>
                        <Link href="/seating" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Sofas</Link>
                      </li>
                      <li>
                        <Link href="/seating" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Sectional Sofas</Link>
                      </li>
                      <li>
                        <Link href="/seating" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Sleeper Sofas</Link>
                      </li>
                      <li>
                        <Link href="/seating" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 
                        dark:hover:underline dark:hover:text-black">Accent Chairs</Link>
                      </li>
                    </ul>
                </div>
            </div>
        </div> 
  
        <div className="relative group">
            <button className="flex flex-row items-center px-2 py-4 text-white text-sm font-sans
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/living">Living</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path className="transition-all duration-300 group-hover:rotate-90 group-hover:text-amber-500" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute w-52 z-50 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-sm bg-stone-200 text-gray-900 dark:text-gray-900">
                      <li>
                        <Link href="/living" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Sofas & Sectional</Link>
                      </li>
                      <li>
                        <Link href="/living" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Accent Chairs</Link>
                      </li>
                      <li>
                        <Link href="/living" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Coffee & Side Tables</Link>
                      </li>
                      <li>
                        <Link href="/living" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">
                          Bookcases & Shelving</Link>
                      </li>
                    </ul>
                </div>
            </div>
        </div> 
        
        <div className="relative group">
            <button className="flex flex-row items-center px-2 py-4 text-white text-sm font-sans
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/dining">Dining</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path className="transition-all duration-300 group-hover:rotate-90 group-hover:text-amber-500" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute z-50 w-52 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-sm bg-stone-200 text-gray-900 dark:text-gray-900">
                      <li>
                        <Link href="/dining" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Dining Tables</Link>
                      </li>
                      <li>
                        <Link href="/dining" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Dining Chairs</Link>
                      </li>
                      <li>
                        <Link href="/dining" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Bar Carts & Credenzas</Link>
                      </li>
                    </ul>
                </div>
            </div>
        </div> 
        
        <div className="relative group">
            <button className="flex flex-row items-center px-2 py-4 text-white text-sm font-sans
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/bedroom">Bedroom</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path className="transition-all duration-300 group-hover:rotate-90 group-hover:text-amber-500" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute z-50 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-sm bg-stone-200 text-gray-900 dark:text-gray-900">
                      <li>
                        <Link href="/bedroom" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Bed</Link>
                      </li>
                      <li>
                        <Link href="/bedroom" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Dressers</Link>
                      </li>
                      <li>
                        <Link href="/bedroom" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Nightstands</Link>
                      </li>
                    </ul>
                </div>
            </div>
        </div> 
        
        <div className="relative group">
            <button className="flex flex-row items-center px-2 py-4 text-white text-sm font-sans
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/storage">Storage</Link></span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path className="transition-all duration-300 group-hover:rotate-90 group-hover:text-amber-500" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute z-50 hidden w-64 bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-sm bg-stone-200 text-gray-900 dark:text-gray-900">
                      <li>
                        <Link href="/storage" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Wall Shelves</Link>
                      </li>
                      <li>
                        <Link href="/storage" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Bookcases</Link>
                      </li>
                      <li>
                        <Link href="/storage" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Media Consoles & Credenzas</Link>
                      </li>
                    </ul>
                </div>
            </div>
        </div> 
        
        <div className="relative group">
            <button href="/rugs" className="flex flex-row items-center px-2 py-4 text-white text-sm font-sans
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/rugs">Rugs</Link></span>
                
              </div>
            </button>
            
        </div> 

        <div className="relative group">
            <button className="flex flex-row items-center px-2 py-4 text-white text-sm font-sans
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/outdoor">Outdoor</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path className="transition-all duration-300 group-hover:rotate-90 group-hover:text-amber-500" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute w-36 z-50 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-sm bg-stone-200 text-gray-900 dark:text-gray-900">
                      <li>
                        <Link href="/outdoor" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Patio Sets</Link>
                      </li>
                      <li>
                        <Link href="/outdoor" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Sofas</Link>
                      </li>
                      <li>
                        <Link href="/outdoor" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Dining Chairs</Link>
                      </li>
                      <li>
                        <Link href="/outdoor" className="block px-4 py-2 hover:decoration-amber-500 hover:decoration-4 hover:underline-offset-8 dark:hover:underline dark:hover:text-black">Coffee Tables</Link>
                      </li>
                    </ul>
                </div>
            </div>
        </div> 
      
      {/* Icons */}
      </div>
      <div className="flex space-x-1 pr-10 mr-10 text-gray-900">

      <div className="relative group">
      <a className="inline-flex items-center h-10 px-5 text-indigo-100 
      transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline 
      hover:opacity-50">
        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="white" strokeLinecap="round" strokeLinejoin="round" 
          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </a>
      <div className="absolute z-50 rounded-lg p-3 w-64 hidden bg-gray-300 group-hover:block">
            <input type="text" value={query}  onChange={(e) => setQuery(e.target.value)} placeholder=" Search" 
          className="bg-stone-200 
          shadow-lg border border-gray-400 
          text-gray-900 text-sm rounded-md focus:ring-amber-500 focus:border-amber-500 
          block w-full h-8"/>
          <Link href={"/search/params?query="+ query.replace(" ", "+")}>
          <button  className="w-full mt-2 shadow-lg rounded-lg p-1 font-semibold bg-amber-500 text-white">Search</button>
          </Link>
      </div>
      </div>

      <div className="relative group">
      
        {session ? (<Link href="/" className="inline-flex items-center h-10 px-5 text-indigo-100 
      transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline 
      hover:opacity-50"> {session.user.image ? (<img className="rounded-full h-8 w-8" src={session.user.image}></img>)
      : (<svg className="w-5 h-5 rounded text-gray-800 fill-amber-500" aria-hidden="true" 
      xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 14 18">
      <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
      </svg>)} </Link>)
        : (<Link href="/login" className="inline-flex items-center h-10 px-5 text-indigo-100 
        transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline 
        hover:opacity-50"><svg className="w-6 h-6 text-gray-800" aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
        </svg></Link>)}
      
      {session ? (
      <div className="absolute z-50 shadow-lg rounded-lg w-48 hidden bg-stone-200 group-hover:block">
          <div className="border-b-2 border-gray-400 px-4 hover:underline py-3 text-sm text-gray-900">
            <div>{session.user.name}</div>
            <div className="font-medium truncate">{session.user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownUserAvatarButton">
          <li>
              <Link href="/" className="block px-4 py-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:decoration-amber-500 text-md">Dashboard</Link>
          </li>
          <li>
              <Link href="/" className="block px-4 py-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:decoration-amber-500 text-md">Edit Profile</Link>
          </li>
          </ul>
          <div className="py-2 border-t-2 border-gray-400">
            
              <button onClick={signOut} className="block px-4 py-2 text-sm text-gray-700 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:decoration-amber-500">Sign out</button>
              
          </div>
      </div>
      ) : null }
      </div>
      

      <Link href="/cart" className="inline-flex items-center h-10 px-5 text-indigo-100 
      transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline 
      hover:opacity-50">
        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
        d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
        </svg>
        {/*<p className="ml-2">{session? session.user.cart.length: cartItems.length }</p>*/}
        <p className="ml-2">{cartItems.length}</p>
        
      </Link>

    </div>
</div>

</nav>

    );
};
