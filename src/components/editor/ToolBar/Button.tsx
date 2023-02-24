import React, { useCallback } from "react";
import classNames from "classnames";
interface Props {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<Props> = ({
  children,
  active,
  disabled,
  onMouseDown,
  onClick,
}) => {
  const getActiveStyle = useCallback((): string => {
    if (active) {
      return "darK:bg-primary dark:text-primary-dark bg-slate-800 text-white";
    } else {
      return "text-white bg-slate-400";
    }
  }, [active]);

  const commonClasses =
    "p-2 rounded text-lg hover:scale-110 hover:shadow-md transition";
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseDown={onMouseDown}
      disabled={disabled}
      className={classNames(commonClasses, getActiveStyle())}
    >
      {children}
    </button>
  );
};

export default Button;
