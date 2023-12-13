import Link from 'next/link';
import { Carousel } from 'flowbite';
export default function Carousel({src}) {
    return (
        <section className="bg-black  text-white">


<Carousel>
  <img
    alt="..."
    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
  />
  <img
    alt="..."
    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
  />
  <img
    alt="..."
    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
  />
  <img
    alt="..."
    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
  />
  <img
    alt="..."
    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
  />
</Carousel>
        </section>
    );
};