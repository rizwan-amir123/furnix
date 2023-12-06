
"use client"
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState, useEffect } from 'react';

export default function Mheader({src, src1, cartItems,  addToCart, addMultipleToCart}) {
    const  { data: session }  = useSession();
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        // Fetch users when the component mounts
        if (session) {
        fetch(`/api/getcart`)
          .then((response) => response.json())
          .then((data) => {console.log("cart:",data); 
          //data.forEach((item) => 
          //{console.log("item:",item);addToCart(item);})})
          //addToCart(data[1]); addToCart(data[0]) ; addToCart(data[2]);
          
          addMultipleToCart(data);
        })
          .catch((error) => console.error('Error fetching products:', error));
        }
    }, [session]);

  return (

<nav className="backdrop-filter backdrop-blur-lg p-2 bg-neutral-600 sticky top-0 z-50">
  <div className="flex items-center justify-between h-16">
      <Link href="/" className="ml-10 pl-10">
          <img src={src.src} className="h-16" alt="Logo" />
      </Link>
      <div className="flex flex-row ">

        <div className="relative group">
            <button className="flex flex-row items-center px-2 py-4 text-white text-base 
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/seating">Seating</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute z-50 w-40 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-md bg-stone-200 text-gray-900 dark:text-gray-900">
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
            <button className="flex flex-row items-center px-2 py-4 text-white text-base 
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/living">Living</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute w-52 z-50 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-md bg-stone-200 text-gray-900 dark:text-gray-900">
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
            <button className="flex flex-row items-center px-2 py-4 text-white text-base 
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/dining">Dining</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute z-50 w-52 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-md bg-stone-200 text-gray-900 dark:text-gray-900">
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
            <button className="flex flex-row items-center px-2 py-4 text-white text-base 
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/bedroom">Bedroom</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute z-50 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-md bg-stone-200 text-gray-900 dark:text-gray-900">
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
            <button className="flex flex-row items-center px-2 py-4 text-white text-base 
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/storage">Storage</Link></span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute z-50 hidden w-64 bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-md bg-stone-200 text-gray-900 dark:text-gray-900">
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
            <button href="/rugs" className="flex flex-row items-center px-2 py-4 text-white text-base 
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/rugs">Rugs</Link></span>
                
              </div>
            </button>
            
        </div> 

        <div className="relative group">
            <button className="flex flex-row items-center px-2 py-4 text-white text-base 
            bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
                <div className="flex flex-row space-x-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:text-amber-500">
                <span><Link href="/outdoor">Outdoor</Link> </span>
                <svg className="w-[12px] ml-2 h-[14px] mt-1 items-center text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
              </div>
            </button>
            <div className="absolute w-36 z-50 hidden bg-gray-200 group-hover:block">
                <div className="rounded w-full bg-white bg-gray-200 shadow-lg">
                    <ul className="py-2 text-md bg-stone-200 text-gray-900 dark:text-gray-900">
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
      <div className="flex space-x-2 pr-10 mr-10 text-gray-900">

      <div className="relative group">
      <a className="inline-flex items-center h-10 px-5 text-indigo-100 
      transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline 
      hover:opacity-50">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="white" strokeLinecap="round" strokeLinejoin="round" 
          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </a>
      <div className="absolute z-50 rounded-lg w-64 hidden bg-gray-200 group-hover:block">
                <input type="text" value={query}  onChange={(e) => setQuery(e.target.value)} placeholder="Search" className="bg-stone-200 shadow-lg border border-gray-300 
          text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
          block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <Link href={"/search/params?query="+ query.replace(" ", "+")}>
          <button  className="w-full shadow-lg rounded-lg p-1 font-semibold bg-amber-500 text-white">Search</button>
          </Link>
      </div>
      </div>

      <div className="relative group">
      <Link href="/login" className="inline-flex items-center h-10 px-5 text-indigo-100 
      transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline 
      hover:opacity-50">
        {session ? ( <img className="rounded-full h-8 w-8" src={session.user.image}></img>)
        : (<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
        </svg>)}
      </Link>
      {session ? (
      <div className="absolute z-50 shadow-lg rounded-lg w-48 hidden bg-stone-200 group-hover:block">
          <div className="border-b-2 border-gray-400 px-4 hover:underline py-3 text-sm text-gray-900 dark:text-white">
            <div>{session.user.name}</div>
            <div className="font-medium truncate">{session.user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
          <li>
              <Link href="/" className="block px-4 py-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:decoration-amber-500">Dashboard</Link>
          </li>
          <li>
              <Link href="/" className="block px-4 py-2 hover:underline hover:decoration-4
                hover:underline-offset-8 hover:decoration-amber-500">Settings</Link>
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
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
        d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
        </svg>
        <p className="ml-2">{cartItems.length}</p>
        
      </Link>

    </div>
</div>

</nav>

    );
};
