import Image from 'next/image';
import Link from 'next/link';

export default function CarouselImages({src}) {
    return (
        <section className="bg-black  text-white">
			<div id="default-carousel" className="relative w-full" data-carousel="slide">
				{/*<!-- Carousel wrapper -->*/}
				<div className="relative overflow-hidden h-[430px]">
					 {/*<!-- Item 1 -->*/}
					<div className="relative hidden duration-700 ease-in-out" data-carousel-item>
						
						<img src={src[0].src} 
						className="absolute block  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
						alt="carousel image 1"/>
						<div className="absolute top-1 left-1">
						 <p className=" [text-shadow:_5px_5px_3px_rgb(0_0_0_/_70%)] 
						 text-white text-8xl pt-4 px-4">Seating <br/>Upto 40% <br/>
						OFF</p>
						<Link href="/" className="absolute ml-6 bg-amber-500 py-2 px-3 
						hover:bg-amber-600 text-white font-bold 
						hover:text-gray-900">Shop Now</Link>
						</div>
					</div>
					<div className="relative hidden duration-700 ease-in-out" data-carousel-item>
						<img src={src[1].src} 
						className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
						alt="carousel image 2"/>
						<div className="absolute top-1 left-1">
						<p className="text-white [text-shadow:_5px_5px_3px_rgb(0_0_0_/_70%)] text-8xl pt-4 px-4">Moderna Series <br/>Avaialable <br/>
						Now</p>
						<Link href="/" className="absolute ml-6 bg-amber-500 py-2 px-3 
						hover:bg-amber-600 text-white font-bold 
						hover:text-gray-900">Shop Now</Link>
						</div>
					</div>
					<div className="relative hidden duration-700 ease-in-out" data-carousel-item>
						<img src={src[2].src} 
						className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
						alt="carousel image 3"/>
						<div className="absolute top-1 left-1">
						<p className="text-white [text-shadow:_5px_5px_3px_rgb(0_0_0_/_70%)] 
						 text-8xl px-4 pt-4">Nomad Series <br/>Upto 40% <br/>
						OFF</p>
						<Link href="/" className="absolute ml-6 bg-amber-500 py-2 px-3 
						hover:bg-amber-600 text-white font-bold 
						hover:text-gray-900">Shop Now</Link>
						</div>
					</div>
					<div className="relative hidden duration-700 ease-in-out" data-carousel-item>
						<img src={src[3].src} 
						className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
						alt="carousel image 4"/>
						<div className="absolute top-1 left-1">
						<p className="text-white [text-shadow:_5px_5px_3px_rgb(0_0_0_/_70%)] 
						text-8xl pt-4 pb-2 px-4">Union Series <br/>Save Upto <br/>
						$100</p>
						<Link href="/" className="absolute ml-6 bg-amber-500 py-2 px-3 
						hover:bg-amber-600 text-white font-bold 
						hover:text-gray-900">Shop Now</Link>
						</div>
					</div>
					<div className="relative hidden duration-700 ease-in-out" data-carousel-item>
						<img src={src[4].src} 
						className="absolute block opacity-90 w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
						alt="carousel image 5"/>
						<div className="absolute top-0 right-0 flex flex-col justify-end">
						    <div>
						    <p className="[text-shadow:_5px_5px_3px_rgb(0_0_0_/_70%)] 
						    text-right text-white stroke-black  text-8xl pt-4 px-4">Vicar  <br/>New Designs<br/>
						    Available</p>
						    </div>
						    <div className="ml-auto mr-5 mt-3">
						    <Link href="/" className="bg-amber-500 py-3 px-3 
						    hover:bg-amber-600 text-white font-bold 
						    hover:text-gray-900">Shop Now</Link>
						    </div>
						</div>
					</div>
				
				<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
					<button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
				</div>
				
				<button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
						    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
						    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>
			</div>
        </section>
    );
};
