import React, { Suspense, lazy } from "react";
import Loader from "../ui/Loader";

const Slider = lazy(() => import("./Slider"));

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen text-center overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Slider />
      </Suspense>
      <div className="
        absolute 
        bottom-0 
        left-1/2 
        transform -translate-x-1/2 
        w-full 
        max-w-[1200px] 
        flex 
        flex-col 
        lg:flex-row 
        justify-between 
        items-center 
        px-4 
        lg:px-0 
        pb-[50px] 
        lg:pb-[100px] 
        z-10 
        animate-text 
        from-white 
        via-transparent">
        <h1 className="
          text-[3rem] 
          md:text-[5rem] 
          lg:text-[10em] 
          leading-none 
          text-black-300
          relative 
          whitespace-nowrap 
          bg-[#dfdff0a3]
        ">
          Post Malone
        </h1>
        <div className="text-center lg:text-right max-w-[300px] mt-4 lg:mt-0">
          <h2 className="text-2xl md:text-3xl">Music Collection</h2>
          <p className="font-bold text-lg">Overview</p>
          <p className="text-sm md:text-base">
            Scroll down to see some info about the most brilliant albums.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
