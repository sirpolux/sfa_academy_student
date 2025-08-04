import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu as MenuIcon, X as CloseIcon, LogOut, UserPlus, ChevronDown, Store, BookText } from 'lucide-react';
import logoSmall from '../../../public/img/logo_small.png';



export default function NavBar(){
    const { auth } = usePage().props;
    const user = auth?.user;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);
    const toggleDropdown = (label) => setDropdownOpen(dropdownOpen === label ? null : label);


    const [isBookingOpenDesktop, setIsBookingOpenDesktop] = useState(false);
    const [isBookingOpenMobile, setIsBookingOpenMobile] = useState(false);

    // Toggle handlers
    const toggleBookingDesktop = () => setIsBookingOpenDesktop(prev => !prev);
    const toggleBookingMobile = () => setIsBookingOpenMobile(prev => !prev);


    const menuItems = [
        // { label: 'Retreats',
        //     submenu:[
        //         { label: 'Retreat', to: '/retreat' },
        //         { label: 'My Retreat Bookings', to: '/bookings' },
        //         { label: 'Single Booking', to: '/bookings/single' },
        //         { label: 'Group Booking', to: '/bookings/group' }
        //     ]
        // },
        { label: 'Home', to: '/' },

        { label: 'About Us', to: '/about-us' },
        { label: 'Contact Us', to: '/contact-us' },
        
        // {
        //     label: 'Media & News',
        //     submenu: [
        //         { label: 'News', to: '/news' },
        //         // { label: 'News', to: '/news' },
        //         { label: 'Gallery', to: '/gallery' }
        //     ]
        // },
        // {
        //     label: 'Bookings',
        //     submenu: [
        //         { label: 'Single Booking', to: '/bookings/single' },
        //         { label: 'Group Booking', to: '/bookings/group' }
        //     ]
        // },
        // { label: 'Book Store', to: 'https://store.materecclesiaemonastery.org/' },
    ];

    const handleLogout = (e) => {
        e.preventDefault();
        window.axios.post('/logout').then(() => {
            window.location.reload();
        });
    };

    return (
        <header className="w-full h-20 flex items-center sticky top-0 bg-white shadow z-50">
            <nav className="flex justify-between items-center w-full px-4">
                <div className="flex items-center gap-3">
                    <img src={logoSmall} alt="Ave Mater Ecclesiae Logo" className="w-10 h-10 object-contain" />
                    <Link href="/" className="hidden md:inline text-xl font-semibold text-gray-600">
                        Solid Foundation Academy
                    </Link>
                </div>

                <div
                    className={`fixed inset-0 bg-white pt-24 px-6 md:px-0 md:pt-0 md:static md:flex md:items-center md:justify-center transition-transform duration-300 ${drawerOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
                        }`}
                >

                    <div className='block md:hidden px-4 font-semibold text-brand-brown-dark mb-2'>
                        Mobile Menu
                        <hr/>
                    </div>
                
                    <ul className="flex flex-col md:flex-row md:gap-6 gap-4 text-gray-700">
                        
                        {menuItems.map((item) => (
                            <li key={item.label} className="relative">
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="flex items-center gap-1 px-4 py-2 rounded-full hover:text-primary transition duration-300"
                                        >
                                            {item.label} <ChevronDown size={16} />
                                        </button>
                                        {dropdownOpen === item.label && (
                                            <ul className="absolute bg-white shadow rounded mt-2 py-2 w-48 z-50">
                                                {item.submenu.map((sub) => (
                                                    <li key={sub.to}>
                                                        <Link
                                                            href={sub.to}
                                                            onClick={() => setDrawerOpen(false)}
                                                            className="block px-4 py-2 text-sm hover:bg-primary hover:text-brand-red-dark"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (

                                    // item.label === 'Book Store' ?
                                    //     <div className=''>
                                    //         <a
                                    //             href={item.to}
                                    //             target='_blank'
                                    //             onClick={() => setDrawerOpen(false)}
                                    //             className="flex items-center gap-2 px-4 py-2 bg-brand-red-dark hover:bg-brand-red-light text-white rounded-full text-sm justify-center"
                                    //         >
                                    //             {item.label}
                                    //             <BookText />

                                    //         </a>
                                           
                                    //     </div>
                                    //     :
                                        <Link
                                            href={item.to}
                                            onClick={() => setDrawerOpen(false)}
                                            className="block px-4 py-2 rounded-full hover:text-primary transition duration-300"
                                        >
                                            {item.label}
                                        </Link>


                                )}
                            </li>
                        ))}


                    </ul>
                </div>

                <div className="flex items-center gap-3 z-50">
                    <div className="hidden md:block relative">
                        <button
                            onClick={() => toggleDropdown('BookingsMob')}
                            className="px-4 py-2 bg-primary text-white text-sm rounded-full font-medium hover:bg-primary/80 transition flex items-center gap-1"
                        >
                            Results <ChevronDown size={16} />
                        </button>
                        {dropdownOpen === 'BookingsMob' && (
                            <ul className="absolute bg-white shadow rounded mt-2 py-2 w-48 right-0 z-50">
                                <li>
                                    <Link
                                        href="/student/termly/result/index"
                                        className="block px-4 py-2 text-sm hover:bg-primary hover:text-white"
                                    >
                                       Termly Result
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/student/annual/result/index"
                                        className="block px-4 py-2 text-sm hover:bg-primary hover:text-white"
                                    >
                                        Annual Result
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    <button onClick={toggleDrawer} className="md:hidden text-gray-800 text-3xl">
                        {drawerOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
                    </button>
                </div>
            </nav>
        </header>
    );
};
