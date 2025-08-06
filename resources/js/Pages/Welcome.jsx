import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { FaPlay, FaMusic, FaPaintBrush, FaBus, FaUtensils, FaGlobe } from 'react-icons/fa';
import Footer from './Footer';
import Navbar from './Navbar';
import GuestLayout from '@/Layouts/GuestLayout';


export default function Welcome() {
  return (
    <GuestLayout>
          <div>
       
       <Head title="Home" />
       {/* Hero Section */}
       <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-6 md:px-20">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="lg:w-1/2"
           >
             <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
               Solid Foundation Academy
             </h2>
             <p className="text-lg mb-6">
               Wisdom & Excellence in a nurturing Christian environment. Our school in Akwanga offers Daycare, Nursery, Primary and Secondary education with state-of-the-art facilities.
             </p>
             <a
               href="#about"
               className="bg-tertiary hover:bg-white hover:text-gray-700 text-indigo-900 font-bold py-3 px-6 rounded shadow transition-all duration-300"
             >
               Discover More
             </a>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="lg:w-1/2"
           >
             <img
               src="/img/sch_img.png"
               alt="School Activities"
               className="rounded-xl shadow-lg w-full shadow-gray-600 transition-transform duration-500 hover:scale-105"
             />
           </motion.div>
         </div>
       </section>
 
       {/* Quote Section */}
       <motion.section
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="bg-white text-center py-12 px-6"
       >
         <blockquote className="text-xl md:text-2xl italic font-semibold text-gray-700 max-w-4xl mx-auto">
           Cultivation of mind should be the ultimate aim of human existence.
         </blockquote>
         <p className="mt-4 text-sm text-gray-500">Dr. B.R. Ambedkar</p>
       </motion.section>
 
       {/* Why Choose Us Section */}
       <section className="bg-gray-50 py-16 px-6 md:px-20" id="about">
         <div className="max-w-6xl mx-auto text-center mb-12">
           <h3 className="text-2xl md:text-3xl font-bold text-indigo-800">Why Choose Solid Foundation Academy?</h3>
           <p className="mt-2 text-gray-600">
             Our programs are tailored to inspire academic excellence and moral uprightness from a young age.
           </p>
         </div>
 
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {facilities.map((facility, index) => (
             <motion.div
               key={index}
               whileHover={{ scale: 1.05 }}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="bg-white rounded-2xl shadow-md border-t-4 border-indigo-600 p-6 flex items-start space-x-4 transition hover:shadow-lg"
             >
               <facility.icon className="text-indigo-600 text-4xl" />
               <div>
                 <h4 className="text-lg font-semibold mb-1">{facility.title}</h4>
                 <p className="text-sm text-gray-500">{facility.desc}</p>
               </div>
             </motion.div>
           ))}
         </div>
       </section>
 
       {/* Call to Action Section */}
       <motion.section
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: true }}
         className="bg-primary text-white py-16 px-6 text-center"
       >
         <h3 className="text-2xl md:text-3xl font-bold mb-4">Enroll Your Child Today</h3>
         <p className="mb-6 max-w-2xl mx-auto">
           Give your child a solid start in life with our balanced curriculum, caring teachers, and vibrant school community.
         </p>
         <a
           href="/enroll"
           className="bg-gray-300 text-indigo-900 font-bold py-3 px-6 rounded shadow hover:bg-gray-100 transition-all duration-300"
         >
           Get Started
         </a>
       </motion.section>
   
     </div>
    </GuestLayout>
  );
}

const facilities = [
  { title: 'Play Ground', icon: FaPlay, desc: 'Fun and safe outdoor play areas for recreation.' },
  { title: 'Music and Dance', icon: FaMusic, desc: 'Creative expression through rhythm and movement.' },
  { title: 'Arts and Crafts', icon: FaPaintBrush, desc: 'Inspiring creativity through hands-on learning.' },
  { title: 'Safe Transportation', icon: FaBus, desc: 'Reliable school buses with trained drivers.' },
  { title: 'Healthy Food', icon: FaUtensils, desc: 'Nutritious meals for a growing mind and body.' },
  { title: 'Educational Tour', icon: FaGlobe, desc: 'Exciting field trips to broaden learning.' },
];
