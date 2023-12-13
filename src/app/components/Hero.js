import Link from 'next/link';
export default function Hero({src}) {
    return (
        <section className="bg-stone-200 text-gray-800 py-20 pt-20 pb-5">
            {/*<p align="center" className="text-4xl font-semibold  "> LATEST DESIGNS</p>*/}

            <h2 className="flex flex-row flex-nowrap items-center ">
                <span className="flex-grow block border-t border-neutral-600"></span>
                <span className="flex-none block mx-4 px-4 py-4 rounded leading-none 
                 bg-neutral-600 text-white text-2xl font-semibold font-sans">
                    LATEST DESIGNS
                </span>
                <span className="flex-grow block border-t border-neutral-600"></span>
            </h2>
            <div className="grid-cols-3 grid mx-10 my-10 pt-5 justify-between">
                <Link href="/seating">
                <div className="p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=1YhMv3KmG1tdIcONT0LaVjYoBsHBRlNIP" 
                    className="group-hover:cursor-pointer group-hover:opacity-60" alt="seating"/>
                    <p className="relative px-1 py-2 text-white  text-base font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500 group-hover:font-bold
                    group-hover:cursor-pointer
                    ">Seating</p>
                </div>
                </Link>

                <Link href="/seating">
                <div className="h-full p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=1bxDXv7bhlA_xYE3Sm_sZlUNFM3SyhCCo" 
                    className="group-hover:opacity-60 group-hover:cursor-pointer" alt="accent chairs"/>
                    <p className="relative px-1 py-2 text-base  text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500
                    group-hover:font-bold group-hover:cursor-pointer
                    ">Accent Chairs</p>
                </div>
                </Link>

                <Link href="/storage">
                <div className="p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=1hM7fErxVc24FGPVQ5wkGa0x61yK9KWaA" 
                    className="group-hover:opacity-60 group-hover:cursor-pointer" alt="storage"/>
                    <p className="relative px-1 py-2 text-base  text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500 group-hover:font-bold
                    group-hover:cursor-pointer">Storage</p>
                </div>
                </Link>

                <Link href="/bedroom">
                <div className="p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=1KBZXQOYEV4hyg52Ffmmx4k92Wqdu1WFh" 
                    className="group-hover:opacity-60 group-hover:cursor-pointer" alt="bedroom"/>
                    <p className="relative px-1 py-2 text-base  text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500 group-hover:font-bold
                    group-hover:cursor-pointer">Bedroom</p>
                </div>
                </Link>

                <Link href="/dining">
                <div className="p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=10iEXQooXLTE0Jz2CuG6MsNjXhgWWWKro"
                    className="group-hover:opacity-60 group-hover:cursor-pointer" alt="dining"/>
                    <p className="relative px-1 py-2 text-base  text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500 group-hover:font-bold
                    group-hover:cursor-pointer">Dining</p>
                </div>
                </Link>

                <Link href="/rugs">
                <div className="group p-3 w-full">
                    <img src="https://drive.google.com/uc?export=view&id=1Duv9SUvzkA8FneS6PL6RF8wQ5KeVRoeR" 
                    className="group-hover:opacity-60 group-hover:cursor-pointer" alt="rugs"/>
                    <p className="relative px-1 py-2 text-base  text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500 group-hover:font-bold
                    group-hover:cursor-pointer">Rugs</p>
                </div>
                </Link>
            </div>


        </section>
    );
    }