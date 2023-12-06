export default function Hero({src}) {
    return (
        <section className="bg-stone-200 text-gray-800 py-20 pt-20 pb-5">
            <p align="center" className="text-4xl font-semibold "> Latest Designs</p>
            <div className="grid-cols-3 grid mx-10 my-10 pt-5 justify-between">
                <div className="p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=1YhMv3KmG1tdIcONT0LaVjYoBsHBRlNIP" 
                    className="group-hover:opacity-60" alt="seating"/>
                    <p className="relative px-1 py-2 text-lg text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500
                    ">Seating</p>
                </div>
                <div className="h-full p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=1bxDXv7bhlA_xYE3Sm_sZlUNFM3SyhCCo" 
                    className="group-hover:opacity-60" alt="accent chairs"/>
                    <p className="relative px-1 py-2 text-lg text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500">Accent Chairs</p>
                </div>
                <div className="p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=1hM7fErxVc24FGPVQ5wkGa0x61yK9KWaA" 
                    className="group-hover:opacity-60" alt="storage"/>
                    <p className="relative px-1 py-2 text-lg text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500">Storage</p>
                </div>
                <div className="p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=1KBZXQOYEV4hyg52Ffmmx4k92Wqdu1WFh" 
                    className="group-hover:opacity-60" alt="bedroom"/>
                    <p className="relative px-1 py-2 text-lg text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500">Bedroom</p>
                </div>
                <div className="p-3 w-full group">
                    <img src="https://drive.google.com/uc?export=view&id=10iEXQooXLTE0Jz2CuG6MsNjXhgWWWKro"
                    className="group-hover:opacity-60" alt="dining"/>
                    <p className="relative px-1 py-2 text-lg text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500">Dining</p>
                </div>
                <div className="group p-3 w-full">
                    <img src="https://drive.google.com/uc?export=view&id=1Duv9SUvzkA8FneS6PL6RF8wQ5KeVRoeR" 
                    className="group-hover:opacity-60" alt="rugs"/>
                    <p className="relative px-1 py-2 text-lg text-white font-medium absolute bottom-0 
                    left-0 right-0 px-4 py-2 bg-neutral-600 
                    transition duration-100 ease-in-out group-hover:bg-amber-500">Rugs</p>
                </div>
            </div>


        </section>
    );
    }