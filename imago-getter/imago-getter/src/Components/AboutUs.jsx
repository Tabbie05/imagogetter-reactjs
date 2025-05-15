import React from 'react';
import logo from '../assets/Imago-Getter-Logo.png';

const AboutUs = () => {
  return (
    <div className=" w-full mt-15 flex items-center justify-center px-10">
      <div className="flex w-full max-w-6xl">
        {/* Left Section */}
        <div className="w-1/2 pr-8">
          <h2 className="text-5xl font-bold mb-2">About</h2>
          <p className="text-3xl font-semibold mb-4">Imago Getter</p>
          <p className="text-gray-700 mb-4">
            IMAGO & GETTER deals in hygiene & disinfectant range of products for Pharma Manufacturing, Healthcare, Animal Husbandry & Cold Storage Industry.
            IMAGO & GETTER is the only company where you get all the globally available disinfectant chemistries under one roof.
            Every product offered by us undergoes stringent quality checks to provide world class quality products for our customers.
            Every Product batch is microbiologically tested for consistency in results.
            We share individual batch wise analysis report on-request of our customers.
            We have a dedicated technical team which provides suggestions and help in choosing the right disinfectant chemistry according to regulatory, economic or any other specific requirement.
            We help our customers in designing the disinfectant policy for their plants.
          </p>
          <img src={logo} alt="Imago Logo" className="w-32 mt-4" />
        </div>

        {/* Vertical Line */}
        <div className="border-l-2 border-gray-400 mx-6"></div>

        {/* Right Section */}
        <div className="w-1/2 pl-8">
          <img src={logo} alt="" className="w-32 mb-4" />
          <p className="text-gray-700">
            Our commercial team & supply chain partners help us to connect every corner of the country.
            Our endeavor is to provide effective, safe & economically viable disinfectant for our customers.
            All the Disinfectant are tested according to European Nation Standards (EN- Standards) under clean and dirty conditions to ensure best product for your needs.
            IMAGO & GETTER also has non-hazardous, non-residue forming disinfectant especially for parental plant, regulated cold storage units.
            IMAGO & GETTER provides economically viable and EPA approved disinfectant chemistry for Solid/ Liquid Oral dosage plants & API units.
          </p>
          <img src={logo} alt="" className="w-32 mb-4" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
