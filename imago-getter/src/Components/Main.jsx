import React, { useState, useEffect, useRef } from "react";
import vid1 from "../assets/hand-disinfectant.mp4";
import vid2 from "../assets/fogging-disinfectant.mp4";
import vid5 from "../assets/germs-free.mp4";
import vid6 from "../assets/instrumental-disinfectant.mp4";

const Main = () => {
  const videoLinks = [vid1, vid2, vid5, vid6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);

  const nextVideo = () => {
    setFade(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === videoLinks.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 400);
  };

  const prevVideo = () => {
    setFade(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? videoLinks.length - 1 : prev - 1));
      setFade(true);
    }, 400);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-8 bg-blue-300">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-xl shadow-lg border border-[#71C0BB]">
        
        {/* Prev button */}
        <button
          onClick={prevVideo}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-4 text-white text-3xl sm:text-5xl bg-[#4E6688] bg-opacity-60 hover:bg-opacity-90 rounded-full transition"
          aria-label="Previous Video"
        >
          &lt;
        </button>

        {/* Video */}
        <video
          key={currentIndex}
          src={videoLinks[currentIndex]}
          muted
          autoPlay
          loop={false}
          controls={false}
          playsInline
          className={`w-full h-[600px] sm:h-[800px] md:h-[1200px] object-cover transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Next button */}
        <button
          onClick={nextVideo}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-4 text-white text-3xl sm:text-5xl bg-[#4E6688] bg-opacity-60 hover:bg-opacity-90 rounded-full transition"
          aria-label="Next Video"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Main;
