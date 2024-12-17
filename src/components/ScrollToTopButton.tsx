import React, { useState, useEffect, ReactNode } from "react";
import { ScrollContext } from "../context/ScrollContext";

interface ScrollToTopProviderProps {
  children: ReactNode;
}

const ScrollToTopButton: React.FC<ScrollToTopProviderProps> = ({
  children,
}) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ scrollToTop }}>
      {children}
      {showScrollButton && (
        <button
          title="Scroll to top"
          aria-label="Scroll to top"
          className="
            fixed 
            bottom-6 
            right-6 
            z-50 
            p-4 
            bg-black-300
          text-white 
            rounded-full 
            shadow-md
            transition-transform 
            transform 
            hover:scale-110"
          onClick={scrollToTop}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToTop();
            }
          }}
          tabIndex={0}
        >
          ↑
        </button>
      )}
    </ScrollContext.Provider>
  );
};

export default ScrollToTopButton;
