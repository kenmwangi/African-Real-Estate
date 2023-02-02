import React from "react";
type ContainerProps = {
  className: string;
  children: React.ReactNode;
};

const Container = ({ className, children }: ContainerProps) => {
  return (
    <section
      className={`container mx-auto py-8 xl:px-0 ${className ? className : ""}`}
    >
      {children}
    </section>
  );
};

export default Container;
