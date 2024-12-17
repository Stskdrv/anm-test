import { MouseEventHandler, ReactNode, useRef, useState } from "react";

interface CardTiltProps {
  children: ReactNode;
  className?: string;
}

const CardTilt: React.FC<CardTiltProps> = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default CardTilt;