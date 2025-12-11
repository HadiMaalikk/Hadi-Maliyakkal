import { Link } from "react-router-dom";
import React from "react";

interface BentoProps {
  title?: string;
  to: string;
  children?: React.ReactNode;
  className?: string;
}

const Bento: React.FC<BentoProps> = ({ title, to, children, className = "" }) => {
  return (
    <Link
      to={to}
      className={`
        text-[#cacaca] hover:text-[#eeeeee] text-center
        border border-white/15 bg-[#5050501A] backdrop-blur
        rounded-[16px] font-inter 
        flex justify-center items-center
        transition-all duration-300
        ${className}
      `}
    >
      {children ? children : title}
    </Link>
  );
};

export default Bento;
