import React, { useState } from "react";
import Button from "../ToolBar/Button";
import LinkForm, { type linkOption } from "./LinkForm";
import { BsLink45Deg } from "react-icons/bs";

interface Props {
  onSubmit(link: linkOption): void;
}
const InsertLink: React.FC<Props> = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);

  const handleSubmit = (link: linkOption) => {
    if (!link.url.trim()) return hideForm();

    onSubmit(link);
    hideForm();
  };
  const hideForm = () => setVisible(false);
  const showForm = () => setVisible(true);
  return (
    <div
      onKeyDown={({ key }) => {
        // console.log(key);
        if (key === "Escape") {
          hideForm();
        }
      }}
      className="relative"
    >
      <Button onClick={visible ? hideForm : showForm}>
        <BsLink45Deg />
      </Button>
      <div className="absolute top-full right-0 z-50 mt-4">
        <LinkForm visible={visible} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default InsertLink;
