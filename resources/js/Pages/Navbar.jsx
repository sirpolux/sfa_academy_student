import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoSmall from '../../../public/img/logo_small.png';

const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Contact Us', to: '/contact-us' },
    {
        label: 'Results',
        submenu: [
            { label: 'Termly Result', to: '/student/termly/result/index' },
            { label: 'Annual Result', to: '/student/annual/result/index' },
        ],
    },
];

export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [mobileResultsOpen, setMobileResultsOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen((prev) => !prev);
    const toggleDropdown = (label) =>
        setDropdownOpen((prev) => (prev === label ? null : label));

    const closeMenu = () => {
        setDrawerOpen(false);
        setDropdownOpen(null);
        setMobileResultsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-dark/5 bg-cream/80 backdrop-blur-lg">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
                    <img
                        src={logoSmall}
                        alt="Solid Foundation Academy Logo"
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="hidden flex-col sm:flex">
                        <span className="font-display text-lg font-bold leading-tight text-primary">
                            Solid Foundation
                        </span>
                        <span className="-mt-1 text-xs tracking-widest text-muted">
                            ACADEMY, AKWANGA
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-1 md:flex">
                    {menuItems.map((item) => (
                        <div key={item.label} className="relative">
                            {item.submenu ? (
                                <>
                                    <button
                                        onClick={() => toggleDropdown(item.label)}
                                        className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-dark transition hover:bg-primary/10 hover:text-primary"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            className={`transition ${dropdownOpen === item.label ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {dropdownOpen === item.label && (
                                        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-dark/5 bg-white py-1 shadow-lg">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.to}
                                                    href={sub.to}
                                                    onClick={() => setDropdownOpen(null)}
                                                    className="block px-4 py-2.5 text-sm font-medium text-dark transition hover:bg-primary/10 hover:text-primary"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.to}
                                    className="rounded-full px-4 py-2 text-sm font-medium text-dark transition hover:bg-primary/10 hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={toggleDrawer}
                    className="rounded-lg p-2 text-dark transition hover:bg-primary/10 md:hidden"
                    aria-label="Toggle menu"
                >
                    {drawerOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {drawerOpen && (
                <div className="border-t border-dark/5 bg-white px-4 pb-6 pt-2 md:hidden">
                    <nav className="flex flex-col gap-1">
                        {menuItems.map((item) =>
                            item.submenu ? (
                                <div key={item.label}>
                                    <button
                                        onClick={() =>
                                            setMobileResultsOpen((prev) => !prev)
                                        }
                                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-dark transition hover:bg-primary/10"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={18}
                                            className={`transition ${mobileResultsOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {mobileResultsOpen && (
                                        <div className="ml-4 flex flex-col border-l-2 border-primary/20 pl-4">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.to}
                                                    href={sub.to}
                                                    onClick={closeMenu}
                                                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-dark transition hover:bg-primary/10 hover:text-primary"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={item.to}
                                    onClick={closeMenu}
                                    className="rounded-xl px-4 py-3 text-base font-medium text-dark transition hover:bg-primary/10 hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            ),
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}
