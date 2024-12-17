import { createContext } from "react";

interface ScrollContextType {
  scrollToTop: () => void;
}

export const ScrollContext = createContext<ScrollContextType>({
  scrollToTop: () => {},
});