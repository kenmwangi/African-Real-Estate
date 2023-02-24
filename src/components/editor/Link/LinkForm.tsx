import React, { useState } from "react";

import { validateUrl } from "../ToolBar/EditorUtils";

interface Props {
  visible: boolean;
  onSubmit(link: linkOption): void;
}

export type linkOption = {
  url: string;
  openInNewTab: boolean;
};

const defaultLink = {
  url: "",
  openInNewTab: false,
};
const LinkForm: React.FC<Props> = ({
  visible,
  onSubmit,
}): JSX.Element | null => {
  const [link, setLink] = useState<linkOption>(defaultLink);

  const handleSubmit = () => {
    onSubmit({ ...link, url: validateUrl(link.url) });
    resetForm();
  };

  const resetForm = () => {
    setLink({ ...defaultLink });
  };
  if (!visible) return null;
  return (
    <div className="rounded p-2 shadow shadow-slate-200">
      <input
        autoFocus
        type="text"
        placeholder="https://www,example.com"
        value={link.url}
        onChange={({ target }) => setLink({ ...link, url: target.value })}
        className="rounded border-2 border-slate-400 bg-transparent p-2 text-slate-800 transition focus:border-slate-800"
      />
      <div className="mt-2 flex items-center space-x-2">
        <input type="checkbox" name="open" id="open-in-new-tab" />
        <label htmlFor="open-in-new-tab">open in new tab</label>
        <div className="flex-1 text-right">
          <button
            onClick={handleSubmit}
            className="rounded bg-indigo-500 px-2 py-1 text-sm text-white transition-colors hover:bg-indigo-600"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
