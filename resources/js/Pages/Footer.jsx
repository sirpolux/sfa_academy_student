import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    MapPin,
    Mail,
    Phone,
    Clock,
    ChevronRight,
    Send,
} from 'lucide-react';
import logoSmall from '../../../public/img/logo_small.png';

export default function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Wire to real newsletter endpoint when available
        setName('');
        setEmail('');
    };

    const quickLinks = [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about-us' },
        { label: 'Contact Us', to: '/contact-us' },
        { label: 'Termly Result', to: '/student/termly/result/index' },
        { label: 'Annual Result', to: '/student/annual/result/index' },
    ];

    return (
        <footer className="bg-primary text-cream">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand & Intro */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src={logoSmall}
                                alt="Solid Foundation Academy Logo"
                                className="h-12 w-12 rounded-full object-cover ring-2 ring-cream/30"
                            />
                            <div>
                                <h2 className="font-display text-lg font-bold leading-tight text-white">
                                    Solid Foundation
                                </h2>
                                <p className="-mt-1 text-xs tracking-widest text-cream/70">
                                    ACADEMY, AKWANGA
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-cream/80">
                            A Christian Co-Educational institution in Akwanga
                            offering Daycare, Nursery, Primary, and Secondary
                            education with a strong moral and academic
                            foundation.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {[
                                { icon: Facebook, label: 'Facebook' },
                                { icon: Twitter, label: 'Twitter' },
                                { icon: Instagram, label: 'Instagram' },
                                { icon: Linkedin, label: 'LinkedIn' },
                            ].map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-accent hover:text-white"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-cream/60">
                            Get In Touch
                        </h3>
                        <ul className="mt-4 space-y-4 text-sm text-cream/80">
                            <li className="flex gap-3">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                                <span>
                                    Jos Road, Opp. College of Education Akwanga,
                                    Behind Rishamah College, Nasarawa State.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                                <a
                                    href="mailto:solidfoundationakw@gmail.com"
                                    className="hover:text-white"
                                >
                                    solidfoundationakw@gmail.com
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                                <a href="tel:08033895370" className="hover:text-white">
                                    08033895370
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                                <span>Mon – Fri: 7:20 AM – 2:30 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-cream/60">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        href={link.to}
                                        className="group flex items-center gap-2 text-cream/80 transition hover:text-white"
                                    >
                                        <ChevronRight
                                            size={14}
                                            className="text-accent transition group-hover:translate-x-0.5"
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-cream/60">
                            Request Newsletter
                        </h3>
                        <p className="mt-4 text-sm text-cream/70">
                            Stay up to date with our latest news and events.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-2.5 text-sm text-white placeholder-cream/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-2.5 text-sm text-white placeholder-cream/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                                required
                            />
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-dark"
                            >
                                <Send size={16} />
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-center text-sm text-cream/60 sm:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} Solid Foundation
                        Academy. All Rights Reserved.
                    </p>
                    <p>
                        Designed by{' '}
                        <span className="font-semibold text-accent">Mac. Paul</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
