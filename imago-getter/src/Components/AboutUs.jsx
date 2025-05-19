import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/AboutUs/chemical.webp';
import img2 from '../assets/AboutUs/chemical2.webp';
import img3 from '../assets/AboutUs/germ.jpeg';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const AboutUs = () => {
  return (
    <div className="w-full py-10 px-4 sm:px-6 md:px-10 bg-green-100">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-5">

        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#332D56]"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            About
          </motion.h2>

          <div className="flex flex-wrap gap-2">
            {['Imago', '&', 'Getter'].map((word, i) => (
              <motion.p
                key={i}
                className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 ${i === 0
                  ? 'text-[#332D56]'
                  : i === 1
                  ? 'text-[#4E6688]'
                  : 'text-[#71C0BB]'}`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i + 1}
              >
                {word}
              </motion.p>
            ))}
          </div>

          <motion.p
            className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={4}
          >
            IMAGO & GETTER deals in hygiene & disinfectant range of products for Pharma Manufacturing, Healthcare,
            Animal Husbandry & Cold Storage Industry. IMAGO & GETTER is the only company where you get all the globally
            available disinfectant chemistries under one roof. Every product offered by us undergoes stringent quality
            checks to provide world class quality products for our customers. Every Product batch is microbiologically
            tested for consistency in results.
          </motion.p>

          <motion.div
            className="flex justify-center"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={img1} alt="Imago Logo" className="mt-4 mx-auto w-[250px] sm:w-[300px] md:w-[350px]" />
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <motion.div
            className="flex justify-center"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={img2} alt="Disinfectant" className="mb-4 mx-auto w-[200px] sm:w-[220px] md:w-[250px]" />
          </motion.div>

          <motion.p
            className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={6}
          >
            Our commercial team & supply chain partners help us to connect every corner of the country. Our endeavor is
            to provide effective, safe & economically viable disinfectant for our customers. All the Disinfectants are
            tested according to European Nation Standards (EN- Standards) under clean and dirty conditions to ensure
            the best product for your needs.
          </motion.p>

          <motion.div
            className="flex justify-center"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={img3} alt="Microbial testing" className="mb-4 mx-auto w-[220px] sm:w-[240px] md:w-[260px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
