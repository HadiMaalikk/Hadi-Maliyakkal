import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

interface CardDemoProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  to: string;
}

const CardDemo: React.FC<CardDemoProps> = ({
  title,
  description,
  icon,
  className,
  to,
}) => {
  return (
    <Link to={to} className="block w-full">
      <div
        className={cn(
          "group relative w-full aspect-[3/4]",
          "rounded-[16px]",
          "bg-black hover:bg-[#00000025]",
          "border border-white/15 hover:border-white/30",
          "transition-all duration-500",
          "overflow-hidden backdrop-blur",
          className
        )}
      >
        {/* ICON / IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
          <div
            className="
            
              h-24 w-24
              flex items-center justify-center
              transition-all duration-500
              group-hover:scale-75
            "
          >
            {icon}
          </div>
        </div>

        {/* TEXT OVERLAY */}
        <div
          className="
            absolute inset-0
            flex flex-col items-center justify-end
            px-6 pb-8 text-center
            opacity-0 translate-y-4
            transition-all duration-500
            group-hover:opacity-100 group-hover:translate-y-0
          "
        >
          <h3 className="text-xl font-semibold text-[#eeeeee] mb-2">{title}</h3>
          <p className="text-sm text-[#cacaca]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardDemo;
