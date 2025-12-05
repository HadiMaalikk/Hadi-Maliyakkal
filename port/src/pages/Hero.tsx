import { Link } from "react-router-dom";
import Bento from "../assets/Bento";
import { CompareButton } from "../components/CompareButton";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center">
        {/* Blurred Background 
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[0px] opacity-100"
        style={{ backgroundImage: "url('/infibg2.png')" }}
      />

          <img
          src="./public/infinity.png"
          alt="Bg"
          className="z-[-99] absolute rotate-[-34deg] saturate-0 md:top-[465px] md:left-[-212px] md:scale-[1.7] top-[350px] left-[-120px] scale-[0.8]"
        />

      */}
        
        <img
          src="./public/infinity.png"
          alt="Bg"
          className="z-[-99] absolute rotate-[-34deg] 
          saturate-0 md:top-[465px] md:left-[-212px] 
          md:scale-[1.5] top-[465px] left-[-212px] scale-[1] opacity-90"
        />

        <img
          src="./public/infinity.png"
          alt="Bg"
          className="z-[-99] absolute saturate-0 md:top-[275px] md:right-[-230px]
          rotate-[34deg] md:scale-[1.7] top-[185px] right-[-250px] scale-[1.3] opacity-90"
        />


        

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center w-full">
          {/* Text Content */}
          <div className="relative text-center md:text-center md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-thin font-inter text-[#eeeeee] leading-tight">
              Escape <span className="font-semibold">reality.</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl font-thin font-inter text-[#eeeeee] leading-tight">
              Embrace <span className="font-semibold"> infinity.</span>
            </h1>

            <div className="mt-8 flex justify-center md:justify-center space-x-2 ">
              <Link
                to="portfolio"
                className="px-6 py-2 text-sm bg-[#5050501A] border border-white/30 text-[#eeeeee] rounded-l-md hover:bg-white hover:text-black transition-all duration-500 backdrop-blur"
              >
                Portfolio
              </Link>
              
              <Link
              to="/Hireme"
              className="px-6 py-2 text-sm bg-white text-black border border-white rounded-r-md hover:bg-[#5050501A] hover:text-[#eeeeee] hover:border-white/30 transition-all duration-500 hover:backdrop-blur"
            >
              Hire Me!
            </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center w-full">
              <div className="relative font-inter text-center md:text-center md:w-1/2">
              
              <div className="flex gap-2 justify-center mb-6 flex-wrap"> 
              <Bento to = "/portfolio" className="py-10 aspect-square w-48 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500" title="Portfolio"></Bento>
              <Bento to = "/portfolio" className="py-10 aspect-square w-48 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500" title="Portfolio"></Bento>
              <Bento to = "/portfolio" className="py-10 aspect-square w-48 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500" title="Portfolio"></Bento>
              <Bento to = "/portfolio" className="py-10 aspect-square w-48 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500" title="Portfolio"></Bento>
              <Bento to = "/portfolio" className="py-10 aspect-square w-48 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500" title="Portfolio"></Bento>
              <Bento to = "/portfolio" className="py-10 aspect-square w-48 hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500" title="Portfolio"></Bento>
              <CompareButton/>
              </div>
              <h1 className="text-white text-2xl font-thin mb-3">
                about <span className="font-bold">me.</span>
              </h1>
              <p className="text-white leading-tight font-thin">
                Hello! I'm Hadi Maliyakkal, a passionate web developer with a knack for creating stunning and functional websites.
                With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in building responsive and user-friendly web applications.
                My journey in web development began with a curiosity for how websites work, which quickly turned into a full-blown passion.
                I love transforming ideas into reality through code and design. When I'm not coding, you can find me exploring the latest tech trends or indulging in my hobbies like photography and gaming.
                Let's connect and create something amazing together!
              </p>

              

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