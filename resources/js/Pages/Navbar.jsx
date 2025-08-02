import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleResult = () => setIsResultOpen(!isResultOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="font-bold text-lg text-indigo-700">Solid Foundation Academy</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium items-center">
          <li><Link href="/" className="hover:text-indigo-600 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-indigo-600 transition">About</Link></li>
          <li><Link href="/admissions" className="hover:text-indigo-600 transition">Admissions</Link></li>
          <li><Link href="/contact-us" className="hover:text-indigo-600 transition">Contact Us</Link></li>
          <li className="relative group">
            <div className="flex items-center gap-1 hover:text-indigo-600 transition cursor-pointer">
              <span>Result</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            {/* This dropdown stays open while hovering over it */}
            <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white mt-2 rounded shadow-md w-44 z-50">
              <li>
                <Link href="/result/termly" className="px-4 py-2 hover:bg-gray-100">
                  Termly Result
                </Link>
              </li>
              <li>
                <Link href="/result/annual" className="px-4 py-2 hover:bg-gray-100">
                  Annual Result
                </Link>
              </li>
            </ul>
          </li>

        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4 text-gray-800 font-medium">
            <li><Link href="/" className="block">Home</Link></li>
            <li><Link href="/about" className="block">About</Link></li>
            <li><Link href="/admissions" className="block">Admissions</Link></li>
            <li><Link href="/contact-us" className="block">Contact Us</Link></li>
            <li>
              <button
                onClick={toggleResult}
                className="flex items-center justify-between w-full"
              >
                Result <ChevronDown className="w-4 h-4" />
              </button>
              {isResultOpen && (
                <ul className="mt-2 pl-4 space-y-2 text-sm">
                  <li><Link href="/result/termly" className="block">Termly Result</Link></li>
                  <li><Link href="/result/annual" className="block">Annual Result</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
