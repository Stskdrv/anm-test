import React, { useEffect, useRef } from "react";
import useAlbums, { Album } from "../../hooks/useAlbums";
import { AlbumCard } from "./AlbumCard";
import CardTilt from "./CardTilt";

const Albums: React.FC = () => {
  const { data, isLoading } = useAlbums();
  const albumRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    albumRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [data?.albums]);

  if (isLoading) return null;

  return (
    <section className="pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg">
            Short intro in Post Malone's oeuvre.
          </p>
          <p className="max-w-4xl font-circular-web text-lg opacity-50">
            Post Malone, born Austin Richard Post, blends genres like hip hop, pop, and rock. Born in Syracuse, New York, and raised in Grapevine, Texas.
            He first adopted the Post Malone stage name at the mere age of fifteen. Post began with his debut single, “White Iverson”, which was released on Soundcloud in 2015.
            A viral success, it set off a domino effect and shot him to international fame. He is a skilled multi-instrumentalist, playing the guitar from 9 years old.
            And his discography is a tribute to the genres that have influenced his style.
          </p>
        </div>

        {data?.albums?.map((album: Album, index: number) => (
          <div
            key={album.id}
            ref={(el) => (albumRefs.current[index] = el)}
            className="opacity-0 translate-y-10 transition-transform duration-1000 ease-out mb-10"
            role="listitem"
            aria-labelledby={`album-title-${album.id}`}
            aria-describedby={`album-desc-${album.id}`}
          >
            <CardTilt className="relative h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
              <AlbumCard
                src={album.img}
                title={album.title}
                description={album.description}
                link={album.link}
              />
            </CardTilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Albums;
