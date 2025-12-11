import { Link } from "react-router-dom";
import Bento from "../assets/Bento";
import { CompareButton } from "../components/CompareButton";

const Hero = () => {
  return (
    <>
      {/* SECTION 1 — HERO INTRO */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Infinity Left */}

        <div className="absolute inset-0 pointer-events-none -z-10">
          <img
            src="/infinity.png"
            alt="Bg"
            className="absolute rotate-[-34deg] saturate-0 
    md:top-[445px] md:left-[-212px] md:scale-[1.5] 
    top-[465px] left-[-212px] scale-[1] opacity-90"
          />

          <img
            src="/infinity.png"
            alt="Bg"
            className="absolute saturate-0 rotate-[34deg]
    md:top-[275px] md:right-[-230px] md:scale-[1.7] 
    top-[185px] right-[-250px] scale-[1.3] opacity-90"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full">
          <div className="relative text-center md:w-1/2">
            <h1 className="tracking-[-0.03em] text-4xl sm:text-5xl font-thin font-inter text-[#eeeeee] leading-tight hover:text-[#ff0000] transition-colors duration-500">
              Escape <span className="font-semibold">reality.</span>
            </h1>
            <h1 className="tracking-[-0.03em] text-4xl sm:text-5xl font-thin font-inter text-[#eeeeee] leading-tight hover:text-[#ff0000] transition-colors duration-500">
              Embrace <span className="font-semibold">infinity.</span>
            </h1>

            {/* Buttons */}
            <div className="mt-8 flex justify-center space-x-2">
              <Link
                to="portfolio"
                className="px-6 py-2 text-sm bg-[#5050501A] border border-white/30 text-[#eeeeee] rounded-l-md hover:bg-white hover:text-black transition-all duration-500"
              >
                Portfolio
              </Link>

              <Link
                to="/Hireme"
                className="px-6 py-2 text-sm bg-white text-black border border-white rounded-r-md hover:bg-[#5050501A] hover:text-[#eeeeee] hover:border-white/30 transition-all duration-500 hover:backdrop-blur-md"
              >
                Hire Me!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — HADI SHOWCASE */}
      <section className="relative min-h-screen flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full">
          <div className="relative w-full max-w-[700px] mx-auto">
            {/* Hadi Image */}
            <div className="absolute z-10 pointer-events-none top-[-240px] left-[20px] md:left-[150px]">
              <img
                src="/hadi2.png"
                alt="Bg"
                className="saturate-0 w-[280px] md:w-[360px]"
              />
            </div>

            {/* Name */}
            <h1
              className="absolute z-20 tracking-[-0.03em] text-[#eeeeee] font-thin leading-tight 
              text-[40px] left-[65px] top-[220px]
              md:text-[60px] md:left-[75px] md:top-[350px]"
            >
              iam <span className="font-semibold">Hadi Maliyakkal.</span>
            </h1>

            {/* Bento Cards */}
            <Bento
              to="/portfolio"
              className="font-medium absolute z-20 tracking-[-0.03em]
              top-[-130px] left-[200px] text-[22px] py-10 px-4
              md:top-[-110px] md:left-[380px] md:text-[30px] md:py-14 md:px-5
              hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-500"
              title="portfolio."
            />

            <Bento
              to="/projects"
              className="font-medium absolute tracking-[-0.03em]
              top-[-180px] left-[20px] text-[22px] py-10 px-4
              md:top-[-170px] md:left-[140px] md:text-[30px] md:py-14 md:px-5
              hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-500"
              title="projects."
            />

            <Bento
              to="/certificate"
              className="font-medium absolute tracking-[-0.03em]
              top-[60px] left-[220px] text-[20px] py-9 px-2
              md:top-[150px] md:left-[405px] md:text-[30px] md:py-16 md:px-4
              hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-500"
              title="certificates."
            />

            <Bento
              to="/resume"
              className="font-medium absolute z-10 tracking-[-0.03em]
              top-[30px] left-[-10px] text-[32px] py-10 px-4
              md:top-[100px] md:left-[65px] md:text-[50px] md:py-16 md:px-5
              hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-500"
              title="resume."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT ME */}
      <section className="relative min-h-[700px] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full">
          <div className="relative font-inter text-center md:w-1/2">
            <h1 className="text-[#eeeeee] text-2xl font-thin mt-[60px] mb-3">
              about <span className="font-semibold">me.</span>
            </h1>

            <div className="text-[#eeeeee] leading-tight font-thin text-[15px] mx-10 text-justify space-y-5">
              <p>
                Creative and technically skilled Full-stack Developer passionate
                about AI product design and user-centric experiences. Proficient
                in Python-based development, with a focus on building
                intelligent, intuitive, and efficient solutions.
              </p>
              <p>
                Experienced in Brand design, with a strong eye for visual
                identity and cohesive systems. Driven by passion for aesthetics
                and creativity, consistently infusing clarity, beauty, and
                purpose into every step.
              </p>
              <p>
                Outside dev work, I explore Video Editing and Graphic Design,
                constantly experimenting with visual techniques. I’ve done
                several freelance projects and enjoy football, fashion, and art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FOOTER / COMPARE */}
      <section className="relative min-h-[700px] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full">
          <div className="relative font-inter text-center md:w-1/2">
            {/* Background Infinity */}
            <div className="absolute inset-0 -z-10">
              <img
                src="/infinity.png"
                alt="Bg"
                className="absolute z-[-99] saturate-0 hover:saturate-100 transition-all duration-1000
              md:top-[-270px] md:left-[0px] md:scale-[0.5]
              top-[-165px] left-[0px] scale-[0.4] opacity-90"
              />
            </div>

            <p className="text-[#eeeeee] leading-tight font-thin md:text-lg text-xs">
              <span className="font-semibold">Infinity</span> can be anything —
              all it takes is the courage to{" "}
              <span className="font-semibold">leap</span>
            </p>

            <CompareButton />
          </div>
        </div>

        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#eeeeee] font-inter font-thin z-20">
          Designed by <span className="font-semibold">Hadi Maliyakkal.</span>
        </p>
      </section>
    </>
  );
};

export default Hero;
