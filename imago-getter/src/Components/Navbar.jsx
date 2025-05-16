import React from 'react';
import logo from '../assets/Imago-Getter-Logo.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full h-16 px-6 mt-6 flex justify-between items-center bg-white shadow-md">
      {/* Logo */}
      <div className="px-6">
        <img src={logo} alt="Imago Getter Logo" className="h-40 w-auto ml-7" />
      </div>

      {/* Navigation Links */}
      <div className="text-blue-500 flex gap-6 font-semibold">
        <span className="hover:text-green-400 transition">HOME</span>
        <span className="hover:text-green-400 transition">SERVICE</span>
        <span className="hover:text-green-400 transition">RESEARCH & PUBLICATION</span>
        <span className="hover:text-green-400 transition">BLOG</span>
      </div>

      {/* Search bar with animated button */}
      <div className="flex items-center gap-3 max-w-md w-full ml-6">
        <input
          type="text"
          placeholder="SEARCH FOR ..."
          className="bg-gray-100 h-10 rounded-md px-2 text-sm focus:outline-none"
        />
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#60a5fa", 
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="h-10 px-5 bg-blue-500 text-white rounded shadow-md"
        >
          Submit
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
