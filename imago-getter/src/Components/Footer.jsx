import React from 'react';
import img from '../assets/Footer/footerimg.jpg';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-[#332D56] py-16"> {/* Parent div with matching background */}
      <div className="relative max-w-6xl mx-auto bg-white p-10 rounded-[2rem] shadow-md"> {/* Footer content div with rounded corners */}
        {/* Floating Image */}
        <img
          src={img}
          alt="washurhands"
          className="absolute -top-8 -left-6 rotate-8 w-28 h-32 object-cover border-4 border-[#4E6688] rounded-md"
        />

        {/* Row Layout for input and button */}
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 ml-0 sm:ml-28 -mt-3">
          <input
            type="text"
            placeholder="Leave a message here..."
            className="border border-[#4E6688] px-4 py-2 rounded-md w-full sm:w-96"
          />
          <button className="relative bg-[#4E6688] text-white px-5 py-2 text-lg hover:bg-[#71C0BB] mt-4 sm:mt-0">
            {/* Border div slightly shifted left and top */}
            <div className="absolute -top-1 -left-2 h-10 w-21 border-2 border-[#71C0BB]" />
            Send
          </button>
        </div>

        {/* Horizontal Line moved higher */}
        <hr className="border-t-2 border-black mt-4 w-full" />

        <div className="flex flex-col sm:flex-row items-start justify-between mt-4 gap-8 sm:gap-12">
          {/* First Column: Products */}
          <div className="text-[#4E6688] flex flex-col gap-2 font-semibold">
            <h2 className="text-[#332D56] font-bold mt-3 mb-2 text-xl border-b-1 border-[#332D56]">OUR PRODUCTS</h2>
            <span className="hover:text-[#71C0BB] transition">Hand Disinfectant</span>
            <span className="hover:text-[#71C0BB] transition">Surface Disinfectant</span>
            <span className="hover:text-[#71C0BB] transition">Instrument Maintenance</span>
            <span className="hover:text-[#71C0BB] transition">Fogging Disinfectant</span>
            <span className="hover:text-[#71C0BB] transition">Sporicidal Disinfectant</span>
          </div>

          {/* Second Column: Links */}
          <div className="text-[#4E6688] flex flex-col gap-2 font-semibold">
            <h2 className="text-[#332D56] font-bold mt-3 mb-2 text-xl border-b-1 border-[#332D56]">Links</h2>
            <h2 className="hover:text-[#71C0BB] transition">Home Page</h2>
            <h2 className="hover:text-[#71C0BB] transition">Contact Us</h2>
            <h2 className="hover:text-[#71C0BB] transition">Our Clientele</h2>
            <h2 className="hover:text-[#71C0BB] transition">Site map</h2>
            <h2 className="hover:text-[#71C0BB] transition">Careers</h2>
          </div>

          {/* Third Column: Location */}
          <div>
            <h2 className="text-[#332D56] font-bold mt-3 mb-2 text-xl border-b-1 border-[#332D56]">Location</h2>
            <span className="text-[#4E6688] font-semibold hover:text-[#71C0BB] transition">
              Office: 302, Goldcrest <br /> Business Park, LBS Marg, <br /> Ghatkopar (W), Mumbai 400086
              <br />Warehouse: Unit 105, E6, <br /> Bhumi World, Pimplas, <br /> Thane (W) 421302 <br />
              Mobile: +91-81081 99112 <br />: +91-9867277169
            </span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 items-center justify-center mt-4">
          <FaYoutube size={30} className="text-[#332D56] hover:text-[#71C0BB] transition duration-300" />
          <FaFacebook size={30} className="text-[#332D56] hover:text-[#71C0BB] transition duration-300" />
          <FaInstagram size={30} className="text-[#332D56] hover:text-[#71C0BB] transition duration-300" />
          <FaTwitter size={30} className="text-[#332D56] hover:text-[#71C0BB] transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
