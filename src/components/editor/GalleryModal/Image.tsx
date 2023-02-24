import React from "react";
import NextImage from "next/image";

import CheckMark from "../../common/CheckMark";
interface Props {
  src: string;
  selected?: boolean;
  onClick?(): void;
}
const Image: React.FC<Props> = ({ src, selected, onClick }): JSX.Element => {
  return (
    <div className="relative cursor-pointer overflow-hidden rounded">
      <NextImage
        src={src}
        width={200}
        height={200}
        alt="gallery"
        objectFit="cover"
        className="bg-slate-100 transition hover:scale-110"
      />

      <div className="absolute top-2 left-2">
        <CheckMark visible={selected || false} />
      </div>
    </div>
  );
};

export default Image;
