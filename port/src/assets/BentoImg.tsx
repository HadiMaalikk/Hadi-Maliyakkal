// components/BentoImg.tsx

import React from "react";

interface BentoImgProps {
  children: React.ReactNode;
  className?: string;
}

const BentoImg: React.FC<BentoImgProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-[#5050501A]
        backdrop-blur
        border border-white/30
        rounded-2xl
        flex items-center justify-center
        text-[#cacaca]
        transition-all duration-500
        hover:bg-[#5f5f5f1a]
        hover:border-white/50
        hover:text-[#eeeeee]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default BentoImg;
