import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div>
      <Head title="Contact Us" />

      {/* Header */}
      <section className="bg-blue-50 py-16 px-6 md:px-20 text-center">
        <motion.h2
          className="text-4xl font-bold text-indigo-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We'd love to hear from you. Reach out with any questions or feedback.
        </motion.p>
      </section>

      {/* Main Contact Section */}
      <section className="bg-white py-16 px-6 md:px-20 grid lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-indigo-700">Solid Foundation Academy</h3>
          <p className="text-gray-700">
            Address: Behind L.G.E.A Primary School, Angwan Attah, Akwanga, Nasarawa State, Nigeria.
          </p>
          <p className="text-gray-700">Phone: <a href="tel:+2347037719086" className="text-indigo-600 hover:underline">+234 703 771 9086</a></p>
          <p className="text-gray-700">Email: <a href="mailto:solidfoundationacademyakwaga@gmail.com" className="text-indigo-600 hover:underline">solidfoundationacademyakwaga@gmail.com</a></p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-md"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="5" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
  );
}
