import React from "react";
import Image from "./Image";
const images = [
  {
    id: 1,
    src: "/photos/property1.jpg",
  },
  {
    id: 2,
    src: "/photos/property2.jpg",
  },
  {
    id: 3,
    src: "/photos/property3.jpg",
  },
];
const Gallery = () => {
  return (
    <div className="flex flex-wrap">
      {images.map((image, index) => {
        return (
          <div key={image.id} className="basis-1/4 p-2">
            <Image src={image.src} selected={index === 1} />;
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
