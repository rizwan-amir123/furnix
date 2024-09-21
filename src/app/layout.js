import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from './context/CartProvider';
const inter = Inter({  weight: '400', subsets: ['latin'] })
import { ClientProvider } from './context/ClientProvider.js';
import Script from 'next/script';

export const metadata = {
  title: 'Furnix',
  description: 'Furnix App',
}

export default function RootLayout({ children }) {

  return (
    
    <html lang="en">
      <head>
      {/*<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />*/}

      </head>
      <body className={inter.className}>
      {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>*/}
	  <Script src="https://unpkg.com/flowbite@latest/dist/flowbite.min.js" strategy="beforeInteractive" />
      <ClientProvider >
      <CartProvider>
      
            {children}
            
      </CartProvider>
      </ClientProvider>
      
      </body>
    </html>
    
  )
}
