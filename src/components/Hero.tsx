import React from 'react'; // Import the additional custom CSS if needed for animations

const Hero = () => {
  return (
    <div className="relative w-full h-screen text-center overflow-hidden">
      <div
        className="slider-container"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="slider-item"
            style={{
              '--position': i + 1,
              '--quantity': 6,
            }}
          >
            <img
              src={`img/sl${i + 1}.jpg`}
              alt={`Album ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] flex flex-wrap justify-between items-center pb-[100px] z-1 animate-text">
        <h1
          className="text-[10em] leading-none text-[#25283B] relative"
        >
          POST MALONE
        </h1>
        <div className="font-poppins text-right max-w-[200px]">
          <h2 className="text-3xl">Music collection</h2>
          <p className="font-bold">Overview</p>
          <p>Scroll down to see some info about the most brilliant albums</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
