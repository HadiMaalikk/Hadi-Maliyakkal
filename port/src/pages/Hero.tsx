import { Link } from "react-router-dom";
import Bento from "../assets/Bento";
import { CompareButton } from "../components/CompareButton";
const Hero = () => {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">

        <img
          src="./public/infinity.png"
          alt="Bg"
          className="z-[-99] absolute rotate-[-34deg] 
          saturate-0 md:top-[445px] md:left-[-212px] 
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
            <h1 className="tracking-[-0.03em] text-4xl sm:text-5xl font-thin font-inter
             text-[#eeeeee] leading-tight hover:text-[#ff0000] transition-colors duration-500">
              Escape <span className="font-semibold">reality.</span>
            </h1>
            <h1 className="tracking-[-0.03em] text-4xl sm:text-5xl font-thin font-inter text-[#eeeeee] leading-tight hover:text-[#ff0000] transition-colors duration-500">
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



          {/*HADI SECTION*/ }
          
          <section className="relative min-h-screen flex items-center">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full">

    {/* Group wrapper – NO SCALING (this was causing your jumps) */}
    <div className="relative w-full max-w-[700px] mx-auto">

      {/* Hadi Image */}
      <div
        className="
          absolute z-10 pointer-events-none
          md:top-[-240px] md:left-[150px]
          top-[-240px] left-[80px]
        "
      >
        <img
          src="./public/hadi2.png"
          alt="Bg"
          className="saturate-0 w-[280px] md:w-[360px]"
        />
      </div>

      {/* Name text */}
      <h1
        className="
          tracking-[-0.03em] text-[#eeeeee] font-thin leading-tight absolute z-20
          text-[40px] left-[65px] top-[220px]
          md:text-[60px] md:left-[75px] md:top-[350px]
        "
      >
        iam <span className="font-semibold">Hadi Maliyakkal.</span>
      </h1>

      {/* Bento – portfolio */}
      <Bento
        to="/portfolio"
        className="
          tracking-[-0.03em] absolute z-20
          top-[-130px] left-[260px] text-[22px] py-10 px-4
          
          md:top-[-110px] md:left-[380px] md:text-[30px] md:py-14 md:px-5
          hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-500
        "
        title="portfolio."
      />

      {/* Bento – hobbies */}
      <Bento
        to="/hobbies"
        className="
          tracking-[-0.03em] absolute z-0
          top-[-180px] left-[80px] text-[22px] py-10 px-4
          
          md:top-[-200px] md:left-[140px] md:text-[30px] md:py-14 md:px-5
          hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-500
        "
        title="hobbies."
      />

      {/* Bento – certificates */}
      <Bento
        to="/certificate"
        className="
          tracking-[-0.03em] absolute z-0
          top-[60px] left-[270px] text-[22px] py-10 px-3
          
          md:top-[150px] md:left-[405px] md:text-[30px] md:py-16 md:px-4
          hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-500
        "
        title="certificates."
      />

      {/* Bento – resume */}
      <Bento
        to="/resume"
        className="
          tracking-[-0.03em] absolute z-10
          top-[30px] left-[40px] text-[32px] py-10 px-4
          
          md:top-[100px] md:left-[65px] md:text-[50px] md:py-16 md:px-5
          hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-500
        "
        title="resume."
      />

    </div>
  </div>
</section>




          <section className="relative min-h-[700px] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center w-full">
          <div className="relative font-inter text-center md:text-center md:w-1/2">
            <h1 className="text-[#eeeeee] text-2xl font-thin mt-[60px] mb-3 ">
              about <span className="font-semibold">me.</span>
            </h1>
            <div className="text-[#eeeeee] leading-tight font-thin text-[15px] mx-16 text-justify space-y-5">
  <p>
    Creative and technically skilled Full-stack Developer passionate about AI product design and user-centric experiences.
    Proficient in Python-based development, with a focus on building intelligent, intuitive, and efficient solutions.
  </p>
  <p>
    Experienced in Brand design, with a strong eye for visual identity and cohesive systems.
    Driven by a strong passion for aesthetics and creativity, consistently infusing clarity, beauty, and purpose into every step of the development process.
  </p>
  <p>
    Aside from dev work, I indulge in Video Editing and Graphic Design as hobbies, constantly exploring new techniques and styles to enhance my creative skills.
    Have done several freelance projects, collaborating with clients to bring their visions to life through compelling visuals and engaging content. Football, Fashion and Art are some of my other interests.
  </p>

</div>

          </div>
        </div>
      </section>

      <section className=" relative min-h-[700px] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center w-full">
          <div className="relative font-inter text-center md:text-center md:w-1/2">
            <img
          src="./public/infinity.png"
          alt="Bg"
          className="z-[-99] absolute hover:saturate-100 saturate-0 transition-all duration-1000
           md:top-[-270px] md:left-[0px] 
          md:scale-[0.5] top-[-200px] left-[0px] scale-[0.4] opacity-90"
        />
            <p className="text-[#eeeeee] leading-tight font-thin md:text-lg text-sm">
              <span className="font-semibold">Infinity</span> can be anything - All it takes is the courage to <span className="font-semibold">leap</span>
            </p>

            <CompareButton />
          </div>
        </div>
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#eeeeee] font-inter font-thin z-20 ">
          Designed by <span className="font-semibold">Hadi Maliyakkal.</span>
        </p>
      </section>
    </div>
  );
};

export default Hero;
