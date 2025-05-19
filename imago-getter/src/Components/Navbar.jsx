import React, { useState } from 'react';
import logo from '../assets/Imago-Getter-Logo.png';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full shadow-md ">
      {/* Navbar Container */}
      <div className="flex items-center justify-between h-24 px-4 sm:px-6">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Imago Getter Logo" className="h-40 sm:h-20 md:h-40 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-6 font-semibold text-[#332D56]">
          <span className="hover:text-[#71C0BB] transition">HOME</span>
          <span className="hover:text-[#71C0BB] transition">SERVICE</span>
          <span className="hover:text-[#71C0BB] transition">RESEARCH & PUBLICATION</span>
          <span className="hover:text-[#71C0BB] transition">BLOG</span>
        </div>

        {/* Search Bar and Hamburger */}
        <div className="flex items-center gap-3">
          {/* Search - visible on sm and up */}
          <div className="hidden sm:flex items-center gap-3">
            <input
              type="text"
              placeholder="SEARCH FOR ..."
              className="bg-white text-[#332D56] border border-[#4E6688] h-10 rounded-md px-3 text-sm focus:outline-none w-40 md:w-56"
            />
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#4E6688",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="h-10 px-4 bg-[#4E6688] text-white rounded shadow-md text-sm"
            >
              Submit
            </motion.button>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none text-[#332D56]">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 ">
          <div className="flex flex-col gap-4 font-semibold text-[#332D56]">
            <span className="hover:text-[#71C0BB] transition">HOME</span>
            <span className="hover:text-[#71C0BB] transition">SERVICE</span>
            <span className="hover:text-[#71C0BB] transition">RESEARCH & PUBLICATION</span>
            <span className="hover:text-[#71C0BB] transition">BLOG</span>

            {/* Mobile search */}
            <div className="flex items-center gap-3 mt-4">
              <input
                type="text"
                placeholder="SEARCH FOR ..."
                className="bg-white text-[#332D56] border border-[#4E6688] h-10 rounded-md px-3 text-sm w-full focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#4E6688" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-10 px-4 bg-[#4E6688] text-white rounded shadow-md text-sm"
              >
                Submit
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
