"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Gallery({id}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetch users when the component mounts
        fetch(`/api/products/${id}`)
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error fetching products:', error));
    }, [products]);
    
    return (
    <section className="bg-stone-200 dark:bg-stone-200 pb-20">
        <p className="pl-8 pt-10 text-3xl text-gray-700">{id.charAt(0).toUpperCase()}<span>{id.slice(1)}</span></p>
        <div className="grid grid-cols-3 p-5">
            {products.map((product) => (
                <div key={product.id} className="px-3 pt-3 w-full group">
                    <Link href={"/product/"+product.id}>
                        <div className="overflow-hidden h-[280px]">
                        <img src={product.image} className="object-cover group-hover:opacity-60" alt="seating"/>
                        </div>
                    </Link>
                    <p className="text-gray-900 
                    ">{product.series} Series {product.title}</p>
                    
                    {product.discount ? 
                    <p className="text-gray-900 pt-1
                    "><span className="line-through pr-1 text-red-900">${product.price} 
                    </span>${Math.round(product.price -((product.discount/100)* product.price))}</p> : 
                    <div className="gap-x-3 flex flex-row"><p className="text-gray-900 pt-1">${product.price}</p>
                    {product.quantity ? null : <span className="pt-1 text-red-900">Out of Stock</span>}
                    </div>}
                    
                </div>
            ))}
        </div>

    </section>
    );
}