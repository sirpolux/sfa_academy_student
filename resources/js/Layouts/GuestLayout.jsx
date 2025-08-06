import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Pages/Footer';
import NavBar from '@/Pages/Navbar';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="w-full min-h-screen ">
           <NavBar/>
           {children}
            <div className='mb-20'></div>
           <Footer/>
        </div>
    );
}
