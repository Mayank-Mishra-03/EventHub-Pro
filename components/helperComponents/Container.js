import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-6xl mx-auto py-10 md:py-20 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
