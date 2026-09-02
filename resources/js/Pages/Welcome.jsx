import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
    FaPlay,
    FaMusic,
    FaPaintBrush,
    FaBus,
    FaUtensils,
    FaGlobe,
} from 'react-icons/fa';
import { Users, BookOpen, Award, HeartHandshake } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';

const facilities = [
    {
        title: 'Play Ground',
        icon: FaPlay,
        desc: 'Fun and safe outdoor play areas for recreation.',
    },
    {
        title: 'Music and Dance',
        icon: FaMusic,
        desc: 'Creative expression through rhythm and movement.',
    },
    {
        title: 'Arts and Crafts',
        icon: FaPaintBrush,
        desc: 'Inspiring creativity through hands-on learning.',
    },
    {
        title: 'Safe Transportation',
        icon: FaBus,
        desc: 'Reliable school buses with trained drivers.',
    },
    {
        title: 'Healthy Food',
        icon: FaUtensils,
        desc: 'Nutritious meals for a growing mind and body.',
    },
    {
        title: 'Educational Tour',
        icon: FaGlobe,
        desc: 'Exciting field trips to broaden learning.',
    },
];

const stats = [
    { label: 'Students Enrolled', value: '500+' },
    { label: 'Dedicated Teachers', value: '40+' },
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Nurturing Environment', value: '100%' },
];

export default function Welcome() {
    return (
        <GuestLayout>
            <div>
                <Head title="Home" />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-primary">
                    {/* Decorative circles */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/60" />
                    <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent/20" />
                    <div className="pointer-events-none absolute right-1/4 top-1/3 h-24 w-24 rounded-full bg-secondary/20" />

                    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cream">
                                    <HeartHandshake size={14} />
                                    Wisdom & Excellence
                                </span>
                                <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                                    Building a Solid
                                    <span className="mt-2 block text-accent">
                                        Foundation for Tomorrow
                                    </span>
                                </h1>
                                <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
                                    Our school in Akwanga offers Daycare, Nursery,
                                    Primary, and Secondary education in a nurturing
                                    Christian environment with state-of-the-art
                                    facilities.
                                </p>
                                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#about"
                                        className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-dark"
                                    >
                                        Discover More
                                    </a>
                                    <a
                                        href="/student/termly/result/index"
                                        className="inline-flex items-center justify-center rounded-full border-2 border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream hover:text-primary"
                                    >
                                        Check Results
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 -rotate-3 rounded-3xl bg-accent/30" />
                                <img
                                    src="/img/sch_img.png"
                                    alt="School Activities"
                                    className="relative w-full rounded-3xl object-cover shadow-2xl ring-4 ring-cream/20"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Strip */}
                <section className="border-b border-dark/5 bg-white">
                    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center"
                            >
                                <div className="font-display text-4xl font-bold text-primary">
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-sm font-medium text-muted">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Quote Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-cream py-16 text-center px-4"
                >
                    <div className="mx-auto max-w-4xl">
                        <div className="flex justify-center">
                            <span className="font-display text-7xl text-accent/40">"</span>
                        </div>
                        <blockquote className="mt-2 font-display text-2xl font-semibold italic leading-relaxed text-dark md:text-3xl">
                            Cultivation of mind should be the ultimate aim of human
                            existence.
                        </blockquote>
                        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
                            Dr. B.R. Ambedkar
                        </p>
                    </div>
                </motion.section>

                {/* Why Choose Us Section */}
                <section className="bg-sand py-20 px-4 sm:px-6 lg:px-8" id="about">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center">
                            <span className="section-label">Why Choose Us</span>
                            <h2 className="mt-4 font-display text-3xl font-bold text-dark sm:text-4xl">
                                Why Choose Solid Foundation Academy?
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-muted">
                                Our programs are tailored to inspire academic
                                excellence and moral uprightness from a young age.
                            </p>
                        </div>

                        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {facilities.map((facility, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-accent group-hover:text-white">
                                            <facility.icon className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-dark">
                                                {facility.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-muted">
                                                {facility.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-primary py-20 text-center px-4"
                >
                    <div className="mx-auto max-w-3xl">
                        <div className="flex justify-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                                <BookOpen className="h-7 w-7 text-white" />
                            </div>
                        </div>
                        <h2 className="mt-8 font-display text-3xl font-bold text-white sm:text-4xl">
                            Enroll Your Child Today
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-cream/80">
                            Give your child a solid start in life with our
                            balanced curriculum, caring teachers, and vibrant
                            school community.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="/enroll"
                                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-dark"
                            >
                                <Users className="mr-2 h-4 w-4" />
                                Get Started
                            </a>
                            <a
                                href="/contact-us"
                                className="inline-flex items-center justify-center rounded-full border-2 border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream hover:text-primary"
                            >
                                <Award className="mr-2 h-4 w-4" />
                                Contact Us
                            </a>
                        </div>
                    </div>
                </motion.section>
            </div>
        </GuestLayout>
    );
}
