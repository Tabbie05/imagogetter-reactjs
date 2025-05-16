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
    setFade(false); // start fade out
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === videoLinks.length - 1 ? 0 : prev + 1));
      setFade(true); // fade in after index changes
    }, 400); // fade out duration
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
    <div className="w-full h-screen flex items-center justify-center mt-16">
      <div className="relative w-[1300px] overflow-hidden rounded-lg flex items-center justify-center">
        {/* Prev button */}
        <button
          onClick={prevVideo}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-4 text-white text-5xl  bg-opacity-40 hover:bg-opacity-70 transition select-none"
          aria-label="Previous Video"
        >
          &lt;
        </button>

        {/* Single video with fade */}
        <video
          key={currentIndex} // key triggers re-render on index change
          src={videoLinks[currentIndex]}
          muted
          autoPlay
          loop={false}
          controls={false}
          playsInline
          className={`w-full h-full object-contain transition-opacity duration-400 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Next button */}
        <button
          onClick={nextVideo}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-4 text-white text-5xl  bg-opacity-40 hover:bg-opacity-70 transition select-none"
          aria-label="Next Video"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Main;
