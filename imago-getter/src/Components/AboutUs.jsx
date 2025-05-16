import React from 'react';
import img1 from '../assets/AboutUs/chemical.webp';
import img2 from '../assets/AboutUs/chemical2.webp';
import img3 from '../assets/AboutUs/germ.jpeg';

const AboutUs = () => {
  return (
    <div className="w-full mt-15 flex items-center justify-center px-10">
      <div className="flex w-full max-w-6xl flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 pr-8">
          <h2 className="text-5xl font-bold mb-2">About</h2>
          <div className="flex gap-2">
            <p className="text-3xl font-semibold mb-4 text-blue-600">Imago</p>
            <p className="text-3xl font-semibold mb-4 text-gray-600">&</p>
            <p className="text-3xl font-semibold mb-4 text-green-600">Getter</p>
          </div>
          <p className="text-gray-700 mb-4">
            IMAGO & GETTER deals in hygiene & disinfectant range of products for Pharma Manufacturing, Healthcare, Animal Husbandry & Cold Storage Industry.
            IMAGO & GETTER is the only company where you get all the globally available disinfectant chemistries under one roof.
            Every product offered by us undergoes stringent quality checks to provide world class quality products for our customers.
            Every Product batch is microbiologically tested for consistency in results.
          </p>
          <div className="flex justify-center">
            <img src={img1} alt="Imago Logo" className="mt-4 mx-auto w-[350px]" />
          </div>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block border-l-2 border-gray-400 mx-6"></div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 pl-8">
          <div className="flex justify-center">
            <img src={img2} alt="Disinfectant" className="mb-4 mx-auto w-[250px]" />
          </div>
          <p className="text-gray-700 mb-4">
            Our commercial team & supply chain partners help us to connect every corner of the country.
            Our endeavor is to provide effective, safe & economically viable disinfectant for our customers.
            All the Disinfectant are tested according to European Nation Standards (EN- Standards) under clean and dirty conditions to ensure best product for your needs.
          </p>
          <div className="flex justify-center">
            <img src={img3} alt="Microbial testing" className="mb-4 mx-auto w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
