import React from "react";
import { BsCheckLg } from "react-icons/bs";

interface Props {
  visible: boolean;
}
const CheckMark: React.FC<Props> = ({ visible }): JSX.Element | null => {
  if (!visible) return null;
  return (
    <div className="rounded-full bg-blue-600 bg-opacity-70 p-2 text-white backdrop-blur-sm">
      <BsCheckLg />
    </div>
  );
};

export default CheckMark;
