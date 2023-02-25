import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import ModalContainer, {
  type ModalContainerProps,
} from "src/components/common/ModalContainer";

import ActionButton from "../../common/ActionButton";
import Gallery from "./Gallery";

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

export interface ImageSelectionResult {
  src: string;
  altText: string;
}
interface Props extends ModalContainerProps {
  onImageSelect(image: File): void;
  onSelect(result: ImageSelectionResult): void;
}
const GalleryModal: React.FC<Props> = ({
  visible,
  onImageSelect,
  onClose,
  onSelect,
}): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState("");
  const [altText, setAltText] = useState("");

  const handleOnImageChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { files } = target;
    if (!files) return;

    const file = files[0];
    if (!file?.type.includes("image")) return onClose && onClose();

    onImageSelect(file);
  };

  const handleSelection = () => {
    if (!selectedImage) return onClose && onClose();
    onSelect({ src: selectedImage, altText: altText });
  };
  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <div className="max-w-4xl rounded bg-slate-800 p-2">
        <div className="flex">
          {/* Gallery */}
          <div className="custom-scroll-bar max-h-[450px] basis-[75%] overflow-y-auto">
            <Gallery
              images={images}
              onSelect={(src) => setSelectedImage(src)}
              selectedImage={selectedImage}
            />
          </div>
          {/* Image Selection  and upload*/}
          <div className="basis-1/4 px-2">
            <div className="space-y-4">
              <div>
                <input
                  onChange={handleOnImageChange}
                  hidden
                  type="file"
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <div className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded border-2 border-blue-600 p-2 text-blue-600">
                    <AiOutlineCloudUpload />
                    <span>Upload Image</span>
                  </div>
                </label>
              </div>
              {selectedImage ? (
                <>
                  <textarea
                    placeholder="Alt Text"
                    value={altText}
                    onChange={({ target }) => setAltText(target.value)}
                    className="h-32 w-full resize-none border-2 border-slate-400 bg-transparent bg-slate-800 p-1 text-white transition focus:ring-1"
                  ></textarea>
                  <ActionButton onClick={handleSelection} title="Select" />
                  <div className="aspect-video relative bg-png-pattern">
                    <Image
                      src={selectedImage}
                      fill
                      className="object-contain"
                      alt=""
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default GalleryModal;
