import React from 'react';
import logo from '../assets/Imago-Getter-Logo.png';

const Navbar = () => {
    return (
        <div className=" border w-full h-16 px-6 mt-6 flex justify-between items-center bg-white shadow-md">
            <div className='px-6'>
                <img src={logo} alt="Imago Getter Logo" className="h-50 w-auto ml-7" />
            </div>
            <div className='text-blue-500 flex gap-6 font-semibold'>
                <i>HOME </i>
                <i>SERVICE </i>
                <i>RESEARCH & PUBLICATION </i>
                <i>BLOG </i>
            </div>
            <div className="flex">
                <input
                    type="text"
                    placeholder="SEARCH FOR ...."
                    className="bg-gray-100 h-10 rounded-md px-4 py-2 w-full"
                />
                <button className="bg-blue-500 px-6 text-white h-10 w-30 rounded mr-6">
                    Submit
                </button>
            </div>

        </div>
    );
};

export default Navbar;
