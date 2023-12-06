export default function Features({src}) {
    return (
    <section className="bg-gray-900 dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
                Solving the Biggest Challenges</h2>
            <p className="text-white sm:text-xl dark:text-white">Here at Furnix we 
            are focusing on solving the biggest challenges when it come sot furniture.</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="bg-gray-900 rounded-lg">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-amber-500 lg:h-12 lg:w-12 dark:bg-primary-900 transition duration-100 ease-in-out hover:rotate-180">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 10.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 0a2.225 2.225 0 0 0-1.666.75H12m3.5-.75a2.225 2.225 0 0 1 1.666.75H19V7m-7 4V3h5l2 4m-7 4H6.166a2.225 2.225 0 0 0-1.666-.75M12 11V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9h1.834a2.225 2.225 0 0 1 1.666-.75M19 7h-6m-8.5 3.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/>
  </svg>
  </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Fast & Free Shipping</h3>
                <p className="text-white dark:text-white">Every single order ships for free. No minimums, no tiers, no fine print whatsoever.</p>
            </div>
            <div className="bg-gray-900 rounded-lg">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-amber-500 lg:h-12 lg:w-12 dark:bg-primary-900 transition duration-100 ease-in-out hover:rotate-90">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 1h4m0 0v4m0-4-5 5.243M5 15H1m0 0v-4m0 4 5.243-5"/>
  </svg>  
  
  </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Modular, easy to move design</h3>
                <p className="text-white dark:text-white">Our innovative modular design is driven by the belief that furniture should fit this home, and the next one.</p>
            </div>
            <div className="bg-gray-900 rounded-lg">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-amber-500 lg:h-12 lg:w-12 dark:bg-primary-900 transition duration-100 ease-in-out hover:rotate-180">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
  </svg></div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Durable, made from premium materials</h3>
                <p className="text-white dark:text-white">We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather.</p>
            </div>
        </div>
    </div>
  </section>);
}