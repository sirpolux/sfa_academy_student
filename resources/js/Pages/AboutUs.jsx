import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Target, Compass, Lightbulb, ShieldCheck } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';

const coreValues = [
    { label: 'Godliness', icon: ShieldCheck },
    { label: 'Integrity', icon: ShieldCheck },
    { label: 'Diligence', icon: Compass },
    { label: 'Initiative', icon: Lightbulb },
    { label: 'Respect', icon: ShieldCheck },
    { label: 'Equality', icon: Compass },
    { label: 'Accountability', icon: ShieldCheck },
];

export default function About() {
    return (
        <GuestLayout>
            <div>
                <Head title="About Us" />

                {/* Hero Section */}
                <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <span className="section-label">About Us</span>
                                <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                                    Solid Foundation Academy
                                </h2>
                                <p className="mt-4 text-lg leading-relaxed text-cream/80">
                                    A Christian Co-Educational institution in
                                    Akwanga offering Daycare, Nursery, Primary,
                                    and Secondary education with a strong moral
                                    and academic foundation.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute inset-0 rotate-3 rounded-3xl bg-accent/30" />
                                <img
                                    src="/img/sch_img.png"
                                    alt="Solid Foundation Campus"
                                    className="relative w-full rounded-3xl object-cover shadow-2xl ring-4 ring-cream/20"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Vision */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white py-20 px-4 sm:px-6 lg:px-8"
                >
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                            <Target className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="mt-6 font-display text-2xl font-bold text-dark sm:text-3xl">
                            Vision
                        </h3>
                        <p className="mt-6 text-lg leading-relaxed text-muted text-justify">
                            The vision of Solid Foundation Academy, Akwanga is to
                            lay a solid foundation of Christian education for
                            each child to ensure a bright future.
                        </p>
                    </div>
                </motion.section>

                {/* Core Values */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-cream py-20 px-4 sm:px-6 lg:px-8"
                >
                    <div className="mx-auto max-w-5xl">
                        <div className="text-center">
                            <span className="section-label">Our Values</span>
                            <h3 className="mt-4 font-display text-2xl font-bold text-dark sm:text-3xl">
                                Core Values
                            </h3>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                            {coreValues.map(({ label, icon: Icon }, index) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-dark/5 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Icon size={22} />
                                    </div>
                                    <span className="mt-4 text-sm font-semibold text-dark">
                                        {label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        <p className="mt-12 text-lg leading-relaxed text-muted text-justify">
                            We aim to provide an equal opportunity for each child
                            to grow in wisdom and excellence, achieving their
                            maximum potential. This is accomplished through the
                            recruitment and orientation of dedicated Christian
                            teachers and support staff, committed to imparting
                            sound academic knowledge, Christian morals, and
                            social values in a conducive learning environment
                            with the best modern teaching and learning materials.
                        </p>
                    </div>
                </motion.section>
            </div>
        </GuestLayout>
    );
}
