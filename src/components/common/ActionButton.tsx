import { type FC, type MouseEventHandler } from "react";
import { BiLoader } from "react-icons/bi";

interface Props {
  title: string;
  busy?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ActionButton: FC<Props> = ({
  disabled,
  busy = false,
  title,
  onClick,
}): JSX.Element => {
  return (
    <button
      className="text-highlight-dark bg-action flex w-full items-center justify-center space-x-2 rounded px-6 py-2 font-semibold transition duration-100 hover:scale-[0.97]"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{title}</span>
      {busy && <BiLoader className="animate-spin" size={20} />}
    </button>
  );
};

export default ActionButton;
