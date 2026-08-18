import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Feane | Good Food. Great Moments.',
  description: 'Discover Feane&apos;s modern dining experience with fresh ingredients, signature dishes, and an AI-powered dining assistant.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="bg-feane-bg text-white antialiased min-h-screen flex flex-col cursor-none md:cursor-auto">
        <CustomCursor />
        <CartProvider>
          <Navbar />
          <Cart />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
