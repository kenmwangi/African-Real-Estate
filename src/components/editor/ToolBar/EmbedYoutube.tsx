import React, { useState } from "react";
import Button from "../ToolBar/Button";
import { BsYoutube } from "react-icons/bs";

interface Props {
  onSubmit(link: string): void;
}
const EmbedYoutube: React.FC<Props> = ({ onSubmit }) => {
  const [url, setUrl] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    if (!url.trim()) return hideForm();

    onSubmit(url);
    setUrl("");
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
        <BsYoutube />
      </Button>
      {visible && (
        <div className="absolute top-full right-0 z-50 mt-4">
          <div className="flex space-x-2">
            <input
              autoFocus
              type="text"
              placeholder="https://youtube.com"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
              className="rounded border-2 border-slate-400 bg-transparent p-2 text-slate-800 transition focus:border-slate-800"
            />
            <button
              onClick={handleSubmit}
              className="rounded bg-indigo-500 p-2 text-sm text-white transition-colors hover:bg-indigo-600"
            >
              Embed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmbedYoutube;
