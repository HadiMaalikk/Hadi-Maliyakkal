import { Shirt } from "lucide-react";
import Bento from "../assets/Bento";
import FeedbackForm from "../assets/FeedbackForm";

const Portfolio = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src="/infinity.png"
              alt="Bg"
              className="absolute rotate-[-34deg] saturate-0 
              md:top-[445px] md:left-[-120px] md:scale-[1.5] 
              top-[465px] left-[-212px] scale-[1] opacity-90"
            />

            <img
              src="/infinity.png"
              alt="Bg"
              className="absolute saturate-0 rotate-[34deg]
              md:top-[275px] md:right-[-80px] md:scale-[1.7] 
              top-[185px] right-[-250px] scale-[1.3] opacity-90"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full">
          {/* RESPONSIVE GRID — desktop stays EXACTLY as original */}
          <div
            className="
        mt-32
             p-10
    grid 
    lg:gap-4
    gap-2 
    max-w-[1000px]
    lg:w-[1000px]
    h-auto lg:h-[600px]
    grid-cols-3
    auto-rows-[120px] sm:auto-rows-[150px] lg:auto-rows-auto
  "
          >
            {/* ---- ROW 1 (2 items) ---- */}

            <Bento
              to="#"
              className="
      transition-all duration-500 hover:bg-[#00000025] hover:border-white/30
      lg:text-[40px] text-[20px]
      
      /* Desktop original position */
      lg:col-span-1 lg:row-span-1

      /* Mobile layout */
      col-span-3 row-span-1 cursor-crosshair
    "
            >
              Portfolio
            </Bento>

            <Bento
              to="/fashion"
              className="
      transition-all duration-500 hover:bg-[#00000025] hover:border-white/30
      
      /* Desktop original */
      lg:col-span-1 lg:row-span-2

      /* Mobile layout (2 items on row 1) */
      col-span-1 row-span-2
    "
            >
              <Shirt
                className="lg:h-14 lg:w-14 h-10 w-10
    mx-auto"
                strokeWidth={1}
              />
            </Bento>

            {/* ---- ROW 2 (3 items) ---- */}

            <Bento
              to="/art"
              className="
      transition-all duration-500 hover:bg-[#00000025] hover:border-white/30

      /* Desktop original */
      lg:col-span-1 lg:row-span-1

      /* Mobile: now 3 in middle row */
      col-span-1 row-span-1
    "
            >
              <img
                src="/Pen.svg"
                className="lg:h-12 lg:w-12 h-10 w-10 mx-auto"
              />
            </Bento>

            <Bento
              to="/Design"
              className="
      transition-all duration-500 hover:bg-[#00000025] hover:border-white/30
      
      lg:col-span-1 lg:row-span-1
      
      col-span-1
    "
            >
              <img
                src="/Poster.svg"
                className="lg:h-12 lg:w-12 h-5 w-5 mx-auto"
              />
            </Bento>

            <Bento
              to="#"
              className="
      transition-all duration-500 hover:bg-[#00000025] hover:border-white/30
       scale-x-[-1]
      lg:col-span-1 lg:row-span-1
    text-[40px] 
      col-span-1 row-span-1 cursor-crosshair
    
    "
            >
              <span className="block scale-[0.4] lg:scale-[0.8]">
                Portfolio
              </span>
            </Bento>

            {/* ---- ROW 3 (2 items) ---- */}

            <Bento
              to="/projects"
              className="
      transition-all duration-500 hover:bg-[#00000025] hover:border-white/30 text-[40px]

      lg:col-span-2 lg:row-span-1

      /* Mobile → 2 boxes on last row */
      col-span-1 row-span-2
    "
            >
              {"</>"}
            </Bento>

            <Bento
              to="/editing"
              className="
      transition-all duration-500 hover:bg-[#00000025] hover:border-white/30

      lg:col-span-1 lg:row-span-1

      col-span-2 row-span-1
    "
            >
              <img src="/Scissors.svg" className="h-12 w-12 mx-auto" />
            </Bento>
          </div>
          {/* bento ends here*/}

          <FeedbackForm></FeedbackForm>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
