import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <button className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className="text-2xl font-bold">STAN</Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/shop" className="text-sm font-medium hover:text-gray-600">SHOP</Link>
            <Link to="/about" className="text-sm font-medium hover:text-gray-600">ABOUT</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-gray-600">CONTACT</Link>
          </nav>
          
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}