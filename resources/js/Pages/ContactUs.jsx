import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
    MapPin,
    Mail,
    Phone,
    MessageSquare,
    Send,
} from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Wire to backend contact form endpoint
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <GuestLayout>
            <div>
                <Head title="Contact Us" />

                {/* Header */}
                <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mx-auto max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="section-label">Get In Touch</span>
                            <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                                Contact Us
                            </h1>
                            <p className="mt-4 text-lg text-cream/80">
                                We'd love to hear from you. Reach out with any
                                questions or feedback.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Contact Section */}
                <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
                        {/* Contact Info */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h2 className="font-display text-2xl font-bold text-dark">
                                    Solid Foundation Academy
                                </h2>
                                <p className="mt-2 text-muted">
                                    We're here to help. Visit us or reach out
                                    through any of the channels below.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark">
                                            Address
                                        </h3>
                                        <p className="mt-1 text-sm text-muted">
                                            Behind L.G.E.A Primary School, Angwan
                                            Attah, Akwanga, Nasarawa State,
                                            Nigeria.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark">
                                            Phone
                                        </h3>
                                        <a
                                            href="tel:+2347037719086"
                                            className="mt-1 block text-sm text-accent hover:text-primary"
                                        >
                                            +234 703 771 9086
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark">
                                            Email
                                        </h3>
                                        <a
                                            href="mailto:solidfoundationacademyakwaga@gmail.com"
                                            className="mt-1 block text-sm text-accent hover:text-primary"
                                        >
                                            solidfoundationacademyakwaga@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-dark/5"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <MessageSquare size={22} />
                                </div>
                                <h2 className="font-display text-xl font-bold text-dark">
                                    Send a Message
                                </h2>
                            </div>

                            <div className="mt-8 space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-muted">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-muted">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-muted">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-muted">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="input-field resize-none"
                                        placeholder="Write your message..."
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-dark"
                                >
                                    <Send size={16} />
                                    Send Message
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
