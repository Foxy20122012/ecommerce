import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-400  sky-400 to-sky-300 bg-blend-soft-light py-8 dark:bg-gray-700">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* Columna 1 */}
          <div>
            <a href="/" className="flex items-center md:flex md:justify-start md:mx-auto ml-auto">
              <Image
                src="https://i.pinimg.com/originals/ab/ca/4c/abca4c51c7e166b2980105b5e98b7ac2.jpg"
                alt="VIA Asesores"
                className="h-28 w-40 mb-4 py-2"
                width={100}
                height={100}
              />
            </a>
            <ul className="text-white dark:text-white font-medium">
              <li className="mb-4">
                <a href="/contactame" className="hover:underline">Contactos</a>
              </li>
              <li className="mb-4">
                <a href="/nosotros" className="hover:underline">Nosotros</a>
              </li>
              <li className="mb-4">
                <a href="/pres-Servicios" className="hover:underline">Servicios</a>
              </li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-black">Shop Categories</h2>
            <ul className="text-white dark:text-gray-400 font-sans">
            <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Phones</a>
              </li>
              <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Laptops</a>
              </li>
              <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Desktops</a>
              </li>
              <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Watches</a>
              </li>
              <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Tvs</a>
              </li>
              <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Accessories</a>
              </li>
              {/* ... (Resto del contenido de la columna) */}
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h2 className="mb-6 text-sm text-gray-900 uppercase dark:text-black font-bold">Customer Service</h2>
            <ul className="text-white dark:text-gray-400 font-sans">
            <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Contact Us</a>
              </li>
              <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Shipping Policy</a>
              </li>
              <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Return & Exchanges</a>
              </li>
              <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">Watches</a>
              </li>
              <li className="mb-4 text-white">
                <a href="/pres-Servicios" className="hover:underline">FAQs</a>
              </li>
              {/* ... (Resto del contenido de la columna) */}
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-black">About Us</h2>
            <ul className="text-white dark:text-gray-400 font-sans">
              <p className="mb-4 text-white">
                At our electronics store, we offer a wide variety of products, including laptops, desktops, tablets, cell phones, TVs, and more. We also offer repair services for your electronics. We have been in business for 10 years and have a great reputation in the community. Our goal is to provide our customers with the best service possible. If you have any questions, please feel free to contact us at any time.
              </p>
              {/* ... (Resto del contenido de la columna) */}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://github.com/Foxy20122012">E-shop</a>. </span>
        <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
          <a href="https://www.facebook.com/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
