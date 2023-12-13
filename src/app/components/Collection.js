export default function Collection({src}) {
    return (
        <section className="bg-stone-200 text-gray-900 py-20 pt-20 pb-5">
            <h2 className="flex flex-row flex-nowrap items-center ">
                <span className="flex-grow block border-t border-neutral-600"></span>
                <span className="flex-none block mx-4 px-4 py-4 rounded leading-none 
                 bg-neutral-600 text-white text-2xl font-semibold font-sans">
                    EXPLORE FAMOUS COLLECTIONS
                </span>
                <span className="flex-grow block border-t border-neutral-600"></span>
            </h2>

            <div className="flex space-x-3 mx-10 my-10 pt-5">
            
            <div className="group relative w-1/4">
                <img src="https://drive.google.com/uc?export=view&id=1Pb9P9yDnULkWpDgTfY5VmmDnA0UwqEQo" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full 
                w-full overflow-hidden bg-amber-500 bg-fixed opacity-0 
                transition duration-300 ease-in-out group-hover:opacity-50 
                group-hover:cursor-pointer"></div>
    
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                    <h3 className="text-xl text-white font-bold">Union Series</h3>
                    <p className="mt-2 text-sm text-gray-300">Stylish and elegant indoor 
                    furniture collection.
                    </p>
                </div>
            </div>

            <div className="group relative w-1/4">
                <img src="https://drive.google.com/uc?export=view&id=1LSfNHNlBDU9YITbvSnE4StFGZ-ZpSRwj" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full 
                w-full overflow-hidden bg-amber-500 bg-fixed opacity-0 
                transition duration-300 ease-in-out group-hover:opacity-50 
                group-hover:cursor-pointer"></div>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                    <h3 className="text-xl text-white font-bold">Moderna Series </h3>
                    <p className="mt-2 text-sm text-gray-300">Modern and stylish home furniture collection. 
                    </p>
                </div>
            </div>
            
            <div className="group relative w-1/4">
                <img src="https://drive.google.com/uc?export=view&id=1lFPdq5OenVIOzWWDgtTVeBGjJOMCaRve" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full 
                w-full overflow-hidden bg-amber-500 bg-fixed opacity-0 
                transition duration-300 ease-in-out group-hover:opacity-50 
                group-hover:cursor-pointer"></div>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                    <h3 className="text-xl text-white font-bold">Nomad Series</h3>
                    <p className="mt-2 text-sm text-gray-300"> Fancy and sturdy outdoor
                    furniture collection.
                    </p>
                </div>
            </div>

            <div className="group relative w-1/4">
                <img src="https://drive.google.com/uc?export=view&id=1L685w6HBOv92P-pJW6HqcrncBrfRh4fh" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full 
                w-full overflow-hidden bg-amber-500 bg-fixed opacity-0 
                transition duration-300 ease-in-out group-hover:opacity-50 
                group-hover:cursor-pointer"></div>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70
                ">
                    <h3 className="text-xl text-white font-bold "> Vicar Series</h3>
                    <p className="mt-2 text-sm text-gray-300">Classic and long-lasting furniture collection. 
                    </p>
                </div>
            </div>

            

            </div>


        </section>
    );
    }