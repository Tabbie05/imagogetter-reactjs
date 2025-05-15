import React, { useState } from 'react';

const Main = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Correcting initial state to 0
    const videoLinks = [
        "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example Video 1
        "https://www.youtube.com/embed/tgbNymZ7vqY", // Example Video 2
        "https://www.youtube.com/embed/sb9fgsyQ4qg", // Example Video 3
        "https://www.youtube.com/embed/1rOaqshBd6A", // Example Video 4
        "https://www.youtube.com/embed/ysn1lLOliGo", // Example Video 5
        "https://www.youtube.com/embed/jhtzJ2vJ7_I"  // Example Video 6
    ];


    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videoLinks.length);
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videoLinks.length) % videoLinks.length);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center relative">
            <div className="carousel relative w-[1500px] h-screen mt-10 h-80">

                <button
                    onClick={prevVideo}
                    className="absolute ml-4 left-0 top-1/2 transform -translate-y-1/2 text-4xl p-4 text-white rounded-full hover:bg-gray-700 transition-all"
                >
                    &lt;
                </button>

                <iframe
                    width="100%"
                    height="100%"
                    src={videoLinks[currentIndex]}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <button
                    onClick={nextVideo}
                    className="absolute mr-4 right-0 top-1/2 transform -translate-y-1/2 text-4xl p-4  text-white rounded-full hover:bg-gray-700 transition-all"
                >
                    &gt;
                </button>
            </div>

            

        </div>
    );
};

export default Main;
