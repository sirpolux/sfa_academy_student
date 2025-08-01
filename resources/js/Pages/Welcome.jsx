import React from 'react';
import { Head } from '@inertiajs/react';
import { FaPlay, FaMusic, FaPaintBrush, FaBus, FaUtensils, FaGlobe } from 'react-icons/fa';

import CustomMenu2 from '@/Components/CustomMenu2';

export default function Welcome() {
  return (
    <div>
      <Head title="Home" />
      <CustomMenu2/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-16 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Solid Foundation Academy
            </h2>
            <p className="text-lg mb-6">
              Wisdom & Excellence in a nurturing Christian environment. Our school in Akwanga offers Daycare, Nursery, Primary and Secondary education with state-of-the-art facilities.
            </p>
            <a
              href="#about"
              className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-6 rounded shadow transition"
            >
              Discover More
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/images/school-hero.jpg"
              alt="School Activities"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white text-center py-12 px-6">
        <blockquote className="text-xl md:text-2xl italic font-semibold text-gray-700 max-w-4xl mx-auto">
          "The key to saving a nation lies in educating its masses."
        </blockquote>
        <p className="mt-4 text-sm text-gray-500">– Author’s Name</p>
      </section>

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
            <div key={index} className="bg-white rounded-2xl shadow-md border-t-4 border-indigo-600 p-6 flex items-start space-x-4 transition hover:shadow-lg">
              <facility.icon className="text-indigo-600 text-4xl" />
              <div>
                <h4 className="text-lg font-semibold mb-1">{facility.title}</h4>
                <p className="text-sm text-gray-500">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-800 text-white py-16 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Enroll Your Child Today</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Give your child a solid start in life with our balanced curriculum, caring teachers, and vibrant school community.
        </p>
        <a
          href="/enroll"
          className="bg-yellow-400 text-indigo-900 font-bold py-3 px-6 rounded shadow hover:bg-yellow-500 transition"
        >
          Get Started
        </a>
      </section>
    </div>
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
