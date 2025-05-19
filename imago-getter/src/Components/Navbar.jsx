import React from 'react';
import logo from '../assets/Imago-Getter-Logo.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full h-20 px-6 mt-6 flex items-center bg-white shadow-md relative">

      {/* Logo on the left */}
      <div className="pl-4">
        <img src={logo} alt="Imago Getter Logo" className="h-40 w-auto" />
      </div>

      {/* Navigation Links - Centered absolutely */}
      <div className="absolute left-1/2 transform -translate-x-[59%] flex gap-6 font-semibold text-[#332D56]">
        <span className="hover:text-green-400 transition">HOME</span>
        <span className="hover:text-green-400 transition">SERVICE</span>
        <span className="hover:text-green-400 transition">RESEARCH & PUBLICATION</span>
        <span className="hover:text-green-400 transition">BLOG</span>
      </div>


      {/* Search bar on the right */}
      <div className="ml-auto flex items-center gap-3 pr-4">
        <input
          type="text"
          placeholder="SEARCH FOR ..."
          className="bg-gray-100 h-10 rounded-md px-3 text-sm focus:outline-none"
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
