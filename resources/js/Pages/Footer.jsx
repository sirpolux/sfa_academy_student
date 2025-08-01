import React from 'react';
import {
  FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaAngleRight
} from 'react-icons/fa';
import { Link } from '@inertiajs/react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            <i className="fas fa-school"></i><br />
            <span className="text-lg block">Solid Foundation Academy</span>
          </h2>
          <p>
            A Christian Co-Educational institution in Akwanga offering Daycare, Nursery, Primary, and Secondary education.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-dark text-xl font-semibold mb-4">Get In Touch</h3>
          <div className="flex items-start mb-3">
            <FaMapMarkerAlt className="text-dark mt-1" />
            <div className="ml-3">
              <h5 className="text-white font-bold">Address</h5>
              <p>Jos Road, Opp. College of Education Akwanga, Behind Rishamah College, Nasarawa State.</p>
            </div>
          </div>
          <div className="flex items-start mb-3">
            <FaEnvelope className="text-dark mt-1" />
            <div className="ml-3">
              <h5 className="text-dark font-bold">Email</h5>
              <p>solidfoundationakw@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start mb-3">
            <FaPhoneAlt className="text-dark mt-1" />
            <div className="ml-3">
              <h5 className="text-dark font-bold">Phone</h5>
              <p>08033895370</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaClock className="text-dark mt-1" />
            <div className="ml-3">
              <h5 className="text-dark font-bold">Opening Hours</h5>
              <p>7:20 AM – 2:30 PM</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-dark text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link href="/" className="text-white hover:text-primary transition">
              <FaAngleRight className="inline mr-2" />Home
            </Link>
            <Link href="/about" className="text-white hover:text-primary transition">
              <FaAngleRight className="inline mr-2" />About Us
            </Link>
            <Link href="/admission/form" className="text-white hover:text-primary transition">
              <FaAngleRight className="inline mr-2" />Apply Now
            </Link>
            <Link href="/guest/admission/status" className="text-white hover:text-primary transition">
              <FaAngleRight className="inline mr-2" />Check Admission Status
            </Link>
            <Link href="/student/result" className="text-white hover:text-primary transition">
              <FaAngleRight className="inline mr-2" />Check Result
            </Link>
            <a href="#" className="text-white hover:text-primary transition">
              <FaAngleRight className="inline mr-2" />Upcoming Events
            </a>
            <a href="#" className="text-white hover:text-primary transition">
              <FaAngleRight className="inline mr-2" />Our Blog
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-primary text-xl font-semibold mb-4">Request Newsletter</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-3 p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-3 p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
              required
            />
            <button type="submit" className="bg-primary w-full py-3 rounded text-white font-bold hover:bg-white hover:text-primary transition">
              Submit Now
            </button>
          </form>
        </div>
      </div>

      <div className="pt-10 mt-10 border-t border-indigo-300 text-center text-sm">
        <p>
          &copy; <span className="text-primary font-bold">tsfaacademy.com</span>. All Rights Reserved. Designed by
          <span className="text-primary font-bold"> Mac. Paul </span>
        </p>
      </div>
    </footer>
  );
}
