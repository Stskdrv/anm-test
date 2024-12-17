import React from "react";
import useAlbums, { Album } from "../../hooks/useAlbums";

const Slider: React.FC = () => {
    const { data, isLoading } = useAlbums(); 

    if (isLoading) {
        return null;
    }

    return (
        <div className="slider-container">
            {data?.albums.map((album: Album, i: number, arr: Album[]) => (
                <div
                    key={album.id}
                    className="slider-item"
                    style={
                        {
                            "--position": i + 1,
                            "--quantity": arr.length,
                        } as React.CSSProperties
                    }
                >
                    <img
                        src={album.img}
                        alt={album.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default Slider;