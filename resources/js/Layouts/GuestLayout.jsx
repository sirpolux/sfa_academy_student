import Footer from '@/Pages/Footer';
import NavBar from '@/Pages/Navbar';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
