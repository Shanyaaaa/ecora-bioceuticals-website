import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ecoraVideoFile from '../assets/Ecora_mp4.mp4';

const Ecora = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoToggle = () => {
    if (!videoRef.current) return;

    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full px-4 sm:px-5">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video sm:aspect-[16/7] ">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-2xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={ecoraVideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button */}
        <button
          onClick={handleVideoToggle}
          className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm hover:bg-black/70 transition duration-300"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate('/about')}
          className="bg-[#321a6d] text-white px-6 py-2 rounded-full shadow-md transform hover:scale-105 hover:shadow-lg hover:bg-[#271257] transition duration-300 ease-in-out"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Ecora;
