import { Link } from "react-router-dom";
import React from "react";

interface BentoProps {
  title: string;
  to: string;
  className?: string;
}

const Bento: React.FC<BentoProps> = ({ title, to, className = "" }) => {
  return (
    <div >
      <Link
        to={to}
        className={`text-[#eeeeee] hover:text-[#cacaca] text-center transition-all duration-300  border border-white/30 bg-[#5050501A] backdrop-blur rounded-[20px] font-inter font-medium flex justify-center items-center ${className}`}>
        {title}
      </Link>
    </div>
  );
};

export default Bento;
