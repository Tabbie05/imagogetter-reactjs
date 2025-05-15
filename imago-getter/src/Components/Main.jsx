import React, { useState, useRef } from 'react';
import vid1 from '../assets/hand-disinfectant.mp4';
import vid2 from '../assets/fogging-disinfectant.mp4';
// import vid3 from '../assets/handwash.mp4';
// import vid4 from '../assets/handgermfree.mp4';
import vid5 from '../assets/germs-free.mp4';
import vid6 from '../assets/instrumental-disinfectant.mp4';

const Main = () => {
    const videoLinks = [vid1, vid2, vid5, vid6];
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);

    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videoLinks.length);
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videoLinks.length) % videoLinks.length);
    };

    const handleEnded = () => {
        nextVideo();
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center relative">
            <div className="carousel relative w-[1200px] h-screen mt-10 ">
                {/* Previous button */}
                <button
                    onClick={prevVideo}
                    className="absolute ml-4 left-0 top-1/2 transform -translate-y-1/2 text-4xl p-4 text-white rounded-full hover:bg-gray-700 transition-all z-10"
                >
                    &lt;
                </button>

                {/* Video tag instead of iframe */}
                <video
                    ref={videoRef}
                    src={videoLinks[currentIndex]}
                    onEnded={handleEnded}
                    autoPlay
                    muted
                    loop={false}
                    controls={false}
                    className="w-full h-full object-cover"
                />

                {/* Next button */}
                <button
                    onClick={nextVideo}
                    className="absolute mr-4 right-0 top-1/2 transform -translate-y-1/2 text-4xl p-4 text-white rounded-full hover:bg-gray-700 transition-all z-10"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Main;
