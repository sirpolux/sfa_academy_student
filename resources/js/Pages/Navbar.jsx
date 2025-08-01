import  { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + School Name */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="School Logo" className="h-10 w-10 rounded-full" />
            <span className="font-bold text-lg text-indigo-700">Solid Foundation Academy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
            <Link href="/admissions" className="hover:text-indigo-600 transition">Admissions</Link>
            <Link href="/contact" className="hover:text-indigo-600 transition">Contact Us</Link>

            {/* Dropdown for Result */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="hover:text-indigo-600 transition">Result</button>
              {showDropdown && (
                <div className="absolute top-8 left-0 bg-white shadow rounded-md w-48">
                  <Link href="/results/termly" className="block px-4 py-2 hover:bg-indigo-50">Termly Result</Link>
                  <Link href="/results/annual" className="block px-4 py-2 hover:bg-indigo-50">Annual Result</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6 text-indigo-700" /> : <Menu className="w-6 h-6 text-indigo-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 space-y-2 px-6">
          <Link href="/" className="block hover:text-indigo-600">Home</Link>
          <Link href="/about" className="block hover:text-indigo-600">About</Link>
          <Link href="/admissions" className="block hover:text-indigo-600">Admissions</Link>
          <Link href="/contact" className="block hover:text-indigo-600">Contact Us</Link>

          {/* Mobile Submenu for Result */}
          <details className="group">
            <summary className="cursor-pointer hover:text-indigo-600">Result</summary>
            <div className="pl-4 mt-2">
              <Link href="/results/termly" className="block hover:text-indigo-600">Termly Result</Link>
              <Link href="/results/annual" className="block hover:text-indigo-600">Annual Result</Link>
            </div>
          </details>
        </div>
      )}
    </nav>
  );
}
