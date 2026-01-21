import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-6xl mx-auto py-10 md:py-20 md:px-0 px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
