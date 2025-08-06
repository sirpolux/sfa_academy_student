import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import GuestLayout from '@/Layouts/GuestLayout';

export default function About() {
  return (
 <GuestLayout>
     <div>
      <Head title="About Us" />

      {/* Hero Section with Image */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-indigo-800 mb-4">
              Solid Foundation Academy
            </h2>
            <p className="text-lg text-gray-700">
              A Christian Co-Educational institution in Akwanga offering Daycare, Nursery, Primary, and Secondary education
              with a strong moral and academic foundation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img
              src="/img/sch_img.png" // Replace with actual image path
              alt="Solid Foundation Campus"
              className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-16 px-6 md:px-20"
      >
        <h3 className="text-center text-2xl md:text-3xl font-bold text-primary mb-6">Vision</h3>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg text-justify leading-relaxed">
          The vision of Solid Foundation Academy, Akwanga is to lay a solid foundation of Christian education
          for each child to ensure a bright future.
        </p>
      </motion.section>

      {/* Core Values */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-16 px-6 md:px-20"
      >
        <h3 className="text-center text-2xl md:text-3xl font-bold text-primary mb-6">Core Values</h3>
        <p className="max-w-5xl mx-auto text-gray-700 text-lg text-justify leading-relaxed">
          Our Core Values are <strong>Godliness, Integrity, Diligence, Initiative, Respect, Equality</strong>, and <strong>Accountability</strong>.
          We aim to provide an equal opportunity for each child to grow in wisdom and excellence, achieving their maximum potential.
          This is accomplished through the recruitment and orientation of dedicated Christian teachers and support staff,
          committed to imparting sound academic knowledge, Christian morals, and social values in a conducive learning
          environment with the best modern teaching and learning materials.
        </p>
      </motion.section>
    </div>
 </GuestLayout>
  );
}
