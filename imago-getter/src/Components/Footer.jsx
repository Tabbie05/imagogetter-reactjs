import React from 'react';
import img from '../assets/Footer/footerimg.jpg';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full h-screen mt-15 flex items-center justify-center px-10 bg-[#332D56] rounded-4xl">
      <div className="relative h-[420px] w-[700px] bg-white py-10 px-10 rounded-lg shadow-md">
        {/* Floating Image */}
        <img
          src={img}
          alt="washurhands"
          className="absolute -top-8 -left-6 rotate-8 w-28 h-32 object-cover border-4 border-[#4E6688] rounded-md"
        />

        {/* Row Layout for input and button */}
        <div className="flex items-center justify-start gap-4 ml-28 -mt-3">
          <input
            type="text"
            placeholder="Leave a message here..."
            className="border border-[#4E6688] px-4 py-2 rounded-md w-96"
          />
          <button className="relative bg-[#4E6688] text-white px-5 py-2 text-lg hover:bg-[#71C0BB]">
            {/* Border div slightly shifted left and top */}
            <div className="absolute -top-1 -left-2 h-10 w-21 border-2 border-[#71C0BB]" />
            Send
          </button>
        </div>

        {/* Horizontal Line moved higher */}
        <hr className="border-t-2 border-black mt-4 w-full" />
        <div className="flex items-center justify-between mt-4">
          <div className="text-[#4E6688] flex flex-col gap-2 font-semibold">
            <h2 className="text-[#332D56] font-bold mt-3 mb-2 text-xl border-b-1 border-[#332D56]">OUR PRODUCTS</h2>
            <span className="hover:text-[#71C0BB] transition">Hand Disinfectant</span>
            <span className="hover:text-[#71C0BB] transition">Surface Disinfectant</span>
            <span className="hover:text-[#71C0BB] transition">Instrument maintenance</span>
            <span className="hover:text-[#71C0BB] transition">Fogging Disinfectant</span>
            <span className="hover:text-[#71C0BB] transition">Sporicidal Disinfectant</span>
          </div>
          <div className="text-[#4E6688] flex flex-col gap-2 font-semibold">
            <h2 className="text-[#332D56] font-bold mt-3 mb-2 text-xl border-b-1 border-[#332D56]">Links</h2>
            <h2 className="hover:text-[#71C0BB] transition">Home Page</h2>
            <h2 className="hover:text-[#71C0BB] transition">Contact Us</h2>
            <h2 className="hover:text-[#71C0BB] transition">Our Clientele</h2>
            <h2 className="hover:text-[#71C0BB] transition">Site map</h2>
            <h2 className="hover:text-[#71C0BB] transition">Careers</h2>
          </div>
          <div>
            <h2 className="text-[#332D56] font-bold mt-3 mb-2 text-xl border-b-1 border-[#332D56]">Location</h2>
            <span className="text-[#4E6688] font-semibold hover:text-[#71C0BB] transition">
              Office: 302, Goldcrest <br /> Business Park, LBS Marg, <br />Ghatkopar (W), Mumbai 400086
              <br />Warehouse: Unit 105, E6, <br /> Bhumi World, Pimplas, <br />Thane (W) 421302 <br />
              Mobile: +91-81081 99112 <br />: +91-9867277169
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center mt-2">
          <FaYoutube size={25} className="text-[#332D56]" />
          <FaFacebook size={25} className="text-[#332D56]" />
          <FaInstagram size={25} className="text-[#332D56]" />
          <FaTwitter size={25} className="text-[#332D56]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
