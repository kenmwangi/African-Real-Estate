import React, { useState } from "react";
interface Props {
  options: { label: string; onClick(): void }[];
  head: React.ReactNode;
}

const DropdownOptions: React.FC<Props> = ({ head, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <button
      onBlur={() => setShowOptions(false)}
      onMouseDown={() => setShowOptions(!showOptions)}
      className="relative"
    >
      {head}
      {showOptions && (
        <div className="absolute top-full right-2 z-10 mt-4 min-w-max rounded border-2 border-slate-700 bg-white text-left">
          <ul className="space-y-3 p-3">
            {options.map(({ label, onClick }, index) => {
              return (
                <li onMouseDown={onClick} key={`${label} + ${index}`}>
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </button>
  );
};

export default DropdownOptions;
