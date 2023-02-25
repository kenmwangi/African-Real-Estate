import React from "react";
import { BsCardImage } from "react-icons/bs";
import Image from "./Image";

interface Props {
  images: { src: string }[];
  onSelect(src: string): void;
  uploading?: boolean;
  selectedImage?: string;
}

const Gallery: React.FC<Props> = ({
  images,
  uploading = false,
  onSelect,
  selectedImage = "",
}): JSX.Element => {
  return (
    <div className="flex flex-wrap">
      {uploading && (
        <div className="aspect-square flex basis-1/4 animate-pulse flex-col items-center justify-center rounded bg-white p-2 text-slate-700">
          <BsCardImage size={60} />
          <p>Uploading</p>
        </div>
      )}
      {images.map(({ src }, index) => {
        return (
          <div key={index} className="basis-1/4 p-2">
            <Image
              src={src}
              selected={selectedImage === src}
              onClick={() => onSelect(src)}
            />
            ;
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
