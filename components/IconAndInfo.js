import React from "react";

const IconAndInfo = ({ children, Icon, className }) => {
  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`}>
      <Icon size={20} />
      {children}
    </div>
  );
};

export default IconAndInfo;
