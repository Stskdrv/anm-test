import { ReactNode, useEffect, useRef } from "react";

interface VideoPreviewProps {
  children: ReactNode;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ children }) => {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = previewRef.current;

    if (!element) return;

    const handleAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-visible");
        } else {
          element.classList.remove("animate-visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleAnimation, {
      threshold: 0.5,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={previewRef}
      className="video-preview transition-all duration-1000 ease-in-out opacity-0"
    >
      {children}
    </div>
  );
};

export default VideoPreview;
