import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-full bg-indigo-600 py-3 px-7 font-semibold tracking-widest text-white transition-colors hover:bg-indigo-700 focus:outline-none">
      {children}
    </button>
  );
};

export default Button;
