import React from "react";
import ModalContainer, {
  type ModalContainerProps,
} from "src/components/common/ModalContainer";

import Gallery from "./Gallery";

interface Props extends ModalContainerProps {
  text?: string;
}
const GalleryModal: React.FC<Props> = ({ visible, onClose }): JSX.Element => {
  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <div className="max-w-4xl rounded bg-slate-800 p-2">
        <div className="flex">
          {/* Gallery */}
          <div className="custom-scroll-bar max-h-[450px] basis-[75%] overflow-y-auto">
            <Gallery />
          </div>
          {/* Image Selection  and upload*/}
          <div className="basis-1/4"></div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default GalleryModal;
