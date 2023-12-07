import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from './context/CartProvider';
const inter = Inter({  weight: '400', subsets: ['latin'] })
import { ClientProvider } from './context/ClientProvider.js';

export const metadata = {
  title: 'Furnix',
  description: 'Furnix App',
}

export default function RootLayout({ children }) {

  return (
    
    <html lang="en">
      <head>
      
      </head>
      <body className={inter.className}>
      <ClientProvider >
      <CartProvider>
      
            {children}
            
      </CartProvider>
      </ClientProvider>
      
      </body>
    </html>
    
  )
}
