import React, { useState, useRef, MouseEventHandler } from "react";
import { LiaLinkSolid } from "react-icons/lia";

interface AlbumCardProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({
  src,
  title,
  description,
  link,
}) => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [hoverOpacity, setHoverOpacity] = useState<number>(0);
  const hoverButtonRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => setHoverOpacity(1);
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => setHoverOpacity(0);  

  return (
    <div className="
      group 
      relative 
      flex 
      flex-col 
      md:flex-row 
      items-center 
      justify-center 
      w-full max-w-[1200px] 
      rounded-lg 
      bg-gradient-to-br from-[#1e213f] to-[#2e3158] 
      overflow-hidden 
      shadow-lg 
      hover:shadow-2xl 
      transition-all 
      duration-500">
      <div className="relative w-full md:w-1/2 aspect-square">
        <img
          src={src}
          alt={title}
          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative flex flex-col justify-between p-5 md:p-8 text-white md:w-1/2 h-full">
        <div>
          <h1 className="
            font-bold 
            text-3xl 
            md:text-4xl 
            special-font 
            leading-tight 
            group-hover:text-[#e1e4f5] 
            transition-colors 
            duration-300
          ">
            {title}
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              relative 
              mt-5 
              w-fit 
              cursor-pointer 
              rounded-full 
              border-2 
              border-white/20 
              bg-black/50 
              px-5 
              py-2 
              text-sm 
              uppercase 
              text-white/50 
              transition-all duration-300 
              hover:text-white"
          >
            <div
              className="
                rounded-full 
                pointer-events-none 
                absolute -inset-px 
                opacity-0 
                transition-opacity 
                duration-300
              "
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(150px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(101, 111, 226, 0.5), transparent)`,
              }}
            />
            <a href={link} target="_blank" className="relative flex items-center gap-2 z-10">
              <LiaLinkSolid className="text-lg" />
              Link to genius
            </a>
          </div>
      </div>
    </div>
  );
};
