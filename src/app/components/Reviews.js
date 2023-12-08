export default function Reviews({src}) {
    return (
        <section className="bg-gray-900 text-gray-800 pt-20">
            <p align="center" className="text-4xl pb-20 font-semibold text-white "> Awards & Accolades</p>
            <section className="bg-amber-500 pt-10 pb-10">
                <p align="center" className="text-4xl font-semibold "> </p>

                <div className="flex ">
                    <img src="https://drive.google.com/uc?export=view&id=1TIpsHiaBm0JrAOiMoi5G7xpQJn2IVnfW" className="w-1/2 " alt="storage"/>
                    <figure className="max-w-screen-md self-center mt-10 mx-auto text-center">
                        <svg className="w-10 h-10 mx-auto mb-3 text-gray-900 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                        </svg>
                        <blockquote>
                            <p className="text-3xl font-md px-10 text-gray-900 dark:text-white">
                            It has helped me be a little <br></br>more organized, and it is <br></br>quite beautiful to stare at.</p>
                        </blockquote>
                        <p className="mt-20 pt-20"> AD Cleverest Awards</p>
                    </figure>
                </div>
            </section>

            <section className="pt-10 pb-10">
                <div className="flex ">
                    <figure className="max-w-screen-md mt-10 self-center mx-auto text-center">
                        <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600 fill-amber-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                        </svg>
                        <blockquote>
                            <p className="text-3xl font-md px-10 text-white dark:text-white">
                            A convention-breaking design, that <br></br>offers great nap inducing softness.</p>
                        </blockquote>
                        <p className="mt-20 pt-20 text-white"> GQ Home Awards</p>
                    </figure>
                    <img src="https://drive.google.com/uc?export=view&id=1YhMv3KmG1tdIcONT0LaVjYoBsHBRlNIP" className="w-1/2" alt="..."/>
                </div>
            </section>

            

        </section>
    );
}